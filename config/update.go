package config

import (
	"strings"
)

func (c *Config) SetRoundedCorners(n bool) {
	c.RoundCorners = n
	if n {
		updateConfigLine("round_corners", "10", true)
	} else {
		updateConfigLine("round_corners", "0", true)
	}
}

func (c *Config) SetOrientation(n string) {
	c.Orientation = n
	deleteConfigLine("horizontal")
	deleteConfigLine("horizontal_stretch")
	if n == "horizontal" {
		addConfigLine("horizontal")
	}
	if n == "horizontal_stretch" {
		addConfigLine("horizontal_stretch")
	}
}

func (c *Config) SetPosition(n string) {
	c.Position = n
	if n == "" {
		deleteConfigLine("position")
		return
	}
	updateConfigLine("position", n, true)
}

func (c *Config) SetBackgroundColor(n string) {
	c.Background = n
	n = strings.TrimPrefix(n, "#")
	if n == "" {
		deleteConfigLine("background_color")
		return
	}
	updateConfigLine("background_color", n, true)
}

func (c *Config) SetBackgroundAlpha(n string) {
	c.BackgroundAlpha = n
	updateConfigLine("background_alpha", n, true)
}

func (c *Config) SetFontSize(n string) {
	c.FontSize = n
	updateConfigLine("font_size", n, true)
}

func (c *Config) SetGpuColor(n string) {
	c.GpuColor = n
	n = strings.TrimPrefix(n, "#")
	if n == "" {
		deleteConfigLine("gpu_color")
		return
	}
	updateConfigLine("gpu_color", n, true)
}

func (c *Config) SetTextColor(n string) {
	c.TextColor = n
	n = strings.TrimPrefix(n, "#")
	if n == "" {
		deleteConfigLine("text_color")
		return
	}
	updateConfigLine("text_color", n, true)
}

func (c *Config) SetCpuColor(n string) {
	c.CpuColor = n
	n = strings.TrimPrefix(n, "#")
	if n == "" {
		deleteConfigLine("cpu_color")
		return
	}
	updateConfigLine("cpu_color", n, true)
}

func (c *Config) SetVramColor(n string) {
	c.VramColor = n
	n = strings.TrimPrefix(n, "#")
	if n == "" {
		deleteConfigLine("vram_color")
		return
	}
	updateConfigLine("vram_color", n, true)
}

func (c *Config) SetRamColor(n string) {
	c.RamColor = n
	n = strings.TrimPrefix(n, "#")
	if n == "" {
		deleteConfigLine("ram_color")
		return
	}
	updateConfigLine("ram_color", n, true)
}

func (c *Config) SetEngineColor(n string) {
	c.EngineColor = n
	n = strings.TrimPrefix(n, "#")
	if n == "" {
		deleteConfigLine("engine_color")
		return
	}
	updateConfigLine("engine_color", n, true)
}

func (c *Config) SetIoColor(n string) {
	c.IoColor = n
	n = strings.TrimPrefix(n, "#")
	if n == "" {
		deleteConfigLine("io_color")
		return
	}
	updateConfigLine("io_color", n, true)
}

func (c *Config) SetFrametimeColor(n string) {
	c.FrametimeColor = n
	n = strings.TrimPrefix(n, "#")
	if n == "" {
		deleteConfigLine("frametime_color")
		return
	}
	updateConfigLine("frametime_color", n, true)
}

func (c *Config) SetMediaColor(n string) {
	c.MediaColor = n
	n = strings.TrimPrefix(n, "#")
	if n == "" {
		deleteConfigLine("media_player_color")
		return
	}
	updateConfigLine("media_player_color", n, true)
}

func (c *Config) SetWineColor(n string) {
	c.WineColor = n
	n = strings.TrimPrefix(n, "#")
	if n == "" {
		deleteConfigLine("wine_color")
		return
	}
	updateConfigLine("wine_color", n, true)
}

func (c *Config) SetBatteryColor(n string) {
	c.BatteryColor = n
	n = strings.TrimPrefix(n, "#")
	if n == "" {
		deleteConfigLine("battery_color")
		return
	}
	updateConfigLine("battery_color", n, true)
}

func (c *Config) SetNetworkColor(n string) {
	c.NetworkColor = n
	n = strings.TrimPrefix(n, "#")
	if n == "" {
		deleteConfigLine("network_color")
		return
	}
	updateConfigLine("network_color", n, true)
}

func (c *Config) SetGpuText(n string) {
	c.GpuText = n
	if n == "" {
		deleteConfigLine("gpu_text")
		return
	}
	updateConfigLine("gpu_text", n, true)
}

func (c *Config) SetGpuLoadChange(n string) {
	c.GpuLoadValue = n
	if n == "" {
		deleteConfigLine("gpu_load_value")
		return
	}
	if !strings.Contains(n, ",") {
		deleteConfigLine("gpu_load_value")
		return
	}
	b, a, found := strings.Cut(n, ",")
	if !found {
		return
	}
	if b == "" || a == "" {
		return
	}
	updateConfigLine("gpu_load_value", n, true)
}

func (c *Config) SetCpuText(n string) {
	c.CpuText = n
	if n == "" {
		deleteConfigLine("cpu_text")
		return
	}
	updateConfigLine("cpu_text", n, true)
}

func (c *Config) SetCpuLoadChange(n string) {
	c.CpuLoadValue = n
	if n == "" {
		deleteConfigLine("cpu_load_value")
		return
	}
	if !strings.Contains(n, ",") {
		deleteConfigLine("cpu_load_value")
		return
	}
	b, a, found := strings.Cut(n, ",")
	if !found {
		return
	}
	if b == "" || a == "" {
		return
	}
	updateConfigLine("cpu_load_value", n, true)
}

func (c *Config) SetGpuLoadColor(n0 string, n1 string, n2 string) {
	if n0 == "" || n1 == "" || n2 == "" {
		return
	}
	c.GpuLoadColor0 = n0
	c.GpuLoadColor1 = n1
	c.GpuLoadColor2 = n2
	updateConfigLine("gpu_load_color", n0+","+n1+","+n2, true)
}

func (c *Config) SetCpuLoadColor(n0 string, n1 string, n2 string) {
	if n0 == "" || n1 == "" || n2 == "" {
		return
	}
	c.CpuLoadColor0 = n0
	c.CpuLoadColor1 = n1
	c.CpuLoadColor2 = n2
	updateConfigLine("cpu_load_color", n0+","+n1+","+n2, true)
}

func (c *Config) SetKbToggleHud(n string) {
	c.KbToggleHud = n
	updateConfigLine("toggle_hud", n, true)
}
func (c *Config) SetKbToggleHudPosition(n string) {
	c.KbToggleHudPosition = n
	updateConfigLine("toggle_hud_position", n, true)
}
func (c *Config) SetKbTogglePreset(n string) {
	c.KbTogglePreset = n
	updateConfigLine("toggle_preset", n, true)
}
func (c *Config) SetKbToggleFpsLimit(n string) {
	c.KbToggleFpsLimit = n
	updateConfigLine("toggle_fps_limit", n, true)
}
func (c *Config) SetKbToggleLogging(n string) {
	c.KbToggleLogging = n
	updateConfigLine("toggle_logging", n, true)
}
func (c *Config) SetKbReloadCfg(n string) {
	c.KbReloadCfg = n
	updateConfigLine("reload_cfg", n, true)
}
func (c *Config) SetKbUploadLog(n string) {
	c.KbUploadLog = n
	updateConfigLine("upload_log", n, true)
}
