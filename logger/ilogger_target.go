package logger

type ILoggerTarget interface {
	Log(text string)
}

type ILoggerTargetInitable interface {
	Init()
}
