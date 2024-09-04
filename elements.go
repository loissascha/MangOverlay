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
