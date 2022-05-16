// This will tell you when fortnite servers go down and go up

const config = require("../../config.json");
const request = require("request");
module.exports = (application) => {
    application.get(`/api/v1/status`, (req, res) => {
        var authRequest = {
            'method': 'GET',
            'url': 'http://localhost:8000/api/v1/accesstoken',
        };
        request(authRequest, function (error, response) {
            if (error) throw new Error(error);
            var access_token = JSON.parse(response.body).access_token;
            var authRequest2 = {//request variable
                'method': 'GET',//you need to send a post request for a auth code
                'url': 'https://lightswitch-public-service-prod.ol.epicgames.com/lightswitch/api/service/fortnite/status',//just the url
                'headers': {
                    'Authorization': 'bearer ' + access_token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                form2: {//request body-     

                }
            };
            request(authRequest2, function (error, response) {
                res.json(JSON.parse(response.body))
            })
        })
    })
}