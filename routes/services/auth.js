module.exports = application => {
    application.all("/fortnite/public/api/code", (req, res) => {
        var code = req.params.code;
        res.json("com.epicgames.fortnite://fnauth/?code", {
            code: code
        });
    });
}