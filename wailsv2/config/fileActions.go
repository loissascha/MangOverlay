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
			if !strings.Contains(n, "=") {
				if cmd == n {
					continue
				}
			} else {
				if v == n {
					continue
				}
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
	ReloadConfig()
}

func addConfigLine(n string) int {
	Logger.Log(fmt.Sprintf("addConfigLine: %s", n))
	cf := getConfigFile()
	newFile := ""
	hasConfigLine := false
	onLine := 1
	for _, v := range cf {
		if strings.Contains(v, "#") {
			before, _, _ := strings.Cut(v, "#")
			if strings.TrimSpace(before) == n {
				hasConfigLine = true
			}
		}
		newFile += v + "\n"
		onLine++
	}
	if !hasConfigLine {
		newFile += n
	}
	os.WriteFile(getConfigFilePath(), []byte(newFile), 0766)
	return onLine
}

func placeConfigLineUnderneathOther(toMove string, underneath string) {
	Logger.Log(fmt.Sprintf("placeConfigLineUnderneathOther: put %s underneath %s", toMove, underneath))
	cf := getConfigFile()
	newFile := ""

	toMoveLine := ""
	for _, v := range cf {
		noSpace := strings.TrimSpace(v)

		if strings.Contains(noSpace, "=") {
			cmd, _, _ := strings.Cut(noSpace, "=")
			if strings.Contains(toMove, "=") {
				if noSpace == toMove {
					toMoveLine = v
				}
			} else {
				if cmd == toMove {
					toMoveLine = v
				}
			}
			continue
		}

		if noSpace == toMove {
			toMoveLine = v
		}
	}

	for _, v := range cf {
		noSpace := strings.TrimSpace(v)

		if strings.Contains(noSpace, "=") {
			cmd, _, _ := strings.Cut(noSpace, "=")
			if strings.Contains(underneath, "=") {
				if noSpace == underneath {
					newFile += v + "\n" + toMoveLine + "\n"
					continue
				}
			} else {
				if cmd == underneath {
					newFile += v + "\n" + toMoveLine + "\n"
					continue
				}
			}
			if strings.Contains(toMove, "=") { // dont show original
				if noSpace == toMove {
					continue
				}
			} else {
				if cmd == toMove {
					continue
				}
			}
			newFile += v + "\n"
			continue
		}

		if noSpace == underneath {
			newFile += v + "\n" + toMoveLine + "\n"
			continue
		}
		if noSpace == toMove {
			continue
		}

		newFile += v + "\n"
	}
	os.WriteFile(getConfigFilePath(), []byte(newFile), 0766)
}

func replaceConfigLines(first string, second string) {
	Logger.Log(fmt.Sprintf("replaceConfigLines: %s with %s", first, second))
	cf := getConfigFile()
	newFile := ""

	firstLine := ""
	secondLine := ""
	for _, v := range cf {
		noSpace := strings.TrimSpace(v)

		if strings.Contains(noSpace, "=") {
			cmd, _, _ := strings.Cut(noSpace, "=")
			if strings.Contains(first, "=") {
				if noSpace == first {
					firstLine = noSpace
				}
			} else {
				if cmd == first {
					firstLine = noSpace
				}
			}
			if strings.Contains(second, "=") {
				if noSpace == second {
					secondLine = noSpace
				}
			} else {
				if cmd == second {
					secondLine = noSpace
				}
			}
			continue
		}

		if noSpace == first {
			firstLine = noSpace
		}
		if noSpace == second {
			secondLine = noSpace
		}
	}

	for _, v := range cf {
		noSpace := strings.TrimSpace(v)

		// containing =
		if strings.Contains(noSpace, "=") {
			cmd, _, _ := strings.Cut(noSpace, "=")
			if strings.Contains(first, "=") {
				if noSpace == first {
					newFile += secondLine + "\n"
					continue
				}
			} else {
				if cmd == first {
					newFile += secondLine + "\n"
					continue
				}
			}
			if strings.Contains(second, "=") {
				if noSpace == second {
					newFile += firstLine + "\n"
					continue
				}
			} else {
				if cmd == second {
					newFile += firstLine + "\n"
					continue
				}
			}
			newFile += v + "\n"
			continue
		}

		if noSpace == first {
			newFile += secondLine + "\n"
			continue
		}
		if noSpace == second {
			newFile += firstLine + "\n"
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
