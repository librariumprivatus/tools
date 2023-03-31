import pathlib
import utils
import enum

DEBUG = False


class Book:
    class TAG(enum.Enum):
        ROOT = 'root'
        RELATIVE = 'relative'

    identifier: str
    data: dict = {}

    @property
    def root(self) -> pathlib.Path:
        return pathlib.Path(self.data.get(self.TAG.ROOT.value))

    @property
    def relative(self) -> pathlib.Path:
        return pathlib.Path(self.data.get(self.TAG.RELATIVE.value))

    @property
    def path(self) -> pathlib.Path:
        return self.root.joinpath(self.relative)

    @property
    def id_short(self) -> str:
        md5_of_path = utils.md5(self.relative.as_posix())
        short_md5 = utils.text_trimmer(md5_of_path, top_limit=8)
        slug_name = utils.slug(self.path.name)
        id_short = f'{slug_name}-{short_md5}'
        return id_short

    def __init__(self, identifier):
        self.identifier = identifier

    def __str__(self):
        return '⚪️ <Book ID {identifier}>'.format(identifier=self.identifier)


class StoreData:
    class TAG(enum.Enum):
        ROOT: str = 'root'
        BOOKS: str = 'books'
        COVERS: str = 'covers'

    config: dict = {}

    @property
    def root(self) -> pathlib.Path:
        return self.config.get(self.TAG.ROOT.value)

    @property
    def books(self) -> pathlib.Path:
        return self.config.get(self.TAG.BOOKS.value)

    @property
    def covers(self) -> pathlib.Path:
        return self.config.get(self.TAG.COVERS.value)

    def __init__(self, root: pathlib.Path):
        self.config[self.TAG.ROOT.value] = root
        self.root.mkdir(parents=True, exist_ok=True)

        self.config[self.TAG.BOOKS.value] = self.root.joinpath(self.TAG.BOOKS.value)
        self.books.mkdir(parents=True, exist_ok=True)

        self.config[self.TAG.COVERS.value] = self.root.joinpath(self.TAG.COVERS.value)
        self.covers.mkdir(parents=True, exist_ok=True)


class CollectionBooks:
    class TAG(enum.Enum):
        ROOT = 'root'
        RELATIVE = 'relative'
        STORE = 'data'

    SUPPORTED_BOOK_TYPES = [
        '.pdf',
        '.epub',
        '.djvu',
        '.djv',
        '.fb2',
    ]
    JSON_PATTERN = '{identifier}.json'

    config: dict = {}
    books: dict[str, Book] = {}
    store: StoreData

    @property
    def root(self) -> pathlib.Path:
        return self.config.get(self.TAG.ROOT.value)

    def add(self, book: Book):
        if DEBUG:
            print('🟢 ADD ', book)
        self.books[book.identifier] = book

    def __init__(self, root):
        if not (root := pathlib.Path(root)).exists():
            print('🔻Err.', 'if not path.exists():')

        self.config[self.TAG.ROOT.value] = root

        self.store = StoreData(root=pathlib.Path(self.TAG.STORE.value))

        self.read()

    def read(self):
        files = utils.walk_files(self.store.books)
        files_json = list(filter(lambda f: f.suffix in ['.json'], files))

        for file_json in files_json:
            if not (data_json := utils.read_json(file_json)):
                print('🔸Warn - if not data_json:')
                continue

            book = Book(identifier=file_json.stem)
            book.data = data_json
            self.add(book)

    def update(self):
        files = utils.walk_files(self.root)
        files_books = list(filter(lambda f: f.suffix in self.SUPPORTED_BOOK_TYPES, files))

        for file_book in files_books:
            relative = file_book.relative_to(self.root)
            identifier = self.get_identifier(relative)

            book = self.books.get(identifier)
            if not book:
                book = Book(identifier=identifier)
                data = {
                    self.TAG.ROOT.value: self.root.as_posix(),
                    self.TAG.RELATIVE.value: relative.as_posix(),
                    self.TAG.STORE.value: self.store.books.as_posix(),
                }
                book.data = data
                self.add(book)

    def save(self):
        for identifier, book in self.books.items():
            json_filename = self.JSON_PATTERN.format(identifier=book.identifier)
            json_file = self.store.books.joinpath(json_filename)
            utils.write_json(json_file, book.data)

    @staticmethod
    def get_identifier(path):
        md5 = utils.md5(path.as_posix())
        md5 = utils.text_trimmer(md5, 8)
        path = path.joinpath(md5)
        return utils.get_hashed_path(path)
