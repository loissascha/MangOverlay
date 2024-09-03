package config

type Config struct {
	Orientation         string
	Position            string
	RoundCorners        bool
	Background          string
	BackgroundAlpha     string
	FontSize            string
	TextColor           string
	GpuColor            string
	GpuLoadColor0       string
	GpuLoadColor1       string
	GpuLoadColor2       string
	CpuColor            string
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

// # toggle_hud=Shift_R+F12
// # toggle_hud_position=Shift_R+F11
// # toggle_preset=Shift_R+F10
// # toggle_fps_limit=Shift_L+F1
// # toggle_logging=Shift_L+F2
// # reload_cfg=Shift_L+F4
// # upload_log=Shift_L+F3

var CG Config
