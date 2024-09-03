package config

type Config struct {
	Orientation     string
	Position        string
	RoundCorners    bool
	Background      string
	BackgroundAlpha string
	FontSize        string
	TextColor       string
	GpuColor        string
	GpuLoadColor0   string
	GpuLoadColor1   string
	GpuLoadColor2   string
	CpuColor        string
	CpuLoadColor0   string
	CpuLoadColor1   string
	CpuLoadColor2   string
	VramColor       string
	RamColor        string
	EngineColor     string
	IoColor         string
	FrametimeColor  string
	MediaColor      string
	WineColor       string
	BatteryColor    string
	NetworkColor    string
}

var ConfigGlobal Config
