package config

type Config struct {
	Orientation     string
	RoundCorners    bool
	Background      string
	BackgroundAlpha float64
	FontSize        int
	TextColor       string
}

var ConfigGlobal Config
