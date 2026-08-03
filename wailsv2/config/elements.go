package config

import "fmt"

var Elements []Element
var GPUElementsAvailable []Element
var CPUElementsAvailable []Element
var MemoryElementsAvailable []Element
var ExtraElementsAvailable []Element
var UnorderedActiveElements []Element

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
	for i, v := range UnorderedActiveElements {
		if v.Name == first {
			UnorderedActiveElements[i].Index = secondIndex
		} else if v.Name == second {
			UnorderedActiveElements[i].Index = firstIndex
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
	for i, v := range UnorderedActiveElements {
		if v.Name == name {
			return UnorderedActiveElements[i].Index
		}
	}
	return 0
}

func (c *Config) activateCpuStats(newIndex int) {
	for i, v := range CPUElementsAvailable {
		if v.Name == "cpu_stats" {
			if !v.Active {
				CPUElementsAvailable[i].Active = true
				CPUElementsAvailable[i].Index = newIndex
				addConfigLine("cpu_stats")
			}
			return
		}
	}
}
func (c *Config) deactivateCpuStats() {
	for i, v := range CPUElementsAvailable {
		if v.Name == "cpu_stats" {
			if v.Active {
				CPUElementsAvailable[i].Active = false
				deleteConfigLine("cpu_stats")
			}
			return
		}
	}
}

func (c *Config) activateGpuStats(newIndex int) {
	for i, v := range GPUElementsAvailable {
		if v.Name == "gpu_stats" {
			if !v.Active {
				GPUElementsAvailable[i].Active = true
				GPUElementsAvailable[i].Index = newIndex
				addConfigLine("gpu_stats")
			}
			return
		}
	}
}
func (c *Config) deactivateGpuStats() {
	for i, v := range GPUElementsAvailable {
		if v.Name == "gpu_stats" {
			if v.Active {
				GPUElementsAvailable[i].Active = false
				deleteConfigLine("gpu_stats")
			}
			return
		}
	}
}

func (c *Config) ActivateElement(e string) int {
	cf := getConfigFile()
	newIndex := len(cf) + 1
	for i, v := range GPUElementsAvailable {
		if v.Name != e {
			continue
		}
		GPUElementsAvailable[i].Active = true
		GPUElementsAvailable[i].Index = newIndex
		addConfigLine(e)
		c.activateGpuStats(newIndex + 1)
		return newIndex
	}
	for i, v := range CPUElementsAvailable {
		if v.Name != e {
			continue
		}
		CPUElementsAvailable[i].Active = true
		CPUElementsAvailable[i].Index = newIndex
		addConfigLine(e)
		c.activateCpuStats(newIndex + 1)
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
		hasActiveGpuElement := false
		for _, cv := range GPUElementsAvailable {
			if cv.Name == "gpu_stats" {
				continue
			}
			if cv.Active {
				hasActiveGpuElement = true
			}
		}
		if !hasActiveGpuElement {
			c.deactivateGpuStats()
		}
		return
	}
	for i, v := range CPUElementsAvailable {
		if v.Name != e {
			continue
		}
		CPUElementsAvailable[i].Active = false
		deleteConfigLine(e)
		hasActiveCpuElement := false
		for _, cv := range CPUElementsAvailable {
			if cv.Name == "cpu_stats" {
				continue
			}
			if cv.Active {
				hasActiveCpuElement = true
			}
		}
		if !hasActiveCpuElement {
			c.deactivateCpuStats()
		}
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

func (c *Config) AddUnorderedElement(name string) {
	if name == "" {
		return
	}
	index := addConfigLine(name)
	UnorderedActiveElements = append(UnorderedActiveElements, Element{Name: name, Index: index, Active: true, IsCustom: true})
}

func (c *Config) RemoveUnorderedElement(index int) {
	newElements := []Element{}
	for _, v := range UnorderedActiveElements {
		if v.Index == index {
			deleteConfigLine(v.Name)
			continue
		}
		newElements = append(newElements, v)
	}
	UnorderedActiveElements = newElements
	ReloadConfig()
}

func (c *Config) OrderElementUnderneathElement(toOrder string, underneath string) {
	placeConfigLineUnderneathOther(toOrder, underneath)
	ReloadConfig()
}

func initElements() {
	Elements = []Element{}
	GPUElementsAvailable = []Element{
		{Name: "gpu_stats", Active: false, DisplayName: "GPU Stats"},
		{Name: "gpu_temp", Active: false, DisplayName: "GPU Temp"},
		{Name: "gpu_junction_temp", Active: false, DisplayName: "GPU Junction Temp"},
		{Name: "gpu_core_clock", Active: false, DisplayName: "GPU Core Clock"},
		{Name: "gpu_mem_temp", Active: false, DisplayName: "GPU Memory Temp"},
		{Name: "gpu_mem_clock", Active: false, DisplayName: "GPU Memory Clock"},
		{Name: "gpu_power", Active: false, DisplayName: "GPU Power"},
		{Name: "gpu_load_change", Active: false, DisplayName: "GPU Load Change"},
		{Name: "gpu_fan", Active: false, DisplayName: "GPU Fan"},
		{Name: "gpu_voltage", Active: false, DisplayName: "GPU Voltage"},
		{Name: "gpu_name", Active: false, DisplayName: "GPU Name"},
	}
	CPUElementsAvailable = []Element{
		{Name: "cpu_stats", Active: false, DisplayName: "CPU Stats"},
		{Name: "cpu_temp", Active: false, DisplayName: "CPU Temp"},
		{Name: "cpu_power", Active: false, DisplayName: "CPU Power"},
		{Name: "cpu_mhz", Active: false, DisplayName: "CPU Mhz"},
		{Name: "cpu_load_change", Active: false, DisplayName: "CPU Load Change"},
		{Name: "core_load", Active: false, DisplayName: "CPU Core Load"},
		{Name: "core_bars", Active: false, DisplayName: "CPU Core Bars"},
		{Name: "core_load_change", Active: false, DisplayName: "CPU Core Load Change"},
	}
	ExtraElementsAvailable = []Element{
		{Name: "full", Active: false, DisplayName: "Full"},
		{Name: "fps_only", Active: false, DisplayName: "FPS Only"},
		{Name: "time", Active: false, DisplayName: "Time"},
		{Name: "time_no_label", Active: false, DisplayName: "Time (no label)"},
		{Name: "version", Active: false, DisplayName: "Version"},
		{Name: "io_read", Active: false, DisplayName: "IO Read"},
		{Name: "io_write", Active: false, DisplayName: "IO Write"},
		{Name: "battery", Active: false, DisplayName: "Battery"},
		{Name: "battery_icon", Active: false, DisplayName: "Battery Icon"},
		{Name: "device_battery_icon", Active: false, DisplayName: "Device Battery Icon"},
		{Name: "battery_watt", Active: false, DisplayName: "Battery Watt"},
		{Name: "battery_time", Active: false, DisplayName: "Battery Time"},
		{Name: "fps", Active: false, DisplayName: "FPS"},
		{Name: "fps_color_change", Active: false, DisplayName: "FPS Color Change"},
		{Name: "show_fps_limit", Active: false, DisplayName: "Show FPS Limit"},
		{Name: "frametime", Active: false, DisplayName: "Frametime"},
		{Name: "frame_count", Active: false, DisplayName: "Frame Count"},
		{Name: "throttling_status", Active: false, DisplayName: "Throttling Status"},
		{Name: "throttling_status_graph", Active: false, DisplayName: "Throttling Status Graph"},
		{Name: "engine_version", Active: false, DisplayName: "Engine Version"},
		{Name: "engine_short_names", Active: false, DisplayName: "Engine Short Name"},
		{Name: "vulkan_driver", Active: false, DisplayName: "Vulkan Driver"},
		{Name: "wine", Active: false, DisplayName: "Wine"},
		{Name: "exec_name", Active: false, DisplayName: "Exec Name"},
		{Name: "winesync", Active: false, DisplayName: "Winesync"},
		{Name: "present_mode", Active: false, DisplayName: "Present Mode"},
		{Name: "arch", Active: false, DisplayName: "Architecture"},
		{Name: "frame_timing", Active: false, DisplayName: "Frame Timing"},
		{Name: "histogram", Active: false, DisplayName: "Histogram"},
		{Name: "fsr", Active: false, DisplayName: "FSR"},
		{Name: "hide_fsr_sharpness", Active: false, DisplayName: "Hide FSR Sharpness"},
		{Name: "debug", Active: false, DisplayName: "Debug"},
		{Name: "hdr", Active: false, DisplayName: "HDR"},
		{Name: "refresh_rate", Active: false, DisplayName: "Refresh Rate"},
		{Name: "resolution", Active: false, DisplayName: "Resolution"},
		{Name: "media_player", Active: false, DisplayName: "Media Player"},
		{Name: "network", Active: false, DisplayName: "Network"},
		{Name: "no_small_font", Active: false, DisplayName: "No Small Font"},
		{Name: "text_outline", Active: false, DisplayName: "Text Outline"},
		{Name: "hud_no_margin", Active: false, DisplayName: "HUD No Margin"},
		{Name: "hud_compact", Active: false, DisplayName: "HUD Compact"},
		{Name: "no_display", Active: false, DisplayName: "No Display"},
		{Name: "graphs", Active: false, DisplayName: "Graphs"},
	}
	MemoryElementsAvailable = []Element{
		{Name: "ram", Active: false, DisplayName: "RAM"},
		{Name: "vram", Active: false, DisplayName: "VRAM"},
		{Name: "procmem", Active: false, DisplayName: "Procmem"},
		{Name: "procmem_shared", Active: false, DisplayName: "Procmem Shared"},
		{Name: "procmem_virt", Active: false, DisplayName: "Procmem Virt"},
	}
	UnorderedActiveElements = []Element{}
}

func AddUnorderedActiveElement(name string, index int) {
	if name == "" {
		return
	}
	Logger.Log(fmt.Sprintf("AddUnorderedActiveElement %s %d", name, index))
	UnorderedActiveElements = append(UnorderedActiveElements, Element{Name: name, Active: true, Index: index, IsCustom: true})
}
