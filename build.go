package main

import (
	"archive/zip"
	"fmt"
	"io"
	"os"
)

var (
	name      string = "VSCode-Modpack-Runner"
	version   string = "1.0.2"
	files            = []string{".vscode/launch.json", ".vscode/settings.json", "run/config.json", "run/setup_instance.js", "run/start_instance.js", "run/clear_instance.js"}
	infoFiles        = []string{"LICENSE", "README" + ".md"}
)

func main() {
	build(name, version, files, infoFiles)
}

func build(filename string, version string, input []string, infoFiles []string) {
	fmt.Println("Build started...")
	zipFile, _ := os.Create(filename + "-" + version + ".zip")
	defer zipFile.Close()

	zipBuilder := zip.NewWriter(zipFile)

	for _, files := range input {
		file, _ := os.Open(files)
		write, _ := zipBuilder.Create(files)
		io.Copy(write, file)
	}

	for _, infoFile := range infoFiles {
		info, _ := os.Open(infoFile)
		writeInfo, _ := zipBuilder.Create("run/" + infoFile)
		io.Copy(writeInfo, info)
	}

	zipBuilder.Close()
	fmt.Println("Built as: " + filename + "-" + version)
}
