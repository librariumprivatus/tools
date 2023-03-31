import subprocess
import pathlib

from concurrent.futures import ThreadPoolExecutor

def exec_(cmd):
    '''
    single command run
    command must be prepared as subprocess.call
    '''
    ret = subprocess.call(cmd)
    if ret == 0:
        print("success...")
    else:
        print("error")


def run(commands_bash_list: list = [], max_workers: int = 1):
    '''
    run pull of jobs
    input:
        parallel_jobs: integer, how many jobs at once
        cmds: list of commands
    '''
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = executor.map(exec_, commands_bash_list)







