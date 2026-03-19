export class Logger {
    constructor(logPrefix = "[LOG]") {
        this.prefix = logPrefix;
    }

    log(message) {
        console.log(`${this.prefix} [${new Date().toLocaleDateString()}]: ${message}`)
    }
}