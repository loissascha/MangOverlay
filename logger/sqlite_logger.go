package logger

import "fmt"

type SqliteLoggerTarget struct {
}

func (t *SqliteLoggerTarget) Log(text string) {
	// TODO: add sqlite
}

func (t *SqliteLoggerTarget) Init() {
	fmt.Println("Initialized SqliteLogger")
}
