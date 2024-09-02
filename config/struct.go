package config

type Config struct {
	Orientation     string
	RoundCorners    bool
	Background      string
	BackgroundAlpha string
	FontSize        string
	TextColor       string
}

var ConfigGlobal Config
