import { DateTime } from "luxon";

// type LogType = "INFO" | "WARN" | "ERROR"

enum LogType {
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR'
}

export default class Console {

    static log(type: LogType, ...m: any[]): void {
        console.log(`[${DateTime.local().toFormat('yyy-MM-dd HH:mm:ss')}]`, `{${type}}`, ...m);
    }

    static info(...m: any[]) {
        this.log(LogType.INFO, ...m)
    }
    static warn(...m: any[]) {
        this.log(LogType.WARN, ...m)
    }
    static error(...m: any[]) {
        this.log(LogType.ERROR, ...m)
    }
}