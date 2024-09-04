package config

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
}
