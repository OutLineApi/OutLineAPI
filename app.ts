const express = require("express");

const logger = require("./structs/logger.ts");

const server = express();

// electron
require("./electron/startup.ts");

// manifestUpdater
require("./routes/Updaters/manifestUpdater.ts");

server.listen(8080, () => {
    logger.INFO("Running on port: " + 8080);
});