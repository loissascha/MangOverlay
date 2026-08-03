package appservice

import "mangoverlay/internal/config"

func (a *AppService) GetKbToggleHud() string {
	return config.CG.KbToggleHud
}
func (a *AppService) SetKbToggleHud(n string) {
	config.CG.SetKbToggleHud(n)
}
func (a *AppService) GetKbToggleHudPosition() string {
	return config.CG.KbToggleHudPosition
}
func (a *AppService) SetKbToggleHudPosition(n string) {
	config.CG.SetKbToggleHudPosition(n)
}
func (a *AppService) GetKbTogglePreset() string {
	return config.CG.KbTogglePreset
}
func (a *AppService) SetKbTogglePreset(n string) {
	config.CG.SetKbTogglePreset(n)
}
func (a *AppService) GetKbToggleFpsLimit() string {
	return config.CG.KbToggleFpsLimit
}
func (a *AppService) SetKbToggleFpsLimit(n string) {
	config.CG.SetKbToggleFpsLimit(n)
}
func (a *AppService) GetKbToggleLogging() string {
	return config.CG.KbToggleLogging
}
func (a *AppService) SetKbToggleLogging(n string) {
	config.CG.SetKbToggleLogging(n)
}
func (a *AppService) GetKbReloadCfg() string {
	return config.CG.KbReloadCfg
}
func (a *AppService) SetKbReloadCfg(n string) {
	config.CG.SetKbReloadCfg(n)
}
func (a *AppService) GetKbUploadLog() string {
	return config.CG.KbUploadLog
}
func (a *AppService) SetKbUploadLog(n string) {
	config.CG.SetKbUploadLog(n)
}
