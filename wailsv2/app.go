package main

import (
	"context"
	"fmt"
	"mangohud-configurator/config"
	"mangohud-configurator/logger"
	"os"
	"os/exec"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

var Logger logger.Logger
var VkCubeCmd *exec.Cmd
var VkCubeRunning bool = false
var IsFlatpak = false

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	config.CG = config.Config{}
	Logger = logger.NewLogger("App")
	Logger.AddLoggerTarget(&logger.ConsoleLoggerTarget{})
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
	Logger.Log("Welcome!")
	config.LoadConfig()
	a.StartVkcube()
}

func (a *App) shutdown(ctx context.Context) {
	a.StopVkcube()
	Logger.Log("Goodbye!")
}

func (a *App) OpenLink(url string) {
	runtime.BrowserOpenURL(a.ctx, url)
}

func (a *App) EnableGlobally() {
	config.EnableGlobally()
}
func (a *App) DisableGlobally() {
	config.DisableGlobally()
}
func (a *App) GloballyEnabled() bool {
	return config.GlobalEnabled
}

func (a *App) RestartVkcube() {
	a.StopVkcube()
	a.StartVkcube()
}
func (a *App) StartVkcube() {
	go func() {
		VkCubeCmd = exec.Command("bash", "-c", "mangohud vkcube")
		if commandExists("flatpak-spawn") {
			IsFlatpak = true
			mangohud := findHostMangohudInstallation()
			vkcube := findHostVkcubeInstallation()
			VkCubeCmd = exec.Command("bash", "-c", fmt.Sprintf("flatpak-spawn --host %s %s", mangohud, vkcube))
		}
		err := VkCubeCmd.Start()
		if err != nil {
			fmt.Println("Error Starting VkCube", err)
			return
		} else {
			VkCubeRunning = true
		}
	}()
}
func (a *App) StopVkcube() {
	if VkCubeRunning {
		if IsFlatpak {
			cmd := exec.Command("bash", "-c", "flatpak-spawn --host killall vkcube")
			cmd.Run()
		} else {
			err := VkCubeCmd.Process.Kill()
			if err != nil {
				fmt.Println("Error killing old process")
			}
			VkCubeRunning = false
		}
	}
}

func commandExists(cmd string) bool {
	_, err := exec.LookPath(cmd)
	return err == nil
}

// only for flatpak
func findHostVkcubeInstallation() string {
	dir, err := os.ReadDir("/run/host/bin")
	if err != nil {
		fmt.Println("Can't read host /bin")
	} else {
		for _, d := range dir {
			if d.Name() == "vkcube" {
				return "/bin/vkcube"
			}
		}
	}
	dir, err = os.ReadDir("/run/host/usr/bin")
	if err != nil {
		fmt.Println("Can't read host /usr/bin")
	} else {
		for _, d := range dir {
			if d.Name() == "vkcube" {
				return "/usr/bin/vkcube"
			}
		}
	}
	dir, err = os.ReadDir("/run/host/usr/local/bin")
	if err != nil {
		fmt.Println("Can't read host /usr/local/bin")
	} else {
		for _, d := range dir {
			if d.Name() == "vkcube" {
				return "/usr/local/bin/vkcube"
			}
		}
	}
	dir, err = os.ReadDir("~/.local/bin")
	if err != nil {
		fmt.Println("Can't read host ~/.local/bin")
	} else {
		for _, d := range dir {
			if d.Name() == "vkcube" {
				return "~/.local/bin/vkcube"
			}
		}
	}
	return ""
}
func findHostMangohudInstallation() string {
	dir, err := os.ReadDir("/run/host/bin")
	if err != nil {
		fmt.Println("Can't read host /bin")
	} else {
		for _, d := range dir {
			if d.Name() == "mangohud" {
				return "/bin/mangohud"
			}
		}
	}
	dir, err = os.ReadDir("/run/host/usr/bin")
	if err != nil {
		fmt.Println("Can't read host /usr/bin")
	} else {
		for _, d := range dir {
			if d.Name() == "mangohud" {
				return "/usr/bin/mangohud"
			}
		}
	}
	dir, err = os.ReadDir("/run/host/usr/local/bin")
	if err != nil {
		fmt.Println("Can't read host /usr/local/bin")
	} else {
		for _, d := range dir {
			if d.Name() == "mangohud" {
				return "/usr/local/bin/mangohud"
			}
		}
	}
	dir, err = os.ReadDir("~/.local/bin")
	if err != nil {
		fmt.Println("Can't read host ~/.local/bin")
	} else {
		for _, d := range dir {
			if d.Name() == "mangohud" {
				return "~/.local/bin/mangohud"
			}
		}
	}
	return ""
}
