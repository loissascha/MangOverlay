package main

import "mangohud-configurator/config"

func (a *App) GetKbToggleHud() string {
	return config.CG.KbToggleHud
}
func (a *App) SetKbToggleHud(n string) {
	config.CG.SetKbToggleHud(n)
}
func (a *App) GetKbToggleHudPosition() string {
	return config.CG.KbToggleHudPosition
}
func (a *App) SetKbToggleHudPosition(n string) {
	config.CG.SetKbToggleHudPosition(n)
}
func (a *App) GetKbTogglePreset() string {
	return config.CG.KbTogglePreset
}
func (a *App) SetKbTogglePreset(n string) {
	config.CG.SetKbTogglePreset(n)
}
func (a *App) GetKbToggleFpsLimit() string {
	return config.CG.KbToggleFpsLimit
}
func (a *App) SetKbToggleFpsLimit(n string) {
	config.CG.SetKbToggleFpsLimit(n)
}
func (a *App) GetKbToggleLogging() string {
	return config.CG.KbToggleLogging
}
func (a *App) SetKbToggleLogging(n string) {
	config.CG.SetKbToggleLogging(n)
}
func (a *App) GetKbReloadCfg() string {
	return config.CG.KbReloadCfg
}
func (a *App) SetKbReloadCfg(n string) {
	config.CG.SetKbReloadCfg(n)
}
func (a *App) GetKbUploadLog() string {
	return config.CG.KbUploadLog
}
func (a *App) SetKbUploadLog(n string) {
	config.CG.SetKbUploadLog(n)
}
