const { application } = require("express");
const request = require("request");

// none of these shouldnt need headers
module.exports = (application) => {
    // br news
    application.get("/api/v1/news/br", async (req,res) => {
        request("https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game/battleroyalenews", function(error, response) {
            res.json(JSON.parse(response.body, null, 2));
        })
    })


     // Fortnite-Game
      application.get("/api/v1/news", async (req,res) => {
        request("https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game", function(error, response) {
            res.json(JSON.parse(response.body, null, 2));
        })
    })
}
