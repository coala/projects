import argparse
import git
import os
import subprocess


def make_new_dir(dir_path):
    if os.path.isdir(dir_path):
        print(f'{dir_path} already exists. Making patches ...')
    else:
        os.mkdir(dir_path)
        print(f'{dir_path} successfully created. Making patches ...')


def is_git_repo(path):
    try:
        _ = git.Repo(path).git_dir
        return True
    except git.exc.InvalidGitRepositoryError:
        return False


def patch_collector(dir_path, authors, output):

    if(is_git_repo(dir_path) is False):
        print(f'\n{dir_path} is not a git directory.\n')
        return

    print(f'\n**Inside {dir_path}**\n')
    end_hash = ''
    begin_hash = ''
    patch_count = 1
    range_count = 1

    author_list = ''
    for author in authors:
        author_list += f'--author={author} '

    get_hashes_cmd = (f'git -C {dir_path} log --pretty=format:"%h" '
                      f'{author_list}')
    commit_hashes = subprocess.check_output(get_hashes_cmd, shell=True)
    commit_hashes = commit_hashes.decode(encoding='utf-8')
    commit_hashes = commit_hashes.split('\n')

    for commit_hash in commit_hashes:

        ancestor_hash_cmd = (f'git -C {dir_path} log --pretty=format:"%h" '
                             f'{author_list}{commit_hash}^^..{commit_hash}^ '
                             '--exit-code 1>/dev/null')

        if subprocess.Popen(ancestor_hash_cmd, shell=True).wait():
            if end_hash == '':
                end_hash = commit_hash
            begin_hash = commit_hash
            range_count = range_count + 1

        else:
            subdir_msg = ('\nPlease enter a subdirectory name for this patch'
                          '(leave this empty\nto leave this patch out, use ./ '
                          'for the root directory):')
            print('\n')

            if end_hash == '':
                temp = patch_count-1
                print(f'Adding one patch to {temp} existing:')
                subprocess.Popen(
                    f'git -C {dir_path} log {commit_hash}^..{commit_hash}',
                    shell=True).wait()
                print(subdir_msg)
                subdir = input()

                if subdir != '':
                    newdir = f'{output}/{subdir}'
                    print(f'mkdir -p {newdir}')
                    make_new_dir(newdir)
                    subprocess.Popen(
                        f'git -C {dir_path} format-patch {commit_hash}^..'
                        f'{commit_hash} -o {newdir}', shell=True).wait()
                    patch_count = patch_count + 1

                else:
                    print('Omitting patch...')

            else:
                temp = patch_count-1
                print(f'Adding {range_count} patches to {temp} existing:')
                subprocess.Popen(
                    f'git -C {dir_path} log {begin_hash}^^..{end_hash} '
                    f'--oneline', shell=True).wait()
                print(subdir_msg)
                subdir = input()

                if subdir != '':
                    newdir = f'{output}/{subdir}'
                    print(f'mkdir -p {newdir}')
                    make_new_dir(newdir)
                    subprocess.Popen(
                        f'git -C {dir_path} format-patch {begin_hash}^^..'
                        f'{end_hash} -o {newdir}', shell=True).wait()
                    patch_count = patch_count + range_count

                else:
                    print('Omitting patch series...')

                end_hash = ''
                range_count = 1


def main():
    help_message = '''This is a simple helper script that allows collecting all
        patches from one author in a git repository. It will detect consequent
        ranges of patches and ask for each range for a subdirectory so you can
        distinguish the patch series.'''

    parser = argparse.ArgumentParser(description=help_message)
    parser.add_argument('-a', '--author', action='append', required=True,
                        help="Name of contributor")
    parser.add_argument('-o', '--opdir', required=True,
                        help='Output directory absolute path.')
    parser.add_argument('-i', '--inpdir', action='append', required=True,
                        help="Input directory path")
    args = parser.parse_args()
    authors = args.author
    output = args.opdir
    input_dir_paths = args.inpdir

    for input_path in input_dir_paths:
        patch_collector(input_path, authors, output)


if __name__ == '__main__':
    main()
