import { environment } from "src/environments/environment";
import { LogLevel } from "src/environments/LogLevel";

export default class LoggerService {
    trace(obj: any) {
        if (LogLevel.Trace >= environment.logLevel) {
            console.trace(obj)
        }
    }
    log(obj: any) {
        if (LogLevel.Log >= environment.logLevel) {
            console.log(obj)
        }
    }
    info(obj: any) {
        if (LogLevel.Info >= environment.logLevel) {
            console.info(obj)
        }
    }
    warn(obj: any) {
        if (LogLevel.Warn >= environment.logLevel) {
            console.warn(obj)
        }
    }
    error(obj: any) {
        if (LogLevel.Error >= environment.logLevel) {
            console.error(obj)
        }
    }
}