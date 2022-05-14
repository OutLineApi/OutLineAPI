const express = require("express");
const path = require("path")
const logger = require("./structs/logger");
const runner = require("./runner/runner.json");
const application = express();
const { Schema } = require("./data/save.json");

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

// electron
require("./electron/startup")(application);

application.use(function(req, res) {
    res.sendFile(path.join(__dirname+"/electron/web/404/index.html"))
});

// Start the API & Log Builders feel free to change the port
application.listen(8000, () => {
    logger.READY("Ready! Started Running on Port: " + 8000);
    logger.INFO(`Builders: ${runner.Build}`);
    logger.INFO(`Loaded Schema: ${Schema}`)
});