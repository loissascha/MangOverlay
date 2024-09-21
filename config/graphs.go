package config

import "strings"

func initGraphs(r string) {
	split := strings.Split(r, ",")
	for _, v := range split {
		switch v {
		case "gpu_load":
			CG.GraphGpuLoad = true
			break
		case "cpu_load":
			CG.GraphCpuLoad = true
			break
		case "gpu_core_clock":
			CG.GraphGpuCoreClock = true
			break
		case "gpu_mem_clock":
			CG.GraphGpuMemClock = true
			break
		case "vram":
			CG.GraphVram = true
			break
		case "ram":
			CG.GraphRam = true
			break
		case "cpu_temp":
			CG.GraphCpuTemp = true
			break
		case "gpu_temp":
			CG.GraphGpuTemp = true
			break
		}
	}
}

func toggleCmd(cmdname string) bool {
	currentLine := getConfigLine("graphs")
	split := strings.Split(currentLine, ",")
	contains := false
	newGraphLine := ""
	for _, v := range split {
		if v == cmdname {
			contains = true
			continue
		}
		if newGraphLine != "" {
			newGraphLine += ","
		}
		newGraphLine += v
	}
	if contains { // deactivate
		if newGraphLine == "" {
			deleteConfigLine("graphs")
		} else {
			updateConfigLine("graphs", newGraphLine, false)
		}
		return false
	}

	// activate
	if newGraphLine != "" {
		newGraphLine += ","
	}
	newGraphLine += cmdname
	addConfigLine(newGraphLine)
	return true
}

func (c *Config) ToggleGraphGpuLoad() {
	CG.GraphGpuLoad = toggleCmd("gpu_load")
}
func (c *Config) ToggleGraphCpuLoad() {
	CG.GraphCpuLoad = toggleCmd("cpu_load")
}
func (c *Config) ToggleGraphGpuCoreClock() {
	CG.GraphGpuCoreClock = toggleCmd("gpu_core_clock")
}
func (c *Config) ToggleGraphGpuMemClock() {
	CG.GraphGpuMemClock = toggleCmd("gpu_mem_clock")
}
func (c *Config) ToggleGraphVram() {
	CG.GraphVram = toggleCmd("vram")
}
func (c *Config) ToggleGraphRam() {
	CG.GraphRam = toggleCmd("ram")
}
func (c *Config) ToggleGraphCpuTemp() {
	CG.GraphCpuTemp = toggleCmd("cpu_temp")
}
func (c *Config) ToggleGraphGpuTemp() {
	CG.GraphGpuTemp = toggleCmd("gpu_temp")
}

func (c *Config) GetGraphGpuLoad() bool {
	return c.GraphGpuLoad
}
func (c *Config) GetGraphCpuLoad() bool {
	return c.GraphCpuLoad
}
func (c *Config) GetGraphGpuCoreClock() bool {
	return c.GraphGpuCoreClock
}
func (c *Config) GetGraphGpuMemClock() bool {
	return c.GraphGpuMemClock
}
func (c *Config) GetGraphVram() bool {
	return c.GraphVram
}
func (c *Config) GetGraphRam() bool {
	return c.GraphRam
}
func (c *Config) GetGraphCpuTemp() bool {
	return c.GraphCpuTemp
}
func (c *Config) GetGraphGpuTemp() bool {
	return c.GraphGpuTemp
}
