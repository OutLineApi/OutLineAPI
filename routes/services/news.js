const undici = require("undici");

News();

async function News() {
    var res = await undici.fetch("https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${null}`
        }
    });
    return res.json();
}