package logger

import "fmt"

type ConsoleLoggerTarget struct {
}

func (t *ConsoleLoggerTarget) Log(text string) {
	fmt.Println(text)
}

func (t *ConsoleLoggerTarget) Init() {
	fmt.Println("Initialized ConsoleLogger")
}
