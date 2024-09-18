package logger

import "fmt"

type Logger struct {
	name        string
	loggerTypes []ILoggerTarget
}

type ILoggerTarget interface {
	Log(text string)
}

type ConsoleLoggerTarget struct {
}

type SqliteLoggerTarget struct {
}

func NewLogger(name string) Logger {
	logger := Logger{name: name}
	logger.loggerTypes = []ILoggerTarget{}
	logger.Log(fmt.Sprintf("logger %s created", name))
	return logger
}

func (l *Logger) AddLoggerTarget(t ILoggerTarget) {
	l.loggerTypes = append(l.loggerTypes, t)
}

func (l *Logger) Log(text string) {
	for _, v := range l.loggerTypes {
		v.Log(fmt.Sprintf("%s: %s", l.name, text))
	}
}

func (l *Logger) Panic(text string) {
	for _, v := range l.loggerTypes {
		v.Log(fmt.Sprintf("%s SYSTEM PANIC: %s", l.name, text))
	}
	panic(text)
}

func (t *ConsoleLoggerTarget) Log(text string) {
	fmt.Println(text)
}
func (t *SqliteLoggerTarget) Log(text string) {
	// TODO: add sqlite
}
