package config

import (
	"bufio"
	"os"
	"os/exec"
	"strings"
)

func initGlobalEnabled() {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		panic("can't load user home dir")
	}
	profileFile := homeDir + "/.profile"
	file, err := os.Open(profileFile)
	if err != nil {
		return
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		if strings.Contains(line, "export MANGOHUD=1") {
			GlobalEnabled = true
			return
		}
	}
	GlobalEnabled = false
}

func DisableGlobally() {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		panic("can't load user home dir")
	}
	profileFile := homeDir + "/.profile"
	file, err := os.Open(profileFile)
	if err != nil {
		return
	}
	defer file.Close()

	newFile := ""
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		if strings.Contains(line, "export MANGOHUD=1") {
			continue
		}
		newFile += line + "\n"
	}
	os.WriteFile(profileFile, []byte(newFile), 0766)

	// source file
	cmd := exec.Command("bash", "-c", "source ~/.profile")
	cmd.Run()
	GlobalEnabled = false
}

// TODO: this does not work; instead it should enable it in /etc/environment
func EnableGlobally() {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		panic("can't load user home dir")
	}
	profileFile := homeDir + "/.profile"
	file, err := os.Open(profileFile)
	if err != nil {
		Logger.Log("profile file not found! creating it!")
		os.WriteFile(profileFile, []byte{}, 0766)
		file, err = os.Open(profileFile)
		if err != nil {
			panic("profile file broken")
		}
	}
	defer file.Close()

	newFile := ""
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		if line == "export MANGOHUD=1" {
			return
		}
		newFile += line + "\n"
	}
	newFile += "export MANGOHUD=1\n"
	os.WriteFile(profileFile, []byte(newFile), 0766)

	// source file
	cmd := exec.Command("bash", "-c", "source ~/.profile")
	cmd.Run()
	GlobalEnabled = true
}
