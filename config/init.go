package config

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func ResetConfig() {

}

func LoadConfig() {
	createConfigIfNotExist()
	createBackupConfig()
	setDefaults()

	Elements = []Element{}
	GPUElementsAvailable = []Element{
		Element{Name: "gpu_stats", Active: false},
		Element{Name: "gpu_temp", Active: false},
		Element{Name: "gpu_junction_temp", Active: false},
		Element{Name: "gpu_core_clock", Active: false},
		Element{Name: "gpu_mem_temp", Active: false},
		Element{Name: "gpu_mem_clock", Active: false},
		Element{Name: "gpu_power", Active: false},
		Element{Name: "gpu_load_change", Active: false},
		Element{Name: "gpu_fan", Active: false},
		Element{Name: "gpu_voltage", Active: false},
	}
	CPUElementsAvailable = []Element{
		Element{Name: "cpu_stats", Active: false},
		Element{Name: "cpu_temp", Active: false},
		Element{Name: "cpu_power", Active: false},
		Element{Name: "cpu_mhz", Active: false},
		Element{Name: "cpu_load_change", Active: false},
		Element{Name: "core_load", Active: false},
		Element{Name: "core_load_change", Active: false},
	}
	MemoryElementsAvailable = []Element{
		Element{Name: "vram", Active: false},
		Element{Name: "ram", Active: false},
		Element{Name: "full", Active: false},
		Element{Name: "fps_only", Active: false},
		Element{Name: "time", Active: false},
		Element{Name: "time_no_label", Active: false},
		Element{Name: "version", Active: false},
		Element{Name: "io_read", Active: false},
		Element{Name: "io_write", Active: false},
		Element{Name: "procmem", Active: false},
		Element{Name: "procmem_shared", Active: false},
		Element{Name: "procmem_virt", Active: false},
		Element{Name: "battery", Active: false},
		Element{Name: "battery_icon", Active: false},
		Element{Name: "device_battery_icon", Active: false},
		Element{Name: "battery_watt", Active: false},
		Element{Name: "battery_time", Active: false},
		Element{Name: "fps", Active: false},
		Element{Name: "fps_color_change", Active: false},
		Element{Name: "show_fps_limit", Active: false},
		Element{Name: "frametime", Active: false},
		Element{Name: "frame_count", Active: false},
		Element{Name: "throttling_status", Active: false},
		Element{Name: "throttling_status_graph", Active: false},
		Element{Name: "engine_version", Active: false},
		Element{Name: "engine_short_names", Active: false},
		Element{Name: "gpu_name", Active: false},
		Element{Name: "vulkan_driver", Active: false},
		Element{Name: "wine", Active: false},
		Element{Name: "exec_name", Active: false},
		Element{Name: "winesync", Active: false},
		Element{Name: "present_mode", Active: false},
		Element{Name: "arch", Active: false},
		Element{Name: "frame_timing", Active: false},
		Element{Name: "histogram", Active: false},
		Element{Name: "fsr", Active: false},
		Element{Name: "hide_fsr_sharpness", Active: false},
		Element{Name: "debug", Active: false},
		Element{Name: "hdr", Active: false},
		Element{Name: "refresh_rate", Active: false},
		Element{Name: "resolution", Active: false},
		Element{Name: "media_player", Active: false},
		Element{Name: "network", Active: false},
		Element{Name: "no_small_font", Active: false},
		Element{Name: "text_outline", Active: false},
		Element{Name: "hud_no_margin", Active: false},
		Element{Name: "hud_compact", Active: false},
		Element{Name: "no_display", Active: false},
	}

	conf := getConfigFile()

	for index, v := range conf {

		if strings.Contains(v, "#") {
			before, _, _ := strings.Cut(v, "#")
			v = before
		}

		// all which have a = sign
		if strings.Contains(v, "=") {
			cmd, val, _ := strings.Cut(v, "=")
			switch cmd {
			case "round_corners":
				r := strings.TrimSpace(val)
				CG.RoundCorners = (r != "0")
				break
			case "position":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.Position = r
				break
			case "gpu_text":
				r := strings.TrimSpace(val)
				CG.GpuText = r
				break
			case "gpu_load_value":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.GpuLoadValue = r
				break
			case "cpu_text":
				r := strings.TrimSpace(val)
				CG.CpuText = r
				break
			case "cpu_load_value":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.CpuLoadValue = r
				break

			case "background_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.Background = r
				break
			case "text_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.TextColor = r
				break
			case "gpu_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.GpuColor = r
				break
			case "gpu_load_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				sep := strings.Split(r, ",")
				if len(sep) != 3 {
					break
				}
				CG.GpuLoadColor0 = sep[0]
				CG.GpuLoadColor1 = sep[1]
				CG.GpuLoadColor2 = sep[2]
				break
			case "cpu_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.CpuColor = r
				break
			case "cpu_load_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				sep := strings.Split(r, ",")
				if len(sep) != 3 {
					break
				}
				CG.CpuLoadColor0 = sep[0]
				CG.CpuLoadColor1 = sep[1]
				CG.CpuLoadColor2 = sep[2]
				break
			case "vram_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.VramColor = r
				break
			case "ram_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.RamColor = r
				break
			case "engine_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.EngineColor = r
				break
			case "io_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.IoColor = r
				break
			case "frametime_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.FrametimeColor = r
				break
			case "media_player_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.MediaColor = r
				break
			case "wine_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.WineColor = r
				break
			case "battery_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.BatteryColor = r
				break
			case "network_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.NetworkColor = r
				break

			case "background_alpha":
				r := strings.TrimSpace(val)
				CG.BackgroundAlpha = r
				break
			case "font_size":
				r := strings.TrimSpace(val)
				CG.FontSize = r
				break

			case "toggle_hud":
				r := strings.TrimSpace(val)
				CG.KbToggleHud = r
				break
			case "toggle_hud_position":
				r := strings.TrimSpace(val)
				CG.KbToggleHudPosition = r
				break
			case "toggle_preset":
				r := strings.TrimSpace(val)
				CG.KbTogglePreset = r
				break
			case "toggle_fps_limit":
				r := strings.TrimSpace(val)
				CG.KbToggleFpsLimit = r
				break
			case "toggle_logging":
				r := strings.TrimSpace(val)
				CG.KbToggleLogging = r
				break
			case "reload_cfg":
				r := strings.TrimSpace(val)
				CG.KbReloadCfg = r
				break
			case "upload_cfg":
				r := strings.TrimSpace(val)
				CG.KbUploadLog = r
				break

			}

			continue
		}
		v = strings.TrimSpace(v)

		if v == "horizontal" {
			fmt.Println("horizontal found")
			CG.Orientation = "horizontal"
			continue
		}
		if v == "horizontal_stretch" {
			fmt.Println("horizontal stretch found")
			CG.Orientation = "horizontal_stretch"
			continue
		}

		found := false
		for i, cmd := range GPUElementsAvailable {
			if cmd.Name == v {
				fmt.Println("found cmd", cmd, index)
				GPUElementsAvailable[i].Active = true
				GPUElementsAvailable[i].Index = index
				found = true
				break
			}
		}
		if found {
			continue
		}
		for i, cmd := range CPUElementsAvailable {
			if cmd.Name == v {
				fmt.Println("found cmd", cmd, index)
				CPUElementsAvailable[i].Active = true
				CPUElementsAvailable[i].Index = index
				found = true
				break
			}
		}
		if found {
			continue
		}
		for i, cmd := range MemoryElementsAvailable {
			if cmd.Name == v {
				fmt.Println("found cmd", cmd, index)
				MemoryElementsAvailable[i].Active = true
				MemoryElementsAvailable[i].Index = index
				found = true
				break
			}
		}
		if found {
			continue
		}

	}
	fmt.Println("finished")
	fmt.Println(GPUElementsAvailable)
	fmt.Println(CPUElementsAvailable)
	fmt.Println(MemoryElementsAvailable)
}

