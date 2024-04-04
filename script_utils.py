from datetime import datetime
from json import loads, dumps
from pathlib import Path
from subprocess import run as _run
from sys import argv
from threading import Thread
from time import sleep


root = Path(__file__).parent.absolute()

cache_path = root.joinpath('cache.json')
web_front_path = root.joinpath('web/front')
web_md_renderer_path = root.joinpath('web/md')
web_pack_path = root.joinpath('web/back')

remote_prefixes = [
    'git@gitee.com:realzh/',
    'git@github.com:realzh/',
    'git@e.coding.net:realrealzh/documentations/',
    'git@codeup.aliyun.com:6224618a750448811a8d8e92/realzh/',
]

res_suffixes = [
    '0', '1', '2', '3', '4', '5', '6', '7', 'sr1'
]


def error(msg: str):
    print('\x1b[31mError:\x1b[0m %s' % str(msg))
    exit(1)


def log(msg: str):
    print('Log: %s' % str(msg))


def red():
    print('\x1b[31m', end='')


def green():
    print('\x1b[32m', end='')


def color_reset():
    print('\x1b[0m', end='')


def divide(msg: str = '', color='2'):
    print('\x1b[3' + color + 'm' + f' {msg} '.center(80, '-') + '\x1b[0m')


def run(cmd: str, *, check=True):
    print('\x1b[34m$\x1b[0m', cmd)
    _run(cmd, shell=True, check=check, text=True)


if len(argv) < 2:
    error('Invalid argument')

cmd = argv[1]

args = argv[2:]


def get_current_timestamp_for_cache():
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")


def sync_keybindings():
    cache = loads(cache_path.read_text(encoding='utf-8'))

    current_keybindings_str = Path(
        'C:\\Users\\realzh\\AppData\\Roaming\\Code\\User\\keybindings.json').read_text(encoding='utf8')

    vsc_keybindings_history: list = cache['vsc_keybindings_history']

    if len(vsc_keybindings_history) == 0 or vsc_keybindings_history[-1]['keybindings'] != current_keybindings_str:
        vsc_keybindings_history.append(
            {'date': get_current_timestamp_for_cache(), 'keybindings': current_keybindings_str})
        print('keybinding updated')
        cache_path.write_text(dumps(cache, indent=4), encoding='utf-8')


def sync_powershell_profile():
    cache = loads(cache_path.read_text(encoding='utf-8'))

    current_profile = Path(
        "C:\\Users\\realzh\\Documents\\PowerShell\\Microsoft.PowerShell_profile.ps1").read_text(encoding='utf8')

    powershell_profile_history: list = cache['powershell_profile_history']
    if len(powershell_profile_history) == 0 or powershell_profile_history[-1]['profile'] != current_profile:
        powershell_profile_history.append(
            {'date': get_current_timestamp_for_cache(), 'profile': current_profile})
        print('powershell profile updated')
        cache_path.write_text(dumps(cache, indent=4), encoding='utf-8')


def sync_vsc_settings():
    cache = loads(cache_path.read_text(encoding='utf-8'))

    current_settings_str = Path(
        'C:\\Users\\realzh\\AppData\\Roaming\\Code\\User\\settings.json').read_text(encoding='utf8')

    vsc_settings_history: list = cache['vsc_settings_history']

    if len(vsc_settings_history) == 0 or vsc_settings_history[-1]['settings'] != current_settings_str:
        vsc_settings_history.append(
            {'date': get_current_timestamp_for_cache(), 'settings': current_settings_str})
        print('vsc settings updated')
        cache_path.write_text(dumps(cache, indent=4), encoding='utf-8')


