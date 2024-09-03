package main

import (
	"context"
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
	config.LoadConfig()
	a.RestartVkcube()
}

func (a *App) RestartVkcube() {
	cmd := exec.Command("bash", "-c", "killall vkcube")
	cmd.Run()
	go func() {
		cmd := exec.Command("bash", "-c", "mangohud vkcube")
		cmd.Run()
	}()
}
