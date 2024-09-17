package config

import (
	"testing"
)

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
