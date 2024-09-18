package config

import "os"

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
