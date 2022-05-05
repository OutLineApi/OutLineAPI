const { errorCode } = require("./JWTConfig");
const Builder = require("./Manifests/Builder");
const { createParser, BuildParser } = require("./Parser/Parser");

var unknown = errorCode(404)

function CoreManager(Size, Manager) {
    Size(unknown);
    Manager(PackageManager());

    Builder.call(PackageManager);
}

function PackageManager() {
    createParser(CoreManager);
    BuildParser();
}

module.exports = {
    
}