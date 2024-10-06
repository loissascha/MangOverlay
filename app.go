package main

import (
	"context"
	"fmt"
	"mangohud-configurator/config"
	"mangohud-configurator/logger"
	"os/exec"
)

var Logger logger.Logger
var VkCubeCmd *exec.Cmd
var VkCubeRunning bool = false

// var VkCubePath = "vkcube"
// var MangohudPath = "mangohud"
var VkCubePath = "/run/host/bin/vkcube"
var MangohudPath = "/run/host/bin/mangohud"

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
		// VkCubeCmd = exec.Command("bash", "-c", VkCubePath)
		VkCubeCmd = exec.Command(VkCubePath)
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
		err := VkCubeCmd.Process.Kill()
		if err != nil {
			fmt.Println("Error killing old process")
		}
		VkCubeRunning = false
	}
}
