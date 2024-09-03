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

	conf := getConfigFile()

	for _, v := range conf {

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
				fmt.Println("round corners found", r)
				ConfigGlobal.RoundCorners = (r != "0")
				break

				// # text_color=FFFFFF
				// # gpu_color=2E9762
				// # cpu_color=2E97CB
				// # vram_color=AD64C1
				// # ram_color=C26693
				// # engine_color=EB5B5B
				// # io_color=A491D3
				// # frametime_color=00FF00
				// # media_player_color=FFFFFF
				// # wine_color=EB5B5B
				// # battery_color=FF9078
				// # network_color=E07B85

			case "background_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				ConfigGlobal.Background = r
				break
			case "text_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				ConfigGlobal.TextColor = r
				break
			case "gpu_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				ConfigGlobal.GpuColor = r
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
				ConfigGlobal.GpuLoadColor0 = sep[0]
				ConfigGlobal.GpuLoadColor1 = sep[1]
				ConfigGlobal.GpuLoadColor2 = sep[2]
				break
			case "cpu_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				ConfigGlobal.CpuColor = r
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
				ConfigGlobal.CpuLoadColor0 = sep[0]
				ConfigGlobal.CpuLoadColor1 = sep[1]
				ConfigGlobal.CpuLoadColor2 = sep[2]
				break
			case "vram_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				ConfigGlobal.VramColor = r
				break
			case "ram_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				ConfigGlobal.RamColor = r
				break
			case "engine_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				ConfigGlobal.EngineColor = r
				break
			case "io_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				ConfigGlobal.IoColor = r
				break
			case "frametime_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				ConfigGlobal.FrametimeColor = r
				break
			case "media_player_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				ConfigGlobal.MediaColor = r
				break
			case "wine_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				ConfigGlobal.WineColor = r
				break
			case "battery_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				ConfigGlobal.BatteryColor = r
				break
			case "network_color":
				r := strings.TrimSpace(val)
				if r == "" {
					break
				}
				ConfigGlobal.NetworkColor = r
				break

			case "background_alpha":
				r := strings.TrimSpace(val)
				ConfigGlobal.BackgroundAlpha = r
				break
			case "font_size":
				r := strings.TrimSpace(val)
				ConfigGlobal.FontSize = r
				break
			}
			continue
		}
		v = strings.TrimSpace(v)

		if v == "horizontal" {
			fmt.Println("horizontal found")
			ConfigGlobal.Orientation = "horizontal"
			continue
		}
		if v == "horizontal_stretch" {
			fmt.Println("horizontal stretch found")
			ConfigGlobal.Orientation = "horizontal_stretch"
			continue
		}

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

func setDefaults() {
	ConfigGlobal.Orientation = "vertical"
	ConfigGlobal.RoundCorners = false
	ConfigGlobal.Background = "000000"
	ConfigGlobal.BackgroundAlpha = "0.8"
	ConfigGlobal.FontSize = "24"
	ConfigGlobal.TextColor = "FFFFFF"
	ConfigGlobal.GpuColor = "2E9762"
	ConfigGlobal.GpuLoadColor0 = "39F900"
	ConfigGlobal.GpuLoadColor1 = "FDFD09"
	ConfigGlobal.GpuLoadColor2 = "B22222"
	ConfigGlobal.CpuColor = "2E97CB"
	ConfigGlobal.CpuLoadColor0 = "39F900"
	ConfigGlobal.CpuLoadColor1 = "FDFD09"
	ConfigGlobal.CpuLoadColor2 = "B22222"
	ConfigGlobal.VramColor = "AD64C1"
	ConfigGlobal.RamColor = "C26693"
	ConfigGlobal.EngineColor = "EB5B5B"
	ConfigGlobal.IoColor = "A491D3"
	ConfigGlobal.FrametimeColor = "00FF00"
	ConfigGlobal.MediaColor = "FFFFFF"
	ConfigGlobal.WineColor = "EB4B4B"
	ConfigGlobal.BatteryColor = "FF9078"
	ConfigGlobal.NetworkColor = "E07B85"
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
