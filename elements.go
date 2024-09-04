package main

import "mangohud-configurator/config"

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
	return elements
}

func (a *App) ActivateElement(n string) int {
	return config.CG.ActiveElement(n)
}

func (a *App) DeactivateElement(n string) {
	config.CG.DeactivateElement(n)
}
