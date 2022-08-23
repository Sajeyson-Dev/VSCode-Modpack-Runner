import os
import zipfile

def build(name, version, folders, files):
    out = zipfile.ZipFile(name + '-' + version + '.zip', 'w')
    print('Building...')
    for folder in folders:
        for dir, subdirs, files_ in os.walk(folder):
            for file_ in files_:
                out.write(os.path.join(dir, file_))
    for file in files:
        out.write(file)
    out.close()
    print('Done!')


build('VSCode-Modpack-Runner', '1.0.3', ['run', '.vscode'], ['LICENSE', 'README.md'])
