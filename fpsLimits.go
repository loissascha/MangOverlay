package main

import "mangohud-configurator/config"

func (a *App) GetFPSLimits() []string {
	return config.CG.GetFPSLimits()
}

func (a *App) AddFPSLimit(amount string) {
	config.CG.AddFPSLimit(amount)
}

func (a *App) RemoveFPSLimit(index int) {
	config.CG.RemoveFPSLimit(index)
}

func (a *App) ReorderFPSLimit(firstIndex int, secondIndex int) {
	config.CG.ReorderFPSLimit(firstIndex, secondIndex)
}
