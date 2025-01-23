package main

import "mangohud-configurator/config"

func (a *App) GetOrientation() string {
	return config.CG.Orientation
}

func (a *App) SetOrientation(n string) {
	config.CG.SetOrientation(n)
}

func (a *App) GetTableColumns() string {
	return config.CG.TableColumns
}

func (a *App) SetTableColumns(n string) {
	config.CG.SetTableColumns(n)
}

func (a *App) GetOffsetX() string {
	return config.CG.OffsetX
}

func (a *App) GetOffsetY() string {
	return config.CG.OffsetY
}

func (a *App) SetOffsetX(n string) {
	config.CG.SetOffsetX(n)
}

func (a *App) SetOffsetY(n string) {
	config.CG.SetOffsetY(n)
}

func (a *App) GetPosition() string {
	return config.CG.Position
}
func (a *App) SetPosition(n string) {
	config.CG.SetPosition(n)
}

func (a *App) GetRoundCorners() bool {
	return config.CG.RoundCorners
}

func (a *App) SetRoundedCorners(n bool) {
	config.CG.SetRoundedCorners(n)
}

func (a *App) GetFontSize() string {
	return config.CG.FontSize
}

func (a *App) SetFontSize(n string) {
	config.CG.SetFontSize(n)
}

func (a *App) GetGpuText() string {
	return config.CG.GpuText
}
func (a *App) SetGpuText(n string) {
	config.CG.SetGpuText(n)
}
func (a *App) GetGpuLoadValue() string {
	return config.CG.GpuLoadValue
}
func (a *App) SetGpuLoadValue(n string) {
	config.CG.SetGpuLoadChange(n)
}

func (a *App) GetFpsLoadValue() string {
	return config.CG.FpsLoadValue
}
func (a *App) SetFpsLoadValue(n string) {
	config.CG.SetFpsLoadChange(n)
}

func (a *App) GetCpuText() string {
	return config.CG.CpuText
}
func (a *App) SetCpuText(n string) {
	config.CG.SetCpuText(n)
}
func (a *App) GetCpuLoadValue() string {
	return config.CG.CpuLoadValue
}
func (a *App) SetCpuLoadValue(n string) {
	config.CG.SetCpuLoadChange(n)
}
