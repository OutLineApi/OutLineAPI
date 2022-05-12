const undici = require("undici");

AES();

async function AES(AuthToken) {
    var res = await undici.fetch("https://fortnite-public-service-prod11.ol.epicgames.com/fortnite/api/storefront/v2/keychain", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${AuthToken}`
        }
    });
    return res.json();
}