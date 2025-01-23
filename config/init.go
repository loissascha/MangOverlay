package config

import (
	"bufio"
	"mangohud-configurator/logger"
	"os"
	"strings"
)

var Logger logger.Logger

func LoadConfig() {
	Logger = logger.NewLogger("Config")
	Logger.AddLoggerTarget(&logger.ConsoleLoggerTarget{})
	Logger.Log("Load Config!")
	createConfigIfNotExist()
	createBackupConfig()
	setDefaults()
	initGlobalEnabled()
	initElements()
	initFpsLimits()
	readConfigs()
}

func ReloadConfig() {
	setDefaults()
	initGlobalEnabled()
	initElements()
	initFpsLimits()
	readConfigs()
}

func ShareConfig() []string {
	return getConfigFile()
}

func ImportConfig(s string) {
	writeConfigFile(s)
}

func readConfigs() {
	conf := getConfigFile()
	hasLegacyLayoutSet := false
	Logger.Log("ReadConfigs")

	for index, lineOrg := range conf {
		index = index + 1

		lineNoComments := lineOrg
		if strings.Contains(lineOrg, "#") {
			before, _, _ := strings.Cut(lineOrg, "#")
			lineNoComments = before
		}

		foundElement := false

		// all which have a = sign
		if strings.Contains(lineNoComments, "=") {
			cmd, val, _ := strings.Cut(lineNoComments, "=")
			cmd = strings.TrimSpace(cmd)
			val = strings.TrimSpace(val)
			switch cmd {
			case "graphs":
				r := strings.TrimSpace(val)
				initGraphs(r)
				foundElement = true
				for i, cmd := range ExtraElementsAvailable {
					if cmd.Name == "graphs" {
						ExtraElementsAvailable[i].Active = true
						ExtraElementsAvailable[i].Index = index
						foundElement = true
						break
					}
				}
				break
			case "table_columns":
				r := strings.TrimSpace(val)
				foundElement = true
				CG.TableColumns = r
				break
			case "offset_x":
				r := strings.TrimSpace(val)
				foundElement = true
				CG.OffsetX = r
			case "offset_y":
				r := strings.TrimSpace(val)
				foundElement = true
				CG.OffsetY = r
			case "fps_limit":
				r := strings.TrimSpace(val)
				addFpsLimitsFromConfig(r)
				foundElement = true
				break
			case "fps_value":
				r := strings.TrimSpace(val)
				CG.FpsLoadValue = r
				foundElement = true
				break
			case "fps_color":
				r := strings.TrimSpace(val)
				foundElement = true
				if r == "" {
					break
				}
				sep := strings.Split(r, ",")
				if len(sep) != 3 {
					break
				}
				CG.FpsLoadColor0 = sep[0]
				CG.FpsLoadColor1 = sep[1]
				CG.FpsLoadColor2 = sep[2]
				break
			case "legacy_layout":
				hasLegacyLayoutSet = true
				foundElement = true
				break
			case "round_corners":
				r := strings.TrimSpace(val)
				CG.RoundCorners = (r != "0")
				foundElement = true
				break
			case "position":
				r := strings.TrimSpace(val)
				foundElement = true
				if r == "" {
					break
				}
				CG.Position = r
				break
			case "gpu_text":
				foundElement = true
				r := strings.TrimSpace(val)
				CG.GpuText = r
				break
			case "gpu_load_value":
				foundElement = true
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.GpuLoadValue = r
				break
			case "cpu_text":
				foundElement = true
				r := strings.TrimSpace(val)
				CG.CpuText = r
				break
			case "cpu_load_value":
				foundElement = true
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.CpuLoadValue = r
				break

			case "background_color":
				foundElement = true
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.Background = r
				break
			case "text_color":
				foundElement = true
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.TextColor = r
				break
			case "text_outline_color":
				foundElement = true
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.TextOutlineColor = r
				break
			case "text_outline_thickness":
				foundElement = true
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.TextOutlineThickness = r
				break
			case "gpu_color":
				foundElement = true
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.GpuColor = r
				break
			case "gpu_load_color":
				foundElement = true
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
				foundElement = true
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.CpuColor = r
				break
			case "cpu_load_color":
				foundElement = true
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
				foundElement = true
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.VramColor = r
				break
			case "ram_color":
				foundElement = true
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.RamColor = r
				break
			case "engine_color":
				foundElement = true
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.EngineColor = r
				break
			case "io_color":
				foundElement = true
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.IoColor = r
				break
			case "frametime_color":
				foundElement = true
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.FrametimeColor = r
				break
			case "media_player_color":
				foundElement = true
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.MediaColor = r
				break
			case "wine_color":
				foundElement = true
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.WineColor = r
				break
			case "battery_color":
				foundElement = true
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.BatteryColor = r
				break
			case "network_color":
				foundElement = true
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				CG.NetworkColor = r
				break

			case "background_alpha":
				foundElement = true
				r := strings.TrimSpace(val)
				CG.BackgroundAlpha = r
				break
			case "font_size":
				foundElement = true
				r := strings.TrimSpace(val)
				CG.FontSize = r
				break

			case "toggle_hud":
				foundElement = true
				r := strings.TrimSpace(val)
				CG.KbToggleHud = r
				break
			case "toggle_hud_position":
				foundElement = true
				r := strings.TrimSpace(val)
				CG.KbToggleHudPosition = r
				break
			case "toggle_preset":
				foundElement = true
				r := strings.TrimSpace(val)
				CG.KbTogglePreset = r
				break
			case "toggle_fps_limit":
				foundElement = true
				r := strings.TrimSpace(val)
				CG.KbToggleFpsLimit = r
				break
			case "toggle_logging":
				foundElement = true
				r := strings.TrimSpace(val)
				CG.KbToggleLogging = r
				break
			case "reload_cfg":
				foundElement = true
				r := strings.TrimSpace(val)
				CG.KbReloadCfg = r
				break
			case "upload_cfg":
				foundElement = true
				r := strings.TrimSpace(val)
				CG.KbUploadLog = r
				break
			}
			if foundElement {
				continue
			}

			AddUnorderedActiveElement(lineNoComments, index)
			continue
		}

		// statements without =
		lineNoComments = strings.TrimSpace(lineNoComments)

		if lineNoComments == "horizontal" {
			CG.Orientation = "horizontal"
			continue
		}
		if lineNoComments == "horizontal_stretch" {
			CG.Orientation = "horizontal_stretch"
			continue
		}

		for i, cmd := range GPUElementsAvailable {
			if cmd.Name == lineNoComments {
				GPUElementsAvailable[i].Active = true
				GPUElementsAvailable[i].Index = index
				foundElement = true
				break
			}
		}
		if foundElement {
			continue
		}
		for i, cmd := range CPUElementsAvailable {
			if cmd.Name == lineNoComments {
				CPUElementsAvailable[i].Active = true
				CPUElementsAvailable[i].Index = index
				foundElement = true
				break
			}
		}
		if foundElement {
			continue
		}
		for i, cmd := range MemoryElementsAvailable {
			if cmd.Name == lineNoComments {
				MemoryElementsAvailable[i].Active = true
				MemoryElementsAvailable[i].Index = index
				foundElement = true
				break
			}
		}
		if foundElement {
			continue
		}
		for i, cmd := range ExtraElementsAvailable {
			if cmd.Name == lineNoComments {
				ExtraElementsAvailable[i].Active = true
				ExtraElementsAvailable[i].Index = index
				foundElement = true
				break
			}
		}
		if foundElement {
			continue
		}
		AddUnorderedActiveElement(lineNoComments, index)
	}
	if !hasLegacyLayoutSet {
		addLegacyLayoutStartLine()
	}
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

func writeConfigFile(s string) {
	configFile := getConfigFilePath()
	err := os.WriteFile(configFile, []byte(s), os.ModePerm)
	if err != nil {
		panic("Can't write config!")
	}
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
		os.WriteFile(configDir+"/MangoHud.conf", []byte(""), 0666)
	}
}
