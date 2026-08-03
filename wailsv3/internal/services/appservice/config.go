package appservice

import "mangoverlay/internal/config"

func (a *AppService) ReloadConfig() {
	config.ReloadConfig()
}

func (a *AppService) ResetConfig() {
}

func (a *AppService) ShareConfig() []string {
	return config.ShareConfig()
}

func (a *AppService) ImportConfig(s string) {
	config.ImportConfig(s)
}
