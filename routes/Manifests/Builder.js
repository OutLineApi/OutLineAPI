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

function Builder() {
    createBuilder;
}

// Manifest Loader / Handler
function LoadParser() {
    Parser.createParser;
    Parser.BuildParser;
}
function Load() {
    // fs.readdirSync(`${__dirname}/Manifests`).forEach(manifests => {
    //     require(`./Manifests/${manifests}`);
    // }); // FUCK THIS TO MUCH PAINIINININININIININ
    // Load(init);
    LoadParser(Builder);
    if (Load) {
        Builder(Build => {
            Build.includes(".manifest")
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