const { init } = require("express/lib/application");
const { createBuilder, runUpdater } = require("../updaters/manifestUpdater");
const manifestUpdater = require("../updaters/manifestUpdater");

const fs = require("fs");
const logger = require("../../structs/logger");
const Parser = require("../Parser/Parser");

manifestUpdater.createBuilder(init);
manifestUpdater.createUpdater(init);

module.require = Builder => {
    // Manifest Loader / Handler
    function LoadParser() {
        Parser.createParser(Builder, init);
        Parser.BuildParser(Builder, init);
    }
    function Load() {
        fs.readdirSync(`${__dirname}/Manifests`).forEach(manifests => {
            require(`${__dirname}/Manifests/${manifests}.manifest`);
            return logger.INFO("Loaded Manifests");
        });
        Load(init);
        LoadParser(Builder);
        if (Load) {
            Builder.toString().at().split(10).forEach(Build => {
                Build.includes(".manifest").valueOf(10)
            });
        }
        if (!Load) {
            init.toString().at().matchAll().throw((err) => {
                logger.ERROR(err);
            }); // returns an error if it fails to build manifest
        }
    }
}

module.exports = fs => {
    runUpdater(init);
}