const config = require("../../config.json");
const error = require("../errorManager");

module.exports = application => {
    application.all(`${config.endpointStart}/displayName/:displayName`, (req, res) => {
        res.json({
            displayName: req.params.displayName
        })
    });
    application.all(`${config.endpointStart}/email/:email`, (req, res) => {
        res.json({
            email: req.params.email
        })
    });
    application.all(`${config.endpointStart}/*/token/*`, (req, res) => {
        if (req.method != "POST") return res.status(405).send("com.epicgames.account.public")
        var grab = req.body.grant_type
        var user
        var clientId

        try {
            clientId = Buffer.from(req.headers.authorization.split(" ")[1], "base64").toString().split(":")[0]
        } catch {
            return res.status(400).json(error.createError(
                "errors.com.epicgames.common.oauth.invalid_client", 1011,
				"It appears that your Authorization header may be invalid or not present, please verify that you are sending the correct headers.",
				"com.epicgames.account.public", "prod", []
            ))
        }
        if (grab == "client_credentials") {
            var token = jwt.Client(clientId)
        }
    });
}