package config

import (
	"fmt"
	"os"
	"strings"
)

func deleteConfigLine(n string) {
	Logger.Log(fmt.Sprintf("deleteConfigLine: %s", n))
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
	Logger.Log(fmt.Sprintf("addConfigLine: %s", n))
	cf := getConfigFile()
	newFile := ""
	hasConfigLine := false
	for _, v := range cf {
		if strings.Contains(v, "#") {
			before, _, _ := strings.Cut(v, "#")
			if strings.TrimSpace(before) == n {
				hasConfigLine = true
			}
		}
		newFile += v + "\n"
	}
	if !hasConfigLine {
		newFile += n
	}
	os.WriteFile(getConfigFilePath(), []byte(newFile), 0766)
}

func replaceConfigLines(first string, second string) {
	Logger.Log(fmt.Sprintf("replaceConfigLines: %s with %s", first, second))
	cf := getConfigFile()
	newFile := ""
	for _, v := range cf {
		noSpace := strings.TrimSpace(v)
		if noSpace == first {
			newFile += second + "\n"
			continue
		}
		if noSpace == second {
			newFile += first + "\n"
			continue
		}
		newFile += v + "\n"
	}
	os.WriteFile(getConfigFilePath(), []byte(newFile), 0766)
}

func getConfigLine(cmd string) (args string, exists bool) {
	cf := getConfigFile()
	for _, v := range cf {
		if strings.Contains(v, "#") {
			before, _, _ := strings.Cut(v, "#")
			v = before
		}

		if strings.Contains(v, "=") {
			c, a, _ := strings.Cut(v, "=")
			c = strings.TrimSpace(c)
			a = strings.TrimSpace(a)
			if cmd == c {
				return a, true
			}
		}
	}
	return "", false
}

func updateConfigLine(c string, n string, addIfMissing bool) {
	Logger.Log(fmt.Sprintf("updateConfigLine: %s=%s", c, n))
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
