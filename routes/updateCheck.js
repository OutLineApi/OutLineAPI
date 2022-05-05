const express = require("express");
const logger = require("../structs/logger");
const application = express.Router();

function UpdateCheck() {
    var Endpoint = "/fortnite/api/public/update/:check";
}

var Update = UpdateCheck(() => {
    logger.INFO("[DETECT] new fortnite build Detcted!");
});

Update;

module.exports = application;