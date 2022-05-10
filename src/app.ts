const express = require("express");

const logger = require("./structs/logger.ts");

const server = express();

require("./electron/startup.ts");

server.listen(8080, () => {
    logger.INFO("Running on port: " + 8080);
});