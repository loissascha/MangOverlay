package main

import "mangohud-configurator/config"

func (a *App) ReloadConfig() {
	config.ReloadConfig()
}

func (a *App) ResetConfig() {
}

func (a *App) ShareConfig() []string {
	return config.ShareConfig()
}