def sync_gitconfig():
    cache = loads(cache_path.read_text(encoding='utf-8'))
    current_config_str = Path(
        'C:\\Users\\realzh\\.gitconfig').read_text(encoding='utf8')
    gitconfig_history: list = cache['gitconfig']
    if len(gitconfig_history) == 0 or gitconfig_history[-1]['config'] != current_config_str:
        gitconfig_history.append(
            {'date': get_current_timestamp_for_cache(), 'config': current_config_str})
        print('gitconfig updated')
        cache_path.write_text(dumps(cache, indent=4), encoding='utf-8')


def sync_trivial():

    sync_keybindings()
    sync_powershell_profile()
    sync_vsc_settings()
    sync_gitconfig()


def push():

    def get_name_from_prefix(prefix: str):
        return prefix.split('@')[1].split(':')[0]

    divide('push start')

    msg = f"auto commit {datetime.now().astimezone().strftime('%Y-%m-%d-%H-%M-%S-%z').replace('+','')}"

    print(msg)

    divide('doc')

    run(f'git -C {root} add --all')
    run(f'git -C {root} commit -m "{msg}"', check=False)
    for prefix in remote_prefixes:
        url = prefix + 'doc.git'
        divide(get_name_from_prefix(prefix), color='3')
        run(f'git -C {root} remote rm origin', check=False)
        run(f'git -C {root} remote add origin {url}')
        run(f'git -C {root} push --set-upstream origin master')

    for res in sorted(root.glob('res-*')):
        divide(res.name)
        run(f'git -C {res} add --all')
        run(f'git -C {res} commit -m "{msg}"', check=False)
        for prefix in remote_prefixes:
            divide(get_name_from_prefix(prefix), color='3')
            url = prefix + res.name + '.git'
            run(f'git -C {res} remote rm origin', check=False)
            run(f'git -C {res} remote add origin {url}')
            run(f'git -C {res} push --set-upstream origin master')

    divide('push complete')


def pull():
    divide('doc')

    url = remote_prefixes[0] + 'doc.git'
    run(f'git -C {root} remote rm origin', check=False)
    run(f'git -C {root} remote add origin {url}')
    run(f'git -C {root} fetch')
    run(f'git -C {root} branch --set-upstream-to=origin/master master')
    run(f'git -C {root} pull')

    for suffix in res_suffixes:
        res = root.joinpath(f'res-{suffix}')
        divide(res.name)
        url = remote_prefixes[0] + res.name + '.git'
        if not res.exists():
            run(f'git -C {root} clone {url}')
        else:
            run(f'git -C {res} pull')


def check():
    res_names = []
    for file in root.glob('res-*/*'):
        if file.name == '.git':
            continue
        if file.name in res_names:
            error(f'Duplicate res file{file.name}')
        res_names.append(file.name)
    divide('No duplicated res file found')


def status():
    divide('doc')

    run(f'git -C {root} status')

    for res in sorted(root.glob('res-*')):
        divide(res.name)
        run(f'git -C {res} status')


def build():

    run(f'npm --prefix={web_front_path} run build')
    run(f'npm --prefix={web_md_renderer_path} run clean')
    run(f'npm --prefix={web_md_renderer_path} run once')
    run(f'npm --prefix={web_pack_path} run build')


def render():
    run(f'npm --prefix={web_md_renderer_path} run clean')
    run(f'npm --prefix={web_md_renderer_path} run once')


def serve():
    serve_script_path = root.joinpath('web', 'back', 'build', 'index.js')

    if "remote" in args:
        run(f'node {serve_script_path} remote')
    else:
        t1 = Thread(target=run, args=[f'node {serve_script_path}'])
        t2 = Thread(target=run, args=[
                    f'npm --prefix={web_md_renderer_path} run watch'])
        t1.start()
        t2.start()
        t1.join()
        t2.join()


if cmd == 'push':
    push()

elif cmd == 'pull':
    pull()

elif cmd == 'check':
    check()

elif cmd == 'status':
    status()

elif cmd == 'build':
    build()

elif cmd == 'render':
    render()

elif cmd == 'serve':
    serve()

elif cmd == 'sync':
    sync_trivial()


else:
    error('Invalid command')
