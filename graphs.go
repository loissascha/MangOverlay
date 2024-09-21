package main

import "mangohud-configurator/config"

func (c *App) GetGraphGpuLoad() bool {
	return config.CG.GetGraphGpuLoad()
}
func (c *App) GetGraphCpuLoad() bool {
	return config.CG.GetGraphCpuLoad()
}
func (c *App) GetGraphGpuCoreClock() bool {
	return config.CG.GetGraphGpuCoreClock()
}
func (c *App) GetGraphGpuMemClock() bool {
	return config.CG.GetGraphGpuMemClock()
}
func (c *App) GetGraphVram() bool {
	return config.CG.GetGraphVram()
}
func (c *App) GetGraphRam() bool {
	return config.CG.GetGraphRam()
}
func (c *App) GetGraphCpuTemp() bool {
	return config.CG.GetGraphCpuTemp()
}
func (c *App) GetGraphGpuTemp() bool {
	return config.CG.GetGraphGpuTemp()
}
