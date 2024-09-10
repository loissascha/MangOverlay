package main

import (
	"context"
	"fmt"
	"mangohud-configurator/config"
	"os/exec"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	config.CG = config.Config{}
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
	fmt.Println("Welcome!")
	config.LoadConfig()
	a.StartVkcube()
}

func (a *App) shutdown(ctx context.Context) {
	a.StopVkcube()
	fmt.Println("Goodbye!")
}

var VkCubeCmd *exec.Cmd
var VkCubeRunning bool = false

func (a *App) RestartVkcube() {
	a.StopVkcube()
	a.StartVkcube()
}

func (a *App) StartVkcube() {
	go func() {
		VkCubeCmd = exec.Command("bash", "-c", "mangohud vkcube")
		err := VkCubeCmd.Start()
		if err != nil {
			fmt.Println("Error Starting VkCube")
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
