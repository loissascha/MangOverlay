package config

import (
	"fmt"
	"os"
	"strings"
)

func (c *Config) SetRoundedCorners(n bool) {
	c.RoundCorners = n
	if n {
		updateConfigLine("round_corners", "1")
	} else {
		updateConfigLine("round_corners", "0")
	}
}

func (c *Config) SetOrientation(n string) {
	fmt.Println("SetOrientation", n)
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

func deleteConfigLine(n string) {
	cf := getConfigFile()
	newFile := ""
	for _, v := range cf {
		if strings.Contains(v, "#") {
			before, _, _ := strings.Cut(v, "#")
			v = before
		}

		// all which have a = sign
		if strings.Contains(v, "=") {
			cmd, _, _ := strings.Cut(v, "=")
			cmd = strings.TrimSpace(cmd)
			if cmd == n {
				continue
			}
			newFile += v + "\n"
			continue
		}
		nv := strings.TrimSpace(v)
		if nv == n {
			continue
		}
		newFile += v + "\n"
	}
	os.WriteFile(getConfigFilePath(), []byte(newFile), 0766)
}

func addConfigLine(n string) {
	cf := getConfigFile()
	newFile := ""
	for _, v := range cf {
		newFile += v + "\n"
	}
	newFile += n
	os.WriteFile(getConfigFilePath(), []byte(newFile), 0766)
}

func updateConfigLine(c string, n string) {
	cf := getConfigFile()
	newFile := ""
	lineFound := false
	for _, v := range cf {
		if strings.Contains(v, "#") {
			before, _, _ := strings.Cut(v, "#")
			v = before
		}

		if strings.Contains(v, "=") {
			cmd, _, _ := strings.Cut(v, "=")
			cmd = strings.TrimSpace(cmd)
			if cmd == c {
				newFile += cmd + "=" + n + "\n"
				lineFound = true
				continue
			}
			newFile += v + "\n"
			continue
		}
		newFile += v + "\n"
	}
	if !lineFound {
		newFile += c + "=" + n
	}
	os.WriteFile(getConfigFilePath(), []byte(newFile), 0766)

}
