package config

func (c *Config) ReplaceElements(first string, second string) {
	replaceConfigLines(first, second)
	firstIndex := getElementIndex(first)
	secondIndex := getElementIndex(second)

	for i, v := range GPUElementsAvailable {
		if v.Name == first {
			GPUElementsAvailable[i].Index = secondIndex
		} else if v.Name == second {
			GPUElementsAvailable[i].Index = firstIndex
		}
	}
	for i, v := range CPUElementsAvailable {
		if v.Name == first {
			CPUElementsAvailable[i].Index = secondIndex
		} else if v.Name == second {
			CPUElementsAvailable[i].Index = firstIndex
		}
	}
	for i, v := range MemoryElementsAvailable {
		if v.Name == first {
			MemoryElementsAvailable[i].Index = secondIndex
		} else if v.Name == second {
			MemoryElementsAvailable[i].Index = firstIndex
		}
	}
	for i, v := range ExtraElementsAvailable {
		if v.Name == first {
			ExtraElementsAvailable[i].Index = secondIndex
		} else if v.Name == second {
			ExtraElementsAvailable[i].Index = firstIndex
		}
	}
}

func getElementIndex(name string) int {
	for i, v := range GPUElementsAvailable {
		if v.Name == name {
			return GPUElementsAvailable[i].Index
		}
	}
	for i, v := range CPUElementsAvailable {
		if v.Name == name {
			return CPUElementsAvailable[i].Index
		}
	}
	for i, v := range MemoryElementsAvailable {
		if v.Name == name {
			return MemoryElementsAvailable[i].Index
		}
	}
	for i, v := range ExtraElementsAvailable {
		if v.Name == name {
			return ExtraElementsAvailable[i].Index
		}
	}
	return 0
}

func (c *Config) ActiveElement(e string) int {
	cf := getConfigFile()
	newIndex := len(cf) + 1
	for i, v := range GPUElementsAvailable {
		if v.Name != e {
			continue
		}
		GPUElementsAvailable[i].Active = true
		GPUElementsAvailable[i].Index = newIndex
		addConfigLine(e)
		return newIndex
	}
	for i, v := range CPUElementsAvailable {
		if v.Name != e {
			continue
		}
		CPUElementsAvailable[i].Active = true
		CPUElementsAvailable[i].Index = newIndex
		addConfigLine(e)
		return newIndex
	}
	for i, v := range MemoryElementsAvailable {
		if v.Name != e {
			continue
		}
		MemoryElementsAvailable[i].Active = true
		MemoryElementsAvailable[i].Index = newIndex
		addConfigLine(e)
		return newIndex
	}
	for i, v := range ExtraElementsAvailable {
		if v.Name != e {
			continue
		}
		ExtraElementsAvailable[i].Active = true
		ExtraElementsAvailable[i].Index = newIndex
		addConfigLine(e)
		return newIndex
	}
	return -1
}

func (c *Config) DeactivateElement(e string) {
	for i, v := range GPUElementsAvailable {
		if v.Name != e {
			continue
		}
		GPUElementsAvailable[i].Active = false
		deleteConfigLine(e)
		return
	}
	for i, v := range CPUElementsAvailable {
		if v.Name != e {
			continue
		}
		CPUElementsAvailable[i].Active = false
		deleteConfigLine(e)
		return
	}
	for i, v := range MemoryElementsAvailable {
		if v.Name != e {
			continue
		}
		MemoryElementsAvailable[i].Active = false
		deleteConfigLine(e)
		return
	}
	for i, v := range ExtraElementsAvailable {
		if v.Name != e {
			continue
		}
		ExtraElementsAvailable[i].Active = false
		deleteConfigLine(e)
		return
	}
}
