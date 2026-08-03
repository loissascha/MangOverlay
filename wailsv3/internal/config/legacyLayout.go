package config

import "os"

func addLegacyLayoutStartLine() {
	cf := getConfigFile()
	newFile := ""
	newFile += "legacy_layout=false\n\n"
	for _, v := range cf {
		newFile += v + "\n"
	}
	os.WriteFile(getConfigFilePath(), []byte(newFile), 0766)
}
