package appservice

import "mangoverlay/internal/config"

func (a *AppService) GetOrientation() string {
	return config.CG.Orientation
}

func (a *AppService) SetOrientation(n string) {
	config.CG.SetOrientation(n)
}

func (a *AppService) GetTableColumns() string {
	return config.CG.TableColumns
}

func (a *AppService) SetTableColumns(n string) {
	config.CG.SetTableColumns(n)
}

func (a *AppService) GetUseOffset() bool {
	return config.CG.UseOffset
}

func (a *AppService) SetUseOffset(n bool) {
	config.CG.SetUseOffset(n)
}

func (a *AppService) GetOffsetX() string {
	return config.CG.OffsetX
}

func (a *AppService) GetOffsetY() string {
	return config.CG.OffsetY
}

func (a *AppService) SetOffsetX(n string) {
	config.CG.SetOffsetX(n)
}

func (a *AppService) SetOffsetY(n string) {
	config.CG.SetOffsetY(n)
}

func (a *AppService) GetPosition() string {
	return config.CG.Position
}
func (a *AppService) SetPosition(n string) {
	config.CG.SetPosition(n)
}

func (a *AppService) GetRoundCorners() bool {
	return config.CG.RoundCorners
}

func (a *AppService) SetRoundedCorners(n bool) {
	config.CG.SetRoundedCorners(n)
}

func (a *AppService) GetFontSize() string {
	return config.CG.FontSize
}

func (a *AppService) SetFontSize(n string) {
	config.CG.SetFontSize(n)
}

func (a *AppService) GetGpuText() string {
	return config.CG.GpuText
}
func (a *AppService) SetGpuText(n string) {
	config.CG.SetGpuText(n)
}
func (a *AppService) GetGpuLoadValue() string {
	return config.CG.GpuLoadValue
}
func (a *AppService) SetGpuLoadValue(n string) {
	config.CG.SetGpuLoadChange(n)
}

func (a *AppService) GetFpsLoadValue() string {
	return config.CG.FpsLoadValue
}
func (a *AppService) SetFpsLoadValue(n string) {
	config.CG.SetFpsLoadChange(n)
}

func (a *AppService) GetCpuText() string {
	return config.CG.CpuText
}
func (a *AppService) SetCpuText(n string) {
	config.CG.SetCpuText(n)
}
func (a *AppService) GetCpuLoadValue() string {
	return config.CG.CpuLoadValue
}
func (a *AppService) SetCpuLoadValue(n string) {
	config.CG.SetCpuLoadChange(n)
}
