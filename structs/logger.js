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
    "WARNING": "WARNING -"
}

module.exports = {
    INFO: message => console.log(`${options.Bright}${options.Cyan}${options.INFO}`, options.Reset,message),
    ERROR: message => console.log(`${options.Bright}${options.Red}${options.ERROR}`, options.Reset, message),
    WARNING: message => console.log(`${options.Bright}${options.Yellow}${options.WARNING}`, options.Reset, message)
}