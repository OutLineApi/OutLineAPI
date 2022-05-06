const express = require("express");
const logger = require("./structs/logger");
const runner = require("./runner/runner.json");
const application = express();

// API Imports
require("./routes/services/Store");
require("./routes/services/news");
require("./routes/services/playlists");

// Parser
require("./routes/Parser/Parser");

// auto updater
require("./routes/updaters/autoUpdater").Error();
require("./routes/updaters/autoUpdater").Updater();
require("./routes/updaters/autoUpdater");

// builder
require("./routes/Manifests/Builder");

// manifestUpdater
require("./routes/updaters/manifestUpdater");

// Builder Tools
require("./routes/Builders/Tools/BuilderTools");

// Builder Updaters
require("./routes/Builders/BuilderUpdaters/BuilderUpdaters");

// updateCheck
require("./routes/updateCheck");

// electron
require("./electron/startup");

application.listen(8000, () => {
    logger.READY("Ready! Started Running on Port: " + 8000);
    logger.INFO(`Builders: ${runner.Build}`)
});