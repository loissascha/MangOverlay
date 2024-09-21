package config

import (
	"fmt"
	"math/rand"
	"os"
	"os/exec"
	"strconv"
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
	tmpfilename := getFreeFileName(homeDir)
	err = os.WriteFile(homeDir+"/"+tmpfilename, []byte(newContent), 0766)
	if err != nil {
		Logger.Log("DisableGlobally cant write tmp environment file")
		return
	}
	cmd := exec.Command("pkexec", "bash", "-c", "mv /etc/environment /etc/environment.bak && mv "+homeDir+"/"+tmpfilename+" /etc/environment")
	err = cmd.Run()
	if err != nil {
		Logger.Log("DisableGlobally error moving files")
		err = os.Remove(homeDir + "/" + tmpfilename)
		if err != nil {
			Logger.Log("DisableGlobally error removing tmp file")
		}
		return
	}
	GlobalEnabled = false
}

func getFreeFileName(startPath string) string {
	fileStartPath := strings.TrimSuffix(startPath, "/") + "/"
	fileName := ""
	fileE := true
	for fileE {
		rnd := rand.Intn(10)
		fileName += strconv.Itoa(rnd)
		if !fileExists(fileStartPath + fileName) {
			fileE = false
		}
	}
	return fileName
}

func fileExists(filename string) bool {
	_, err := os.Stat(filename)
	if os.IsNotExist(err) {
		return false
	}
	return err == nil
}

func EnableGlobally() {
	if GlobalEnabled {
		return
	}
	cmd := exec.Command("pkexec", "bash", "-c", "echo \"MANGOHUD=1\" >> /etc/environment")
	err := cmd.Run()
	if err != nil {
		Logger.Log(fmt.Sprintf("EnableGlobally error: %s", err))
		return
	}
	GlobalEnabled = true
}
