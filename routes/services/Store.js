const undici = require("undici");
const logger = require("../../structs/logger");

Store();

async function Store(AuthToken) {
    var res = await undici.fetch("https://fortnite-public-service-prod11.ol.epicgames.com/fortnite/api/storefront/v2/catalog", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${AuthToken}`
        }
    });
    return res.json();
}