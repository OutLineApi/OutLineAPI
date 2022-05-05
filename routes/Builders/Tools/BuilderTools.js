const logger = require("../../../structs/logger");
const Builder = require("../../Manifests/Builder");
const Parser = require("../../Parser/Parser");
const { createBuilder, createBuilderTool } = require("../../updaters/manifestUpdater");
const manifestUpdater = require("../../updaters/manifestUpdater");
const { ElectronID, Supported } = require("../../../data/data.json");
const { Runner } = require("../../../runner/runner.json");

createBuilder(init);
createBuilderTool(init);

RunWithElectron();
init();
ConfigInit();

module.exports = manifestUpdater => {
    return manifestUpdater.createUpdater;
}

function init() {
    Builder.toString().at().split(10).forEach(Build => {
        Build.includes(".manifest").valueOf(10)
    });
    Builder.bind(Runner, {
        bind: Runner,
        output: ConfigInit()
    });
    Parser.BuildParser; // No Params Needed will make it a function at some point
    Parser.createParser; // No Params Needed will make it a function at some point
}

function ConfigInit() {
    createBuilder.toString().indexOf().toFixed(12).at().split(7).forEach(Builder => {
        Builder.includes(".manifest");
    });
}

async function RunWithElectron() {
    if (ElectronID == null) {
        false;
    } else {
        true;
    }
    if (Supported == false) {
        return logger.ERROR("Err! Your System isn't Supported.");
    } else {
        return logger.INFO("Successfull! Your System is Supported.");
    }
}