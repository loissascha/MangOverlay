package main

import "mangohud-configurator/config"

func (c *App) ToggleGraphGpuLoad() {
	config.CG.ToggleGraphGpuLoad()
}
func (c *App) ToggleGraphCpuLoad() {
	config.CG.ToggleGraphCpuLoad()
}
func (c *App) ToggleGraphGpuCoreClock() {
	config.CG.ToggleGraphGpuCoreClock()
}
func (c *App) ToggleGraphGpuMemClock() {
	config.CG.ToggleGraphGpuMemClock()
}
func (c *App) ToggleGraphVram() {
	config.CG.ToggleGraphVram()
}
func (c *App) ToggleGraphRam() {
	config.CG.ToggleGraphRam()
}
func (c *App) ToggleGraphCpuTemp() {
	config.CG.ToggleGraphCpuTemp()
}
func (c *App) ToggleGraphGpuTemp() {
	config.CG.ToggleGraphGpuTemp()
}

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
