const undici = require("undici");
const logger = require("../../structs/logger");

Playlists();

async function Playlists(AuthToken) {
    var res = await undici.fetch("https://fortnite-public-service-prod11.ol.epicgames.com/fortnite/api/calendar/v1/timeline", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${AuthToken}`
        }
    });
    return res.json();
}