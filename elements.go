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

func (a *App) GetOrderElements() []config.Element {
	elements := []config.Element{}
	for _, v := range config.CPUElementsAvailable {
		if !v.Active {
			continue
		}
		elements = append(elements, v)
	}
	for _, v := range config.GPUElementsAvailable {
		if !v.Active {
			continue
		}
		elements = append(elements, v)
	}
	for _, v := range config.MemoryElementsAvailable {
		if !v.Active {
			continue
		}
		elements = append(elements, v)
	}
	for _, v := range config.ExtraElementsAvailable {
		if !v.Active {
			continue
		}
		elements = append(elements, v)
	}
	for _, v := range config.UnorderedActiveElements {
		if !v.Active {
			continue
		}
		elements = append(elements, v)
	}
	return elements
}

func (a *App) GetUnorderedElements() []config.Element {
	elements := []config.Element{}
	for _, v := range config.UnorderedActiveElements {
		elements = append(elements, v)
	}
	return elements
}

func (a *App) AddUnorderedElement(name string) {
	config.CG.AddUnorderedElement(name)
}

func (a *App) RemoveUnorderedElement(index int) {
	config.CG.RemoveUnorderedElement(index)
}

func (a *App) ActivateElement(n string) int {
	return config.CG.ActivateElement(n)
}

func (a *App) DeactivateElement(n string) {
	config.CG.DeactivateElement(n)
}

func (a *App) ReplaceElements(first string, second string) {
	config.CG.ReplaceElements(first, second)
}
