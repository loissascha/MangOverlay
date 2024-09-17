package logger

import "fmt"

type Logger struct {
	name        string
	loggerTypes []LoggerTarget
}

type LoggerTarget struct {
	name string
}

func NewLogger(name string) Logger {
	logger := Logger{name: name}
	logger.loggerTypes = []LoggerTarget{}
	logger.Log(fmt.Sprintf("logger %s created", name))
	return logger
}

func NewLoggerTarget(name string) LoggerTarget {
	t := LoggerTarget{name: name}
	return t
}

func (l *Logger) AddLoggerTarget(t LoggerTarget) {
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

func (t *LoggerTarget) Log(text string) {
	if t.name == "console" {
		fmt.Println(text)
	} else if t.name == "sqlite" {
		// TODO: add sqlite
	}
}

func (t *LoggerTarget) SetName(name string) {
	t.name = name
}
