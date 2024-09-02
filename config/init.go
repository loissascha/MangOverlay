package config

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func LoadConfig() {
	createConfigIfNotExist()
	createBackupConfig()
	setDefaults()

	conf := getConfigFile()

	for _, v := range conf {

		if strings.Contains(v, "#") {
			before, _, _ := strings.Cut(v, "#")
			v = before
		}

		// all which have a = sign
		if strings.Contains(v, "=") {
			cmd, val, _ := strings.Cut(v, "=")
			switch cmd {
			case "round_corners":
				r := strings.TrimSpace(val)
				fmt.Println("round corners found", r)
				ConfigGlobal.RoundCorners = r == "1"
				break
			}
			continue
		}
		v = strings.TrimSpace(v)

		if v == "horizontal" {
			fmt.Println("horizontal found")
			ConfigGlobal.Orientation = "horizontal"
			continue
		}
		if v == "horizontal_stretch" {
			fmt.Println("horizontal stretch found")
			ConfigGlobal.Orientation = "horizontal_stretch"
			continue
		}

	}
}

func getConfigFilePath() string {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		panic("cant load config! UserHomeDir not found.")
	}
	configFile := homeDir + "/.config/MangoHud/MangoHud.conf"
	return configFile
}

func getConfigBackupFilePath() string {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		panic("cant load config! UserHomeDir not found.")
	}
	configFile := homeDir + "/.config/MangoHud/MangoHud_backup_mnghdc.conf"
	return configFile
}

func getConfigFile() []string {
	configFile := getConfigFilePath()
	file, err := os.Open(configFile)
	if err != nil {
		panic("can't read mangohud config file")
	}
	defer file.Close()

	result := []string{}
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		//line = strings.TrimSpace(line)

		result = append(result, line)
	}
	return result
}

func setDefaults() {
	ConfigGlobal.Orientation = "vertical"
	ConfigGlobal.RoundCorners = false
}

func createConfigIfNotExist() {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		panic("can't load user home dir")
	}
	configDir := homeDir + "/.config/MangoHud"
	dir, err := os.ReadDir(configDir)
	if err != nil {
		// config dir does not exist
		err = os.MkdirAll(configDir, 0766)
		if err != nil {
			panic("cant create mangohud config dir!")
		}
	}

	configExists := false
	for _, v := range dir {
		if v.IsDir() {
			continue
		}
		if v.Name() == "MangoHud.conf" {
			configExists = true
			break
		}
	}

	if !configExists {
		os.WriteFile(configDir+"/MangoHud.conf", []byte("Hello"), 0666)
	}
}

func createBackupConfig() {
	configFilePath := getConfigFilePath()
	backupFilePath := getConfigBackupFilePath()
	content, err := os.ReadFile(configFilePath)
	if err != nil {
		panic("Can't backup config file. Can't read original file")
	}
	err = os.Remove(backupFilePath)
	err = os.WriteFile(backupFilePath, content, 0666)
	if err != nil {
		panic("Can't backup config file. Can't write backup file")
	}
}
