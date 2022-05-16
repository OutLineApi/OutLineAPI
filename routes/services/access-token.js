const request = require("request");

// none of these shouldnt need headers
module.exports = (application) => {
    // Access Token
    application.get("/api/v1/accesstoken", async (req, res) => {
        var grab = {
            'method': 'POST',
            'url': 'https://account-public-service-prod.ol.epicgames.com/account/api/oauth/token',
            'headers': {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'basic ZWM2ODRiOGM2ODdmNDc5ZmFkZWEzY2IyYWQ4M2Y1YzY6ZTFmMzFjMjExZjI4NDEzMTg2MjYyZDM3YTEzZmM4NGQ='
            },
            form: {
                'grant_type': 'client_credentials'
            }
        };
        request(grab, function (error, response) {
            res.json(JSON.parse(response.body, null, 2));
        })
    })

    application.get("/api/v1/accesstoken-ios", async (req, res) => {
        var grab = {
            'method': 'POST',
            'url': 'https://account-public-service-prod.ol.epicgames.com/account/api/oauth/token',
            'headers': {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'basic MzQ0NmNkNzI2OTRjNGE0NDg1ZDgxYjc3YWRiYjIxNDE6OTIwOWQ0YTVlMjVhNDU3ZmI5YjA3NDg5ZDMxM2I0MWE='
            },
            form: {
                'grant_type': 'client_credentials'
            }
        };
        request(grab, function (error, response) {
            res.json(JSON.parse(response.body, null, 2));
        })
    })
}
