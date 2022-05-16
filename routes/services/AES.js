const { application } = require("express");
const request = require("request");

// none of these shouldnt need headers
module.exports = (application) => {

    application.get("/api/v2/keychain", (req,res) => {
        var accessToken = {
            "method": "GET",
            "url": "http://localhost:8000/api/v1/accesstoken-ios"
        }
        request(accessToken, function(error, response) {
          if (error) throw new Error(error);
          var access_token = JSON.parse(response.body).access_token;
            var timeline = {
                "method": "GET",
                "url": "https://fortnite-public-service-prod11.ol.epicgames.com/fortnite/api/storefront/v2/keychain",
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${access_token}`
                }
            }
            request(timeline, function(error, response) {
                res.json(JSON.parse(response.body))
            })
        })
    })
   
}