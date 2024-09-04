package main

import "mangohud-configurator/config"

func (a *App) GetCpuElements() []config.Element {
	return config.CPUElementsAvailable
}
func (a *App) GetGpuElements() []config.Element {
	return config.GPUElementsAvailable
}
func (a *App) GetMemoryElements() []config.Element {
	return config.MemoryElementsAvailable
}
func (a *App) GetExtraElements() []config.Element {
	return config.ExtraElementsAvailable
}

func (a *App) GetElements() []config.Element {
	elements := []config.Element{}
	for _, v := range config.CPUElementsAvailable {
		elements = append(elements, v)
	}
	for _, v := range config.GPUElementsAvailable {
		elements = append(elements, v)
	}
	for _, v := range config.MemoryElementsAvailable {
		elements = append(elements, v)
	}
	for _, v := range config.ExtraElementsAvailable {
		elements = append(elements, v)
	}
	return elements
}

func (a *App) ActivateElement(n string) int {
	return config.CG.ActiveElement(n)
}

func (a *App) DeactivateElement(n string) {
	config.CG.DeactivateElement(n)
}
