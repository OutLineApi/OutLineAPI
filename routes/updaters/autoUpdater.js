const logger = require("../../structs/logger");

function initUpdater() {
}

function errorManager(code, numericCode, message, service, intent, vars) {
}

module.exports = {
    Updater() {
        return initUpdater({

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