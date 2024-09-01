package main

import "mangohud-configurator/config"

func (a *App) GetOrientation() string {
	return config.ConfigGlobal.Orientation
}

func (a *App) SetOrientation(n string) {
	config.ConfigGlobal.SetOrientation(n)
}

func (a *App) GetRoundCorners() bool {
	return config.ConfigGlobal.RoundCorners
}

func (a *App) SetRoundedCorners(n bool) {
	config.ConfigGlobal.SetRoundedCorners(n)
}
