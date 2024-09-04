package config

type Element struct {
	Name   string
	Active bool
	Index  int
}

var Elements []Element
var GPUElementsAvailable []Element
var CPUElementsAvailable []Element
var MemoryElementsAvailable []Element

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
}

var CG Config
