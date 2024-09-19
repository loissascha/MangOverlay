package config

type Element struct {
	Name   string
	Active bool
	Index  int
}

type Config struct {
	Orientation         string
	Position            string
	RoundCorners        bool
	Background          string
	BackgroundAlpha     string
	FontSize            string
	TextColor           string
	GpuText             string
	GpuLoadValue        string
	GpuColor            string
	GpuLoadColor0       string
	GpuLoadColor1       string
	GpuLoadColor2       string
	CpuColor            string
	CpuText             string
	CpuLoadValue        string
	CpuLoadColor0       string
	CpuLoadColor1       string
	CpuLoadColor2       string
	VramColor           string
	RamColor            string
	EngineColor         string
	IoColor             string
	FrametimeColor      string
	MediaColor          string
	WineColor           string
	BatteryColor        string
	NetworkColor        string
	KbToggleHud         string
	KbToggleHudPosition string
	KbTogglePreset      string
	KbToggleFpsLimit    string
	KbToggleLogging     string
	KbReloadCfg         string
	KbUploadLog         string
	FpsLoadValue        string
	FpsLoadColor0       string
	FpsLoadColor1       string
	FpsLoadColor2       string
}

var CG Config
var GlobalEnabled bool = false

func setDefaults() {
	CG.Orientation = "vertical"
	CG.Position = "top-left"
	CG.RoundCorners = false
	CG.Background = "000000"
	CG.BackgroundAlpha = "0.8"
	CG.FontSize = "24"
	CG.TextColor = "FFFFFF"
	CG.GpuColor = "2E9762"
	CG.GpuText = ""
	CG.GpuLoadValue = "60,90"
	CG.CpuText = ""
	CG.CpuLoadValue = "60,90"
	CG.GpuLoadColor0 = "39F900"
	CG.GpuLoadColor1 = "FDFD09"
	CG.GpuLoadColor2 = "B22222"
	CG.FpsLoadValue = "60,90"
	CG.FpsLoadColor0 = "39F900"
	CG.FpsLoadColor1 = "FDFD09"
	CG.FpsLoadColor2 = "B22222"
	CG.CpuColor = "2E97CB"
	CG.CpuLoadColor0 = "39F900"
	CG.CpuLoadColor1 = "FDFD09"
	CG.CpuLoadColor2 = "B22222"
	CG.VramColor = "AD64C1"
	CG.RamColor = "C26693"
	CG.EngineColor = "EB5B5B"
	CG.IoColor = "A491D3"
	CG.FrametimeColor = "00FF00"
	CG.MediaColor = "FFFFFF"
	CG.WineColor = "EB4B4B"
	CG.BatteryColor = "FF9078"
	CG.NetworkColor = "E07B85"
	CG.KbToggleHud = "Shift_R+F12"
	CG.KbToggleHudPosition = "Shift_R+F11"
	CG.KbTogglePreset = "Shift_R+F10"
	CG.KbToggleFpsLimit = "Shift_L+F1"
	CG.KbToggleLogging = "Shift_L+F2"
	CG.KbReloadCfg = "Shift_L+F4"
	CG.KbUploadLog = "Shift_L+F3"
}
