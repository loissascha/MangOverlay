package main

import "mangohud-configurator/config"

func (a *App) GetBackgroundColor() string {
	return config.CG.Background
}

func (a *App) SetBackgroundColor(n string) {
	config.CG.SetBackgroundColor(n)
}

func (a *App) GetBackgroundAlpha() string {
	return config.CG.BackgroundAlpha
}

func (a *App) SetBackgroundAlpha(n string) {
	config.CG.SetBackgroundAlpha(n)
}

func (a *App) GetTextColor() string {
	return config.CG.TextColor
}
func (a *App) SetTextColor(n string) {
	config.CG.SetTextColor(n)
}

func (a *App) GetGpuColor() string {
	return config.CG.GpuColor
}
func (a *App) SetGpuColor(n string) {
	config.CG.SetGpuColor(n)
}

func (a *App) GetCpuColor() string {
	return config.CG.CpuColor
}
func (a *App) SetCpuColor(n string) {
	config.CG.SetCpuColor(n)
}

func (a *App) GetVramColor() string {
	return config.CG.VramColor
}
func (a *App) SetVramColor(n string) {
	config.CG.SetVramColor(n)
}

func (a *App) GetRamColor() string {
	return config.CG.RamColor
}
func (a *App) SetRamColor(n string) {
	config.CG.SetRamColor(n)
}

func (a *App) GetEngineColor() string {
	return config.CG.EngineColor
}
func (a *App) SetEngineColor(n string) {
	config.CG.SetEngineColor(n)
}

func (a *App) GetIoColor() string {
	return config.CG.IoColor
}
func (a *App) SetIoColor(n string) {
	config.CG.SetIoColor(n)
}

func (a *App) GetFrametimeColor() string {
	return config.CG.FrametimeColor
}
func (a *App) SetFrametimeColor(n string) {
	config.CG.SetFrametimeColor(n)
}

func (a *App) GetMediaColor() string {
	return config.CG.MediaColor
}
func (a *App) SetMediaColor(n string) {
	config.CG.SetMediaColor(n)
}

func (a *App) GetWineColor() string {
	return config.CG.WineColor
}
func (a *App) SetWineColor(n string) {
	config.CG.SetWineColor(n)
}

func (a *App) GetBatteryColor() string {
	return config.CG.BatteryColor
}
func (a *App) SetBatteryColor(n string) {
	config.CG.SetBatteryColor(n)
}

func (a *App) GetNetworkColor() string {
	return config.CG.NetworkColor
}
func (a *App) SetNetworkColor(n string) {
	config.CG.SetNetworkColor(n)
}

func (a *App) GetCpuLoadColor0() string {
	return config.CG.CpuLoadColor0
}

func (a *App) GetCpuLoadColor1() string {
	return config.CG.CpuLoadColor1
}

func (a *App) GetCpuLoadColor2() string {
	return config.CG.CpuLoadColor2
}

func (a *App) SetCpuLoadColors(n0 string, n1 string, n2 string) {
	config.CG.SetCpuLoadColor(n0, n1, n2)
}

func (a *App) GetGpuLoadColor0() string {
	return config.CG.GpuLoadColor0
}

func (a *App) GetGpuLoadColor1() string {
	return config.CG.GpuLoadColor1
}

func (a *App) GetGpuLoadColor2() string {
	return config.CG.GpuLoadColor2
}

func (a *App) GetFpsLoadColor0() string {
	return config.CG.FpsLoadColor0
}

func (a *App) GetFpsLoadColor1() string {
	return config.CG.FpsLoadColor1
}

func (a *App) GetFpsLoadColor2() string {
	return config.CG.FpsLoadColor2
}

func (a *App) SetGpuLoadColors(n0 string, n1 string, n2 string) {
	config.CG.SetGpuLoadColor(n0, n1, n2)
}

func (a *App) SetFpsLoadColors(n0 string, n1 string, n2 string) {
	config.CG.SetFpsLoadColor(n0, n1, n2)
}
