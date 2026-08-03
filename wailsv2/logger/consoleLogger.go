package logger

import "fmt"

type ConsoleLoggerTarget struct {
}

func (t *ConsoleLoggerTarget) Log(text string) {
	fmt.Println(text)
}
