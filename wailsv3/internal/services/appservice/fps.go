package appservice

import "mangoverlay/internal/config"

func (a *AppService) GetFPSLimits() []string {
	return config.CG.GetFPSLimits()
}

func (a *AppService) AddFPSLimit(amount string) {
	config.CG.AddFPSLimit(amount)
}

func (a *AppService) RemoveFPSLimit(index int) {
	config.CG.RemoveFPSLimit(index)
}

func (a *AppService) ReorderFPSLimit(firstIndex int, secondIndex int) {
	config.CG.ReorderFPSLimit(firstIndex, secondIndex)
}

func (a *AppService) UpdateFPSLimit(index int, amount string) {
	config.CG.UpdateFPSLimit(index, amount)
}
