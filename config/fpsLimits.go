package config

import (
	"strings"
)

var FPSLimits []string

func initFpsLimits() {
	FPSLimits = []string{}
}

func addFpsLimitsFromConfig(r string) {
	if strings.Contains(r, ",") {
		split := strings.Split(r, ",")
		for _, s := range split {
			FPSLimits = append(FPSLimits, s)
		}
	} else {
		FPSLimits = append(FPSLimits, r)
	}
}

func (c *Config) GetFPSLimits() []string {
	return FPSLimits
}

func (c *Config) AddFPSLimit(amount string) {
	FPSLimits = append(FPSLimits, amount)
	saveFpsLimits()
}

func (c *Config) UpdateFPSLimit(index int, amount string) {
	FPSLimits[index] = amount
	saveFpsLimits()
}

func (c *Config) RemoveFPSLimit(index int) {
	newFpsLimits := []string{}
	for i, fps := range FPSLimits {
		if i == index {
			continue
		}
		newFpsLimits = append(newFpsLimits, fps)
	}
	FPSLimits = newFpsLimits
	saveFpsLimits()
}

func (c *Config) ReorderFPSLimit(firstIndex int, secondIndex int) {
	var firstElement string
	var secondElement string
	for i, fps := range FPSLimits {
		if i == firstIndex {
			firstElement = fps
		} else if i == secondIndex {
			secondElement = fps
		}
	}
	if firstElement == "" || secondElement == "" {
		Logger.Log("can't reorder fps limits, one of the indexes does not exist!")
	}
	FPSLimits[firstIndex] = secondElement
	FPSLimits[secondIndex] = firstElement
	saveFpsLimits()
}

func saveFpsLimits() {
	newVal := ""
	for _, fps := range FPSLimits {
		if newVal != "" {
			newVal += ","
		}
		newVal += fps
	}

	if newVal == "" {
		deleteConfigLine("fps_limit")
		return
	}
	updateConfigLine("fps_limit", newVal, true)
}
