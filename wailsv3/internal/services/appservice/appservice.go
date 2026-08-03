package appservice

import (
	"fmt"
	"mangoverlay/internal/config"
	"os"
	"os/exec"
)

var VkCubeCmd *exec.Cmd
var VkCubeRunning bool = false
var IsFlatpak = false

type AppService struct {
}

func (a *AppService) Startup() {
	config.LoadConfig()
	a.StartVkcube()
}

func (a *AppService) Shutdown() {
	a.StopVkcube()
}

func (a *AppService) OpenLink(url string) {
	// TODO: migrate this:
	// runtime.BrowserOpenURL(a.ctx, url)
}

func (a *AppService) EnableGlobally() {
	config.EnableGlobally()
}
func (a *AppService) DisableGlobally() {
	config.DisableGlobally()
}
func (a *AppService) GloballyEnabled() bool {
	return config.GlobalEnabled
}

func (a *AppService) RestartVkcube() {
	a.StopVkcube()
	a.StartVkcube()
}
func (a *AppService) StartVkcube() {
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
func (a *AppService) StopVkcube() {
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
