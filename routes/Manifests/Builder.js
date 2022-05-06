const { init } = require("express/lib/application");
const { createBuilder, runUpdater } = require("../updaters/manifestUpdater");
const manifestUpdater = require("../updaters/manifestUpdater");

const logger = require("../../structs/logger");
const Parser = require("../Parser/Parser");

manifestUpdater.createBuilder(init);
manifestUpdater.createUpdater(init);

Load();
Updater();
LoadParser();

PreLoad();

require("./Manifest")

function Builder() {
    createBuilder;
}

function PreLoad() {
    var PreLoad = [];
    PreLoad == false;
}

// Manifest Loader / Handler
function LoadParser() {
    Parser.createParser;
    Parser.BuildParser;
}
function Load() {
    LoadParser(Builder);
    if (Load) {
        Builder(Build => {
            Build.includes(".json")
        });
    }
    if (!Load) {
        init.toString().at().matchAll().throw((err) => {
            logger.ERROR(err);
        }); // returns an error if it fails to build manifest
    }
}

function Updater() {
    runUpdater(Load)
}