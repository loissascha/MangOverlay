package main

import (
	"context"
	"mangohud-configurator/config"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	config.ConfigGlobal = config.Config{
		Orientation: "",
	}
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
	config.LoadConfig()
}
