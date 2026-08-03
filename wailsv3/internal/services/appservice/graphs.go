package appservice

import "mangoverlay/internal/config"

func (c *AppService) ToggleGraphGpuLoad() {
	config.CG.ToggleGraphGpuLoad()
}
func (c *AppService) ToggleGraphCpuLoad() {
	config.CG.ToggleGraphCpuLoad()
}
func (c *AppService) ToggleGraphGpuCoreClock() {
	config.CG.ToggleGraphGpuCoreClock()
}
func (c *AppService) ToggleGraphGpuMemClock() {
	config.CG.ToggleGraphGpuMemClock()
}
func (c *AppService) ToggleGraphVram() {
	config.CG.ToggleGraphVram()
}
func (c *AppService) ToggleGraphRam() {
	config.CG.ToggleGraphRam()
}
func (c *AppService) ToggleGraphCpuTemp() {
	config.CG.ToggleGraphCpuTemp()
}
func (c *AppService) ToggleGraphGpuTemp() {
	config.CG.ToggleGraphGpuTemp()
}

func (c *AppService) GetGraphGpuLoad() bool {
	return config.CG.GetGraphGpuLoad()
}
func (c *AppService) GetGraphCpuLoad() bool {
	return config.CG.GetGraphCpuLoad()
}
func (c *AppService) GetGraphGpuCoreClock() bool {
	return config.CG.GetGraphGpuCoreClock()
}
func (c *AppService) GetGraphGpuMemClock() bool {
	return config.CG.GetGraphGpuMemClock()
}
func (c *AppService) GetGraphVram() bool {
	return config.CG.GetGraphVram()
}
func (c *AppService) GetGraphRam() bool {
	return config.CG.GetGraphRam()
}
func (c *AppService) GetGraphCpuTemp() bool {
	return config.CG.GetGraphCpuTemp()
}
func (c *AppService) GetGraphGpuTemp() bool {
	return config.CG.GetGraphGpuTemp()
}
