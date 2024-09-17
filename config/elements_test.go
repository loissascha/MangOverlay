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

func TestActivateElement(t *testing.T) {
	config := Config{}

	GPUElementsAvailable = []Element{
		{Name: "test_gpu", Active: false},
	}
	CPUElementsAvailable = []Element{
		{Name: "test_cpu", Active: false},
	}
	MemoryElementsAvailable = []Element{
		{Name: "test_memory", Active: false},
	}
	ExtraElementsAvailable = []Element{
		{Name: "test_extra", Active: false},
	}

	config.ActivateElement("test_gpu")
	config.ActivateElement("test_cpu")
	config.ActivateElement("test_memory")
	config.ActivateElement("test_extra")

	if !GPUElementsAvailable[0].Active {
		t.Errorf("GPU Element not activated!")
	}
	if !CPUElementsAvailable[0].Active {
		t.Errorf("CPU Element not activated!")
	}
	if !MemoryElementsAvailable[0].Active {
		t.Errorf("Memory Element not activated!")
	}
	if !ExtraElementsAvailable[0].Active {
		t.Errorf("Extra Element not activated!")
	}

}

func TestDeactivateElement(t *testing.T) {
	config := Config{}

	GPUElementsAvailable = []Element{
		{Name: "test_gpu", Active: true},
	}
	CPUElementsAvailable = []Element{
		{Name: "test_cpu", Active: true},
	}
	MemoryElementsAvailable = []Element{
		{Name: "test_memory", Active: true},
	}
	ExtraElementsAvailable = []Element{
		{Name: "test_extra", Active: true},
	}

	config.DeactivateElement("test_gpu")
	config.DeactivateElement("test_cpu")
	config.DeactivateElement("test_memory")
	config.DeactivateElement("test_extra")

	if GPUElementsAvailable[0].Active {
		t.Errorf("GPU Element not deactivated!")
	}
	if CPUElementsAvailable[0].Active {
		t.Errorf("CPU Element not deactivated!")
	}
	if MemoryElementsAvailable[0].Active {
		t.Errorf("Memory Element not deactivated!")
	}
	if ExtraElementsAvailable[0].Active {
		t.Errorf("Extra Element not deactivated!")
	}

}
