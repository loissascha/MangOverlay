package config

import (
	"testing"
)

func TestReplaceElements(t *testing.T) {
	config := Config{}
	GPUElementsAvailable = []Element{
		{Name: "test_gpu", Active: false, Index: 15},
	}
	ExtraElementsAvailable = []Element{
		{Name: "test_extra", Active: false, Index: 22},
	}

	firstIndex := getElementIndex("test_gpu")
	secondIndex := getElementIndex("test_extra")

	if firstIndex != 15 {
		t.Errorf("First Index Wrong 1")
	}
	if secondIndex != 22 {
		t.Errorf("Second Index Wrong 1")
	}

	config.ReplaceElements("test_gpu", "test_extra")

	firstIndex = getElementIndex("test_gpu")
	secondIndex = getElementIndex("test_extra")

	if firstIndex != 22 {
		t.Errorf("First Index Wrong 2")
	}
	if secondIndex != 15 {
		t.Errorf("Second Index Wrong 2")
	}
}

func TestGetElementIndex(t *testing.T) {
	GPUElementsAvailable = []Element{
		{Name: "test_gpu", Active: false, Index: 15},
	}
	CPUElementsAvailable = []Element{
		{Name: "test_cpu", Active: false, Index: 11},
	}
	MemoryElementsAvailable = []Element{
		{Name: "test_memory", Active: false, Index: 99},
	}
	ExtraElementsAvailable = []Element{
		{Name: "test_extra", Active: false, Index: 3393},
	}

	gpuindex := getElementIndex("test_gpu")
	cpuindex := getElementIndex("test_cpu")
	memoryindex := getElementIndex("test_memory")
	extraindex := getElementIndex("test_extra")

	if gpuindex != 15 {
		t.Errorf("GPU Index wrong!")
	}
	if cpuindex != 11 {
		t.Errorf("CPU Index wrong!")
	}
	if memoryindex != 99 {
		t.Errorf("Memory Index wrong!")
	}
	if extraindex != 3393 {
		t.Errorf("Extra Index wrong!")
	}
}
