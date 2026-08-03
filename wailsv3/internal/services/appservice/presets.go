package appservice

import (
	_ "embed"
	"mangoverlay/internal/config"
)

//go:embed presets/PresetFpsOnly.conf
var presetFpsOnly string

//go:embed presets/PresetMinimal.conf
var presetMinimal string

//go:embed presets/PresetDefault.conf
var presetDefault string

//go:embed presets/PresetMine.conf
var presetMine string

//go:embed presets/PresetRiva.conf
var presetRiva string

//go:embed presets/PresetFull.conf
var presetFull string

func (a *AppService) ApplyPresetFpsOnly() {
	config.WritePreset(presetFpsOnly)
	a.ReloadConfig()
}
func (a *AppService) ApplyPresetMinimal() {
	config.WritePreset(presetMinimal)
	a.ReloadConfig()
}
func (a *AppService) ApplyPresetDefault() {
	config.WritePreset(presetDefault)
	a.ReloadConfig()
}
func (a *AppService) ApplyPresetExtended() {
	config.WritePreset(presetMine)
	a.ReloadConfig()
}
func (a *AppService) ApplyPresetRiva() {
	config.WritePreset(presetRiva)
	a.ReloadConfig()
}
func (a *AppService) ApplyPresetFull() {
	config.WritePreset(presetFull)
	a.ReloadConfig()
}
