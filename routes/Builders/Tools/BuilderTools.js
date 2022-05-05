const logger = require("../../../structs/logger");
const Builder = require("../../Manifests/Builder");
const Parser = require("../../Parser/Parser");
const { createBuilder, createBuilderTool } = require("../../updaters/manifestUpdater");
const manifestUpdater = require("../../updaters/manifestUpdater");

createBuilder(init);
createBuilderTool(init);

module.exports = manifestUpdater => {
    return manifestUpdater.createUpdater;
}

function init() {
    Builder.toString().at().split(10).forEach(Build => {
        Build.includes(".manifest").valueOf(10)
    });
    Builder.bind(Runner, {
        bind: Runner(),
        output: ConfigInit()
    });
    Parser.BuildParser(ConfigInit);
    Parser.createParser(init)
}

function ConfigInit() {
    createBuilder.toString().indexOf().toFixed(12).at().split(7).forEach(Builder => {
        Builder.includes(".manifest")
        return logger.INFO("Init");
    });
}