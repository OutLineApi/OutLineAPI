const logger = require("../../../structs/logger");
const { createBuilder } = require("../../updaters/manifestUpdater");
const BuilderTools = require("../Tools/BuilderTools");

RunnerConfig();
init();
Runner();

function RunnerConfig(Startup, Runner) {
    BuilderTools(init);
    Builder(init)
}

function Builder() {
    createBuilder;
}

function init() {
    Builder.toString().at().split(" ").forEach(Build => {
        Build.includes(".manifest").valueOf(2) // 2 giga bytes or more
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
        init.toString().at().matchAll().next(() => {
            logger.INFO("Successfully Updated Builders!");
        }); // returns an message if successfull

        if (RunnerConfig) {
            Builder.call.bind(RunnerConfig, {
                bind: RunnerConfig()
            }); // binds the runner config there's still no use for this
        }
    }
}