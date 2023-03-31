from pdf2image import convert_from_path
import pathlib
from pypdf import PdfReader

DEBUG = False


def pdf2text(path: pathlib.Path, pages_list: list = None):
    if not (pdf := PdfReader(path.as_posix())):
        print('Err - if not (pdf := PdfReader(path.as_posix())):')
        return

    if not pages_list:
        pages_list = list(range(len(pdf.pages)))

    texts = []
    for page_number in pages_list:
        try:
            page = pdf.pages[page_number]
            text = page.extract_text()
        except Exception:
            print('Err - tr page.extract_text()')
            continue

        texts.append(text)

    return texts


def get_images(path: pathlib.Path, output: pathlib.Path, only_first_page=False):
    images = convert_from_path(
        pdf_path=path.as_posix(),
        single_file=only_first_page,
        output_folder=output.parent.absolute(),
        output_file=output.stem,
        fmt=output.suffix
    )

    return images


def cover(path: pathlib.Path, output: pathlib.Path) -> pathlib.Path | None:
    if not get_images(path, output, only_first_page=True):
        print('Err - if not pdf_images_result:')
        return None

    return output
