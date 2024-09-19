package config

import (
	"strings"
)

type FPSLimit struct {
	amount string
}

var FPSLimits []FPSLimit

func initFpsLimits() {
	FPSLimits = []FPSLimit{}
}

func addFpsLimitsFromConfig(r string) {
	if strings.Contains(r, ",") {
		split := strings.Split(r, ",")
		for _, s := range split {
			FPSLimits = append(FPSLimits, FPSLimit{amount: s})
		}
	} else {
		FPSLimits = append(FPSLimits, FPSLimit{amount: r})
	}
}

func (c *Config) GetFPSLimits() []FPSLimit {
	return FPSLimits
}

func (c *Config) AddFPSLimit(amount string) {
	FPSLimits = append(FPSLimits, FPSLimit{amount: amount})
	saveFpsLimits()
}

func (c *Config) RemoveFPSLimit(index int) {
	newFpsLimits := []FPSLimit{}
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
			firstElement = fps.amount
		} else if i == secondIndex {
			secondElement = fps.amount
		}
	}
	if firstElement == "" || secondElement == "" {
		Logger.Log("can't reorder fps limits, one of the indexes does not exist!")
	}
	for i, fps := range FPSLimits {
		if i == firstIndex {
			fps.amount = secondElement
		} else if i == secondIndex {
			fps.amount = firstElement
		}
	}
	saveFpsLimits()
}

func saveFpsLimits() {
	newVal := ""
	for _, fps := range FPSLimits {
		if newVal != "" {
			newVal += ","
		}
		newVal += fps.amount
	}

	if newVal == "" {
		deleteConfigLine("fps_limit")
		return
	}
	updateConfigLine("fps_limit", newVal, true)
}
