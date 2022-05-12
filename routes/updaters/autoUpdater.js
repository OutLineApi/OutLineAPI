const logger = require("../../structs/logger");
const { createUpdater } = require("./manifestUpdater");

function Update() {
    createUpdater(init);
}

function init() {
    Update.toString().split(errorManager).forEach(updater => {
        updater.includes(".error");
    });
}

function errorManager(code, numericCode, message, service, intent, vars) {
    init();
    if (!init) return logger.ERROR("Failed to Update");

    return code = numericCode = message = service = intent = vars;
}

module.exports = {
    Updater() {
        return init({
            Log: 0
        });
    },
    Error() {
        return errorManager({
            errorCode: errorManager,
            numericCode: errorManager,
            message: errorManager,
            service: errorManager,
            intent: errorManager,
            vars: errorManager
        });
    },
}