package appservice

import "mangoverlay/internal/config"


func (a *AppService) GetBackgroundColor() string {
	return config.CG.Background
}

func (a *AppService) SetBackgroundColor(n string) {
	config.CG.SetBackgroundColor(n)
}

func (a *AppService) GetBackgroundAlpha() string {
	return config.CG.BackgroundAlpha
}

func (a *AppService) SetBackgroundAlpha(n string) {
	config.CG.SetBackgroundAlpha(n)
}

func (a *AppService) GetTextColor() string {
	return config.CG.TextColor
}
func (a *AppService) SetTextColor(n string) {
	config.CG.SetTextColor(n)
}

func (a *AppService) GetTextOutlineColor() string {
	return config.CG.TextOutlineColor
}
func (a *AppService) SetTextOutlineColor(n string) {
	config.CG.SetTextOutlineColor(n)
}

func (a *AppService) GetTextOutlineThickness() string {
	return config.CG.TextOutlineThickness
}
func (a *AppService) SetTextOutlineThickness(n string) {
	config.CG.SetTextOutlineThickness(n)
}

func (a *AppService) GetGpuColor() string {
	return config.CG.GpuColor
}
func (a *AppService) SetGpuColor(n string) {
	config.CG.SetGpuColor(n)
}

func (a *AppService) GetCpuColor() string {
	return config.CG.CpuColor
}
func (a *AppService) SetCpuColor(n string) {
	config.CG.SetCpuColor(n)
}

func (a *AppService) GetVramColor() string {
	return config.CG.VramColor
}
func (a *AppService) SetVramColor(n string) {
	config.CG.SetVramColor(n)
}

func (a *AppService) GetRamColor() string {
	return config.CG.RamColor
}
func (a *AppService) SetRamColor(n string) {
	config.CG.SetRamColor(n)
}

func (a *AppService) GetEngineColor() string {
	return config.CG.EngineColor
}
func (a *AppService) SetEngineColor(n string) {
	config.CG.SetEngineColor(n)
}

func (a *AppService) GetIoColor() string {
	return config.CG.IoColor
}
func (a *AppService) SetIoColor(n string) {
	config.CG.SetIoColor(n)
}

func (a *AppService) GetFrametimeColor() string {
	return config.CG.FrametimeColor
}
func (a *AppService) SetFrametimeColor(n string) {
	config.CG.SetFrametimeColor(n)
}

func (a *AppService) GetMediaColor() string {
	return config.CG.MediaColor
}
func (a *AppService) SetMediaColor(n string) {
	config.CG.SetMediaColor(n)
}

func (a *AppService) GetWineColor() string {
	return config.CG.WineColor
}
func (a *AppService) SetWineColor(n string) {
	config.CG.SetWineColor(n)
}

func (a *AppService) GetBatteryColor() string {
	return config.CG.BatteryColor
}
func (a *AppService) SetBatteryColor(n string) {
	config.CG.SetBatteryColor(n)
}

func (a *AppService) GetNetworkColor() string {
	return config.CG.NetworkColor
}
func (a *AppService) SetNetworkColor(n string) {
	config.CG.SetNetworkColor(n)
}

func (a *AppService) GetCpuLoadColor0() string {
	return config.CG.CpuLoadColor0
}

func (a *AppService) GetCpuLoadColor1() string {
	return config.CG.CpuLoadColor1
}

func (a *AppService) GetCpuLoadColor2() string {
	return config.CG.CpuLoadColor2
}

func (a *AppService) SetCpuLoadColors(n0 string, n1 string, n2 string) {
	config.CG.SetCpuLoadColor(n0, n1, n2)
}

func (a *AppService) GetGpuLoadColor0() string {
	return config.CG.GpuLoadColor0
}

func (a *AppService) GetGpuLoadColor1() string {
	return config.CG.GpuLoadColor1
}

func (a *AppService) GetGpuLoadColor2() string {
	return config.CG.GpuLoadColor2
}

func (a *AppService) GetFpsLoadColor0() string {
	return config.CG.FpsLoadColor0
}

func (a *AppService) GetFpsLoadColor1() string {
	return config.CG.FpsLoadColor1
}

func (a *AppService) GetFpsLoadColor2() string {
	return config.CG.FpsLoadColor2
}

func (a *AppService) SetGpuLoadColors(n0 string, n1 string, n2 string) {
	config.CG.SetGpuLoadColor(n0, n1, n2)
}

func (a *AppService) SetFpsLoadColors(n0 string, n1 string, n2 string) {
	config.CG.SetFpsLoadColor(n0, n1, n2)
}
