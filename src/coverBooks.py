import pathlib

import collectionBooks
import utils
import pdfBooks
import djvuBooks
import epubBooks


SUPPORTED_BOOK_TYPES = [
        '.pdf',
        '.djvu',
        '.djv',
        '.epub',
    ]


def create(path: pathlib.Path, output: pathlib.Path) -> pathlib.Path | None:
    match path.suffix:
        case '.pdf':
            return pdfBooks.cover(path, output)

        case '.djvu' | '.djv':
            return djvuBooks.cover(path, output)

        case '.epub':
            return epubBooks.cover(path, output)

        case _:
            print('🔸Warn - Extension of your file is not supported')
            return None


def make(collection: collectionBooks.CollectionBooks):
    for identifier, book in collection.books.items():
        print('Book', book.relative)

        md5_of_path = utils.md5(book.relative.as_posix())
        short_md5 = utils.text_trimmer(md5_of_path, top_limit=8)
        slug_name = utils.slug(book.path.name)
        cover_file = pathlib.Path('data/covers').joinpath(f'{slug_name}-{short_md5}.jpg')

        if not (cover_path := create(book.path, cover_file)):
            continue

        print(cover_path)
        print()
