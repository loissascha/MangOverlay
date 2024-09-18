package config

import (
	"testing"
)

func TestAddAndDeleteConfigLine(t *testing.T) {
	hasTestline := checkIfConfigContainsTestlineGo()
	if hasTestline {
		deleteConfigLine("testline_go")
		t.Errorf("testline_go should not exist in config at this point! Try again!")
	}

	// add twice to test if all lines matching this get deleted!
	addConfigLine("testline_go")
	addConfigLine("testline_go")
	hasTestline = checkIfConfigContainsTestlineGo()
	if !hasTestline {
		t.Errorf("AddConfigLine does not work!")
	}

	deleteConfigLine("testline_go")
	hasTestline = checkIfConfigContainsTestlineGo()
	if hasTestline {
		t.Errorf("DeleteConfigLine does not work!")
	}
}

func checkIfConfigContainsTestlineGo() bool {
	cf := getConfigFile()
	hasTestline := false
	for _, v := range cf {
		if v == "testline_go" {
			hasTestline = true
		}
	}
	return hasTestline
}

func TestCheckIfConfigContainsTestlineGo(t *testing.T) {
	deleteConfigLine("testline_go")
	addConfigLine("testline_go")

	if !checkIfConfigContainsTestlineGo() {
		t.Errorf("TestCheckIfConfigContainsTestlineGo: didn't exist!")
	}
	deleteConfigLine("testline_go")
	if checkIfConfigContainsTestlineGo() {
		t.Errorf("TestCheckIfConfigContainsTestlineGo: shouldn't exist!")
	}
}
