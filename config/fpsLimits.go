package config

import "strings"

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
