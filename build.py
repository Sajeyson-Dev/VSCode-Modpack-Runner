import shutil

def build(name, version, folders, files):
    build_dir = '.build/'
    for folder in folders:
        shutil.copytree(folder, build_dir + folder)

    for file in files:
        shutil.copyfile(file, build_dir + folders[0] + '/' + file)
    
    shutil.make_archive(name + '-' + version, 'zip', build_dir)
    shutil.rmtree(build_dir)


build('VSCode-Modpack-Runner', '1.0.3', ['run', '.vscode'], ['LICENSE', 'README.md'])
