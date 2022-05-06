const logger = require("../../structs/logger");

function initUpdater() {
}

function errorManager(code, numericCode, message, service, intent, vars) {
}

module.exports = {
    Updater() {
        return initUpdater({
            Log: logger.READY("Updater is Ready!")
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