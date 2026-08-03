package appservice

import "mangoverlay/internal/config"

func (a *AppService) GetCpuElements() []config.Element {
	return config.CPUElementsAvailable
}
func (a *AppService) GetGpuElements() []config.Element {
	return config.GPUElementsAvailable
}
func (a *AppService) GetMemoryElements() []config.Element {
	return config.MemoryElementsAvailable
}
func (a *AppService) GetExtraElements() []config.Element {
	return config.ExtraElementsAvailable
}

func (a *AppService) GetElements() []config.Element {
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

func (a *AppService) GetOrderElements() []config.Element {
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

func (a *AppService) GetUnorderedElements() []config.Element {
	elements := []config.Element{}
	for _, v := range config.UnorderedActiveElements {
		elements = append(elements, v)
	}
	return elements
}

func (a *AppService) AddUnorderedElement(name string) {
	config.CG.AddUnorderedElement(name)
}

func (a *AppService) RemoveUnorderedElement(index int) {
	config.CG.RemoveUnorderedElement(index)
}

func (a *AppService) ActivateElement(n string) int {
	return config.CG.ActivateElement(n)
}

func (a *AppService) DeactivateElement(n string) {
	config.CG.DeactivateElement(n)
}

func (a *AppService) ReplaceElements(first string, second string) {
	config.CG.ReplaceElements(first, second)
}

func (a *AppService) OrderElementUnderneathElement(toOrder string, underneath string) {
	config.CG.OrderElementUnderneathElement(toOrder, underneath)
}
