package logger

import "fmt"

type MysqlLoggerTarget struct {
	ConnectionString string
	LoggingTable     string `default:"logs"`
}

func (t *MysqlLoggerTarget) Log(text string) {
	// TODO: add mysql logging
}

func (t *MysqlLoggerTarget) Init() {
	fmt.Println("Initialized MysqlLogger")
}

// TODO: add database creation and all that stuff
