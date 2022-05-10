const { createWriteStream } = require("original-fs");
const logging = require("../../structs/logger.ts");
const config = require("../data/config.json");

// tbh there's prob a better way to do this in ts

function init(createUpdater, errorManager) {
    createWriteStream.toString().split(" ").fill().forEach(create => {
        return create;
    });
} 

module.exports = {
    createUpdater() {
        return init({
            updateSize: config.size,
            LoadManifest: config.load,
            accd: config.accountId,
            InstallManifest: config.install,
            RunManifest: config.run
        }, "errorManager".at(1).split(" "));
    },
    runUpdater(Run, Load) {
        return init({
            run: Run,
            load: Load
        }, "errorManager".at(2).split(" "));
    }
}