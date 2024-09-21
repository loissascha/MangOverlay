package config

import (
	"fmt"
	"os"
	"os/exec"
	"strings"
)

func initGlobalEnabled() {
	filePath := "/etc/environment"
	content, err := os.ReadFile(filePath)
	if err != nil {
		Logger.Log(fmt.Sprintf("InitGlobalEnabled error %s", err))
	}
	file := strings.Split(string(content), "\n")
	for _, line := range file {
		command := line
		if strings.Contains(line, "#") {
			command, _, _ = strings.Cut(line, "#")
		}
		if strings.Contains(command, "MANGOHUD=1") {
			GlobalEnabled = true
			return
		}
	}
	GlobalEnabled = false
}

func DisableGlobally() {
	if !GlobalEnabled {
		return
	}
	filePath := "/etc/environment"
	content, err := os.ReadFile(filePath)
	if err != nil {
		Logger.Log(fmt.Sprintf("DisableGlobally error %s", err))
	}
	file := strings.Split(string(content), "\n")
	newContent := ""
	for _, line := range file {
		command := line
		if strings.Contains(line, "#") {
			command, _, _ = strings.Cut(line, "#")
		}
		if strings.Contains(command, "MANGOHUD=1") {
			continue
		}
		newContent += line + "\n"
	}
	newContent = strings.TrimSuffix(newContent, "\n")
	homeDir, err := os.UserHomeDir()
	if err != nil {
		Logger.Log("DisableGlobally cant get homeDir")
		return
	}
	err = os.WriteFile(homeDir+"/tmpfileenvironment0001", []byte(newContent), 0766)
	if err != nil {
		Logger.Log("DisableGlobally cant write tmp environment file")
		return
	}
	cmd := exec.Command("pkexec", "bash", "-c", "mv /etc/environment /etc/environment.bak && mv "+homeDir+"/tmpfileenvironment0001 /etc/environment")
	err = cmd.Run()
	if err != nil {
		Logger.Log("DisableGlobally error moving files")
		return
	}
	GlobalEnabled = false
}

func EnableGlobally() {
	if GlobalEnabled {
		return
	}
	cmd := exec.Command("pkexec", "bash", "-c", "echo \"MANGOHUD=1\" >> /etc/environment")
	err := cmd.Run()
	if err != nil {
		fmt.Println(err)
		return
	}
	GlobalEnabled = true
}
