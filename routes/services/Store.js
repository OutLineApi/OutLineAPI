const { application } = require("express");
const request = require("request");

module.exports = (application) => {
    application.get("/api/storefront/catalog", async (req,res) => {
        request("https://fortnite-public-service-prod11.ol.epicgames.com/fortnite/api/storefront/v2/catalog", function(error, response) {
            res.json(JSON.parse(response.body, null, 2));
        })
    })

      application.get("/api/v1/store", async (req,res) => {
        request("https://fortnite-public-service-prod11.ol.epicgames.com/fortnite/api/storefront/v2/catalog", function(error, response) {
            res.json(JSON.parse(response.body, null, 2));
        })
    })
}
