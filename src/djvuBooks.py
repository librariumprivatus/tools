import pathlib
import subprocess
import utils
import pdfBooks


def convert2txt(path: pathlib.Path, output: pathlib.Path, pages: list) -> pathlib.Path | None:
    command = ['djvutxt']

    if pages:
        command.append('--page={pages}'.format(pages=','.join(pages)))

    command.append(f'{path.as_posix()}', )
    command.append(f'{output.as_posix()}')

    try:
        result = subprocess.call(command)
    except Exception:
        print('Err.', 'try: result = subprocess.call(command)')
        return

    if result != 0:
        print('Err. ', 'if result != 0:')
        return

    return output


def get_text(path: pathlib.Path, pages: list):
    """
    pages: - in format str for : -pages=1,2,3,7-9
        """
    txt = path.with_name(f'{path.name}.txt')
    if pathlib.Path('/tmp').exists():
        txt = pathlib.Path('/tmp').joinpath(txt.name)

    if not (output_txt_file := convert2txt(path, txt, pages=pages)):
        print('Err.', 'output_txt_file = convert2txt(path, txt, pages=pages)')
        txt.unlink()
        return

    text = utils.read_file(output_txt_file)
    txt.unlink()

    return text


def djvu2pdf(path: pathlib.Path, output: pathlib.Path, pages: list, quality=80) -> pathlib.Path | None:
    command = ['ddjvu', '-format=pdf']
    if pages:
        pages = [str(page) for page in pages]
        command.append('-page={pages}'.format(pages=','.join(pages)))

    if quality:
        command.append(f'-quality={quality}')

    command.append(f'{path.as_posix()}', )

    output = pathlib.Path(output).with_name(f'{path.name}.pdf')
    command.append(f'{output.as_posix()}')

    if (result := subprocess.call(command)) != 0:
        print('Result: ', result)
        return

    return output


def cover(path: pathlib.Path, output: pathlib.Path) -> pathlib.Path | None:
    tmp_pdf_path = f'{output.stem}.pdf' if output else f'{path.name}.pdf'
    if pathlib.Path('/tmp').exists():
        tmp_pdf_path = pathlib.Path('/tmp').joinpath(tmp_pdf_path)

    if not (pdf_temp := djvu2pdf(path=path, output=tmp_pdf_path, pages=[1])):
        print('Err', 'not pdf.exists():')
        return

    output = output if output else f'{path.name}.jpg'
    # PDF (tmp) -> IMG
    if not (image := pdfBooks.cover(pdf_temp, output=output)):
        print('🔻Err - if not cover:')
        return

    # Remove PDF (tmp)
    pdf_temp.unlink()

    return image
