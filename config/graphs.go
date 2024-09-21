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
