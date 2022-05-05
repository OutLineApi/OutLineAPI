// This will tell you when fortnite servers go down and go up

const config = require("../../config.json");

module.exports = application => {
    application.get(`${config.endpointStart}/status`, (req, res) => {
        res.json([{
            "serviceInstanceId": "fortnite",
            "status": "UP",
            "message": "Fortnite is online",
            "maintenanceUri": "argon-xmpp.herokuapp.com", // why not lmao
            "overrideCatalogIds": [
                "a7f138b2e51945ffbfdacc1af0541053"
            ],
            "allowedActions": [
                "PLAY",
                "DOWNLOAD"
            ],
            "banned": false,
            "launcherInfoDTO": {
                "appName": "Fortnite",
                "catalogItemId": "4fe75bbc5a674f4f9b356b5c90567da5",
                "namespace": "fn"
            }
        }])
    })
}