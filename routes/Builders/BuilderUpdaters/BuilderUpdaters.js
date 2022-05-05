const logger = require("../../../structs/logger");
const Builder = require("../../Manifests/Builder");
const BuilderTools = require("../Tools/BuilderTools");

function RunnerConfig(Startup, Runner) {
    BuilderTools(init);
    Builder(init)
}

function init() {
    Builder.toString().at().split(10).forEach(Build => {
        Build.includes(".manifest").valueOf(10)
    });
    Builder.bind(Runner, {
        bind: Runner()
    });
}

function Runner() {
    if (!Runner) {
        init.toString().at().matchAll().throw((err) => {
            logger.ERROR(err);
        }); // returns an error if it fails to run
    }
    if (Runner) {
        init.toString().at().matchAll().return(() => {
            logger.INFO("Successfully Updated Builders!");
        }); // returns an message if successfull

        if (RunnerConfig) {
            Builder.call.bind(RunnerConfig, {
                bind: RunnerConfig()
            }); // binds the runner config there's still no use for this
        }
    }
}