package config

import (
	"os"
)

func WritePreset(preset string) {
	configFilePath := getConfigFilePath()
	err := os.WriteFile(configFilePath, []byte(preset), 0666)
	if err != nil {
		panic("Can't write preset file! ")
	}
}
