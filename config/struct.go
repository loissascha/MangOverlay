package config

type Config struct {
	Orientation     string
	RoundCorners    bool
	Background      string
	BackgroundAlpha string
	FontSize        string
	TextColor       string
	GpuColor        string
	CpuColor        string
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
