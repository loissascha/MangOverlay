package logger

import "fmt"

type FileLoggerTarget struct {
}

func (t *FileLoggerTarget) Log(text string) {
	fmt.Println(text)
}

func (t *FileLoggerTarget) Init() {
	fmt.Println("Init file logger")
}
