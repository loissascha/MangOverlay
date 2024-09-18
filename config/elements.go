package config

var Elements []Element
var GPUElementsAvailable []Element
var CPUElementsAvailable []Element
var MemoryElementsAvailable []Element
var ExtraElementsAvailable []Element

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

func initElements() {
	Elements = []Element{}
	GPUElementsAvailable = []Element{
		{Name: "gpu_stats", Active: false},
		{Name: "gpu_temp", Active: false},
		{Name: "gpu_junction_temp", Active: false},
		{Name: "gpu_core_clock", Active: false},
		{Name: "gpu_mem_temp", Active: false},
		{Name: "gpu_mem_clock", Active: false},
		{Name: "gpu_power", Active: false},
		{Name: "gpu_load_change", Active: false},
		{Name: "gpu_fan", Active: false},
		{Name: "gpu_voltage", Active: false},
		{Name: "gpu_name", Active: false},
	}
	CPUElementsAvailable = []Element{
		{Name: "cpu_stats", Active: false},
		{Name: "cpu_temp", Active: false},
		{Name: "cpu_power", Active: false},
		{Name: "cpu_mhz", Active: false},
		{Name: "cpu_load_change", Active: false},
		{Name: "core_load", Active: false},
		{Name: "core_load_change", Active: false},
	}
	ExtraElementsAvailable = []Element{
		{Name: "full", Active: false},
		{Name: "fps_only", Active: false},
		{Name: "time", Active: false},
		{Name: "time_no_label", Active: false},
		{Name: "version", Active: false},
		{Name: "io_read", Active: false},
		{Name: "io_write", Active: false},
		{Name: "battery", Active: false},
		{Name: "battery_icon", Active: false},
		{Name: "device_battery_icon", Active: false},
		{Name: "battery_watt", Active: false},
		{Name: "battery_time", Active: false},
		{Name: "fps", Active: false},
		{Name: "fps_color_change", Active: false},
		{Name: "show_fps_limit", Active: false},
		{Name: "frametime", Active: false},
		{Name: "frame_count", Active: false},
		{Name: "throttling_status", Active: false},
		{Name: "throttling_status_graph", Active: false},
		{Name: "engine_version", Active: false},
		{Name: "engine_short_names", Active: false},
		{Name: "vulkan_driver", Active: false},
		{Name: "wine", Active: false},
		{Name: "exec_name", Active: false},
		{Name: "winesync", Active: false},
		{Name: "present_mode", Active: false},
		{Name: "arch", Active: false},
		{Name: "frame_timing", Active: false},
		{Name: "histogram", Active: false},
		{Name: "fsr", Active: false},
		{Name: "hide_fsr_sharpness", Active: false},
		{Name: "debug", Active: false},
		{Name: "hdr", Active: false},
		{Name: "refresh_rate", Active: false},
		{Name: "resolution", Active: false},
		{Name: "media_player", Active: false},
		{Name: "network", Active: false},
		{Name: "no_small_font", Active: false},
		{Name: "text_outline", Active: false},
		{Name: "hud_no_margin", Active: false},
		{Name: "hud_compact", Active: false},
		{Name: "no_display", Active: false},
	}
	MemoryElementsAvailable = []Element{
		{Name: "ram", Active: false},
		{Name: "vram", Active: false},
		{Name: "procmem", Active: false},
		{Name: "procmem_shared", Active: false},
		{Name: "procmem_virt", Active: false},
	}
}
