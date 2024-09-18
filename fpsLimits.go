package main

import "mangohud-configurator/config"

func (a *App) GetFPSLimits() []config.FPSLimit {
	return config.CG.GetFPSLimits()
}
