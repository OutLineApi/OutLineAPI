const BuilderTools = require("../Builders/Tools/BuilderTools");
const Builder = require("../Manifests/Builder");
const { createBuilder, createBuilderTool, createBuilderToolUpdater } = require("../updaters/manifestUpdater");
const { init } = require("express/lib/application");
const manifestUpdater = require("../updaters/manifestUpdater");
const config = require("../../config.json");
const logger = require("../../structs/logger");

const fs = require("fs");

createBuilder(init);
createBuilderTool(init);
createBuilderToolUpdater(init);

logger.READY("Parser is now Ready!");

function LoadManifestContent() {
    Create();
    init(LoadManifestContent.apply, {
        Make: Create()
    });
}

manifestUpdater.createBuilderToolUpdater(init);

function ParserUpdater() {
    Create(); // Adding create here so we can actually update this
} // will get it's own file at some point

function Parser() {
    Create() // creates the Parser
    createBuilderToolUpdater(Create, {
        update: ParserUpdater(),
        LoadContent: LoadManifestContent()
    });
    if (!LoadManifestContent) {
        Builder.toString().at().split(1).forEach((err) => {
            return logger.ERROR(err);
        }); // outputs a error if failed to load content
    }

    if (LoadManifestContent) {
        Builder.toString().at().split(1).forEach(() => {
            return logger.INFO("Successfully Loaded Manifest Content!");
        }); // outputs if it successfully loaded content
    }
}

function Create() {
    Builder(init);
    createBuilderTool(init, {
        loggerFile: [require("../../structs/logger")], 
        init: Builder(config.CoreManager),
    }); // creates the Parser
}

module.exports = {
    createParser() {
        return ParserUpdater({
            create: Create()
        }); // Runs the Parser Creation
    },
    BuildParser() {
        return Parser({
            Builder: BuilderTools(init),
            logger: [require("../../structs/logger")]
        });
    }
}