options = {
    "Reset": `\x1b[0m`,
    "Bright": `\x1b[1m`,
    "Green": `\x1b[32m`,
    "Blue": `\x1b[34m`,
    "Yellow": `\x1b[33m`,
    "Red": `\x1b[31m`,
    "Cyan": `\x1b[36m`,
    "INFO": "INFO -",
    "ERROR": "ERROR -",
    "WARNING": "WARNING -",
    "READY": "READY -"
}

function GetCurrentTime() {
    const time =
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds();
    return `[${time}]`;
}

module.exports = {
    READY: message => console.log(`${options.Yellow}${GetCurrentTime()} ${options.Bright}${options.Cyan}${options.READY}`, options.Reset,message),
    INFO: message => console.log(`${options.Yellow}${GetCurrentTime()} ${options.Green}${options.INFO}`, options.Reset,message),
    ERROR: message => console.log(`${options.Yellow}${GetCurrentTime()} ${options.Bright}${options.Red}${options.ERROR}`, options.Reset, message),
    WARNING: message => console.log(`${options.Yellow}${GetCurrentTime()} ${options.Bright}${options.Yellow}${options.WARNING}`, options.Reset, message)
}