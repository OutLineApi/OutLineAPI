const express = require("express");
const logger = require("./structs/logger");
const runner = require("./.config/runner.json");
const Parser = require("./routes/Parser/Parser");
const application = express();

require("./routes/updateCheck");
require("./routes/services/api")(application);
require("./routes/services/auth")(application);
require("./routes/services/accountId")(application);
require("./routes/services/status")(application);

// Parser
require("./routes/Parser/Parser");

// auto updater
require("./routes/updaters/autoUpdater").Error();
require("./routes/updaters/autoUpdater").Updater();

// builder
require("./routes/Manifests/Builder");

// electron
require("./electron/startup");

application.listen(8000, () => {
    logger.INFO("port: " + 8000);
    logger.INFO(`Builders: ${runner.Builder}`)
});