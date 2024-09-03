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

func (a *App) GetTextColor() string {
	return config.ConfigGlobal.TextColor
}
func (a *App) SetTextColor(n string) {
	config.ConfigGlobal.SetTextColor(n)
}

func (a *App) GetGpuColor() string {
	return config.ConfigGlobal.GpuColor
}
func (a *App) SetGpuColor(n string) {
	config.ConfigGlobal.SetGpuColor(n)
}

func (a *App) GetCpuColor() string {
	return config.ConfigGlobal.CpuColor
}
func (a *App) SetCpuColor(n string) {
	config.ConfigGlobal.SetCpuColor(n)
}

func (a *App) GetVramColor() string {
	return config.ConfigGlobal.VramColor
}
func (a *App) SetVramColor(n string) {
	config.ConfigGlobal.SetVramColor(n)
}

func (a *App) GetRamColor() string {
	return config.ConfigGlobal.RamColor
}
func (a *App) SetRamColor(n string) {
	config.ConfigGlobal.SetRamColor(n)
}

func (a *App) GetEngineColor() string {
	return config.ConfigGlobal.EngineColor
}
func (a *App) SetEngineColor(n string) {
	config.ConfigGlobal.SetEngineColor(n)
}

func (a *App) GetIoColor() string {
	return config.ConfigGlobal.IoColor
}
func (a *App) SetIoColor(n string) {
	config.ConfigGlobal.SetIoColor(n)
}

func (a *App) GetFrametimeColor() string {
	return config.ConfigGlobal.FrametimeColor
}
func (a *App) SetFrametimeColor(n string) {
	config.ConfigGlobal.SetFrametimeColor(n)
}

func (a *App) GetMediaColor() string {
	return config.ConfigGlobal.MediaColor
}
func (a *App) SetMediaColor(n string) {
	config.ConfigGlobal.SetMediaColor(n)
}

func (a *App) GetWineColor() string {
	return config.ConfigGlobal.WineColor
}
func (a *App) SetWineColor(n string) {
	config.ConfigGlobal.SetWineColor(n)
}

func (a *App) GetBatteryColor() string {
	return config.ConfigGlobal.BatteryColor
}
func (a *App) SetBatteryColor(n string) {
	config.ConfigGlobal.SetBatteryColor(n)
}

func (a *App) GetNetworkColor() string {
	return config.ConfigGlobal.NetworkColor
}
func (a *App) SetNetworkColor(n string) {
	config.ConfigGlobal.SetNetworkColor(n)
}

func (a *App) GetCpuLoadColor0() string {
	return config.ConfigGlobal.CpuLoadColor0
}

func (a *App) GetCpuLoadColor1() string {
	return config.ConfigGlobal.CpuLoadColor1
}

func (a *App) GetCpuLoadColor2() string {
	return config.ConfigGlobal.CpuLoadColor2
}

func (a *App) SetCpuLoadColors(n0 string, n1 string, n2 string) {
	config.ConfigGlobal.SetCpuLoadColor(n0, n1, n2)
}

func (a *App) GetGpuLoadColor0() string {
	return config.ConfigGlobal.GpuLoadColor0
}

func (a *App) GetGpuLoadColor1() string {
	return config.ConfigGlobal.GpuLoadColor1
}

func (a *App) GetGpuLoadColor2() string {
	return config.ConfigGlobal.GpuLoadColor2
}

func (a *App) SetGpuLoadColors(n0 string, n1 string, n2 string) {
	config.ConfigGlobal.SetGpuLoadColor(n0, n1, n2)
}
