package config

import (
	"fmt"
	"os"
	"strings"
)

func (c *Config) SetRoundedCorners(n bool) {
	c.RoundCorners = n
	if n {
		updateConfigLine("round_corners", "10", true)
	} else {
		updateConfigLine("round_corners", "0", true)
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
		org := v
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
			newFile += org + "\n"
			continue
		}
		nv := strings.TrimSpace(v)
		if nv == n {
			continue
		}
		newFile += org + "\n"
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

func updateConfigLine(c string, n string, addIfMissing bool) {
	cf := getConfigFile()
	newFile := ""
	lineFound := false
	for _, v := range cf {
		org := v
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
			newFile += org + "\n"
			continue
		}
		newFile += org + "\n"
	}
	if !lineFound && addIfMissing {
		newFile += c + "=" + n
	}
	os.WriteFile(getConfigFilePath(), []byte(newFile), 0766)

}
