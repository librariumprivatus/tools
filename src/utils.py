import pathlib
import os
import math
import slugify
import hashlib
import json


def walk_files(path: pathlib.Path) -> list[pathlib.Path]:
    data = []
    for root, dirs, files in os.walk(path.as_posix(), topdown=False):
        for name in files:
            file_path = os.path.join(root, name)
            data.append(file_path)

    all_files = [pathlib.Path(file) for file in data]
    return all_files


def read_file(path: pathlib.Path):
    try:
        with open(path.as_posix()) as f:
            data = f.read()
    except Exception:
        print('Err - except Exception: try: with open(path.absolute().as_posix()) ')
        return

    return data


def text_trimmer(text, top_limit: float = math.inf):
    return ''.join([symbol for idx, symbol in enumerate(text) if idx < top_limit])


def get_hashed_path(
        path: pathlib.Path,
        parent_limit: int = 10,
        name_limit: int = 16,
        paths_divider: str = '🔹',):

    parents = path.parts[:-1]

    parents = list(filter(lambda parent: parent != '/', parents))

    parents_name = [text_trimmer(parent, top_limit=parent_limit) for parent in parents]

    parents_unite = paths_divider.join(parents_name)

    short_name = text_trimmer(path.stem, top_limit=name_limit)

    name = f'{parents_unite}{paths_divider}{short_name}{path.suffix}'

    return name


def read_json(path: pathlib.Path):
    with open(path.as_posix(), 'r') as f:
        data = json.load(f)

    return data


def write_json(path: pathlib.Path, data) -> pathlib.Path | None:
    with open(path, 'w+', encoding='utf-8') as file:
        json.dump(data, file, indent=2, sort_keys=True, ensure_ascii=False)

    return path


def write_file(path: pathlib.Path, data) -> pathlib.Path | None:
    try:
        with open(path.as_posix(), "wb") as f:
            f.write(data)
    except Exception:
        print('Err.', 'try: with open(cover.as_posix()')
        return

    return path


def md5(text):
    return hashlib.md5(text.encode()).hexdigest()


def slug(text):
    return slugify.slugify(text)
