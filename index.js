const express = require("express");
const path = require("path")
const logger = require("./structs/logger");
const runner = require("./runner/runner.json");
const application = express();
const { Schema } = require("./data/save.json");

class API {
    constructor() {
        this.express = express;
        this.path = path;
        this.logger = logger;
        this.runner = runner;
        this.application = application;
        this.Schema = Schema;

        this.application.listen(8000, () => {
            logger.READY("Started running on port : " + 8000);
            logger.INFO(`Builders: ${runner.Build}`);
            logger.INFO(`Loaded Schema: ${Schema}`)
        });

        // this.application.use(function (req, res) {
        //     res.sendFile(path.join(__dirname + "/electron/web/404/index.html"))
        // });

        require("./routes/services/Store")(application);
        require("./routes/services/AES")(application);
        require("./routes/services/news")(application);
        require("./routes/services/playlists")(application);
        require("./routes/services/status")(application);
        require("./routes/services/access-token")(application);
        require("./routes/Parser/Parser");
        require("./routes/updaters/autoUpdater").Error();
        require("./routes/updaters/autoUpdater").Updater();
        require("./routes/updaters/autoUpdater");
        require("./routes/Manifests/Builder");
        require("./routes/updaters/manifestUpdater");
        require("./routes/Builders/Tools/BuilderTools");
        require("./routes/Builders/BuilderUpdaters/BuilderUpdaters");
        require("./electron/startup")(application, path);
    }
}

let api;
api = new API();