func getConfigFilePath() string {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		panic("cant load config! UserHomeDir not found.")
	}
	configFile := homeDir + "/.config/MangoHud/MangoHud.conf"
	return configFile
}

func getConfigBackupFilePath() string {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		panic("cant load config! UserHomeDir not found.")
	}
	configFile := homeDir + "/.config/MangoHud/MangoHud_backup_mnghdc.conf"
	return configFile
}

func getConfigFile() []string {
	configFile := getConfigFilePath()
	file, err := os.Open(configFile)
	if err != nil {
		panic("can't read mangohud config file")
	}
	defer file.Close()

	result := []string{}
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		result = append(result, line)
	}
	return result
}

func setDefaults() {
	CG.Orientation = "vertical"
	CG.Position = "top-left"
	CG.RoundCorners = false
	CG.Background = "000000"
	CG.BackgroundAlpha = "0.8"
	CG.FontSize = "24"
	CG.TextColor = "FFFFFF"
	CG.GpuColor = "2E9762"
	CG.GpuText = ""
	CG.GpuLoadValue = "60,90"
	CG.CpuText = ""
	CG.CpuLoadValue = "60,90"
	CG.GpuLoadColor0 = "39F900"
	CG.GpuLoadColor1 = "FDFD09"
	CG.GpuLoadColor2 = "B22222"
	CG.CpuColor = "2E97CB"
	CG.CpuLoadColor0 = "39F900"
	CG.CpuLoadColor1 = "FDFD09"
	CG.CpuLoadColor2 = "B22222"
	CG.VramColor = "AD64C1"
	CG.RamColor = "C26693"
	CG.EngineColor = "EB5B5B"
	CG.IoColor = "A491D3"
	CG.FrametimeColor = "00FF00"
	CG.MediaColor = "FFFFFF"
	CG.WineColor = "EB4B4B"
	CG.BatteryColor = "FF9078"
	CG.NetworkColor = "E07B85"
	CG.KbToggleHud = "Shift_R+F12"
	CG.KbToggleHudPosition = "Shift_R+F11"
	CG.KbTogglePreset = "Shift_R+F10"
	CG.KbToggleFpsLimit = "Shift_L+F1"
	CG.KbToggleLogging = "Shift_L+F2"
	CG.KbReloadCfg = "Shift_L+F4"
	CG.KbUploadLog = "Shift_L+F3"
}

func createConfigIfNotExist() {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		panic("can't load user home dir")
	}
	configDir := homeDir + "/.config/MangoHud"
	dir, err := os.ReadDir(configDir)
	if err != nil {
		// config dir does not exist
		err = os.MkdirAll(configDir, 0766)
		if err != nil {
			panic("cant create mangohud config dir!")
		}
	}

	configExists := false
	for _, v := range dir {
		if v.IsDir() {
			continue
		}
		if v.Name() == "MangoHud.conf" {
			configExists = true
			break
		}
	}

	if !configExists {
		os.WriteFile(configDir+"/MangoHud.conf", []byte("Hello"), 0666)
	}
}

func createBackupConfig() {
	configFilePath := getConfigFilePath()
	backupFilePath := getConfigBackupFilePath()
	content, err := os.ReadFile(configFilePath)
	if err != nil {
		panic("Can't backup config file. Can't read original file")
	}
	err = os.Remove(backupFilePath)
	err = os.WriteFile(backupFilePath, content, 0666)
	if err != nil {
		panic("Can't backup config file. Can't write backup file")
	}
}
