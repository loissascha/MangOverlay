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

func (a *App) ResetConfig() {
	config.ResetConfig()
}

func (a *App) GetBackgroundColor() string {
	return config.ConfigGlobal.Background
}

func (a *App) SetBackgroundColor(n string) {
	config.ConfigGlobal.SetBackgroundColor(n)
}

func (a *App) GetBackgroundAlpha() string {
	return config.ConfigGlobal.BackgroundAlpha
}

func (a *App) SetBackgroundAlpha(n string) {
	config.ConfigGlobal.SetBackgroundAlpha(n)
}

func (a *App) GetFontSize() string {
	return config.ConfigGlobal.FontSize
}

func (a *App) SetFontSize(n string) {
	config.ConfigGlobal.SetFontSize(n)
}
