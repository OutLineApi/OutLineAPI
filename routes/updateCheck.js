const logger = require("../structs/logger");

UpdateCheck();

// this will be changed soon I was to lazy to do a advanced one
function UpdateCheck() {
    var Endpoint = "/fortnite/api/public/update/:check";
    if (Endpoint == true) {
        logger.INFO("new fortnite build Detcted!");
    } else {
        logger.INFO("No New Fortnite Builds!");
    }
}