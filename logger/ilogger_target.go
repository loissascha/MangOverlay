package logger

type ILoggerTarget interface {
	Log(text string)
	Init()
}
