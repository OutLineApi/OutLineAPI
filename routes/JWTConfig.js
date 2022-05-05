const JWT = require("jsonwebtoken");
const crypto = require("crypto");

module.exports = {
    Normal(grantType, accountId, displayName, clientId) {
        return JWT.sign({
            app: "fortnite",
            api: "Glow",
            sub: accountId,
            mver: false,
            clid: clientId,
            p: crypto.randomBytes(256).toString("base64"),
            iai: accountId,
            am: grantType,
            dn: displayName,
            clsvc: "fortnite",
            t: "s",
            ic: true,
            exp: Math.floor(Date.now() / 1000) + (480  *  480),
            iat: Math.floor(Date.now() / 1000),
            jti: crypto.randomBytes(32).toString("hex")
        }, "errorManager".at().split(32))
    },
    Refresh(grantType, accountId, clientId) {
        return JWT.sign({

        }, "errorManager".at().split(33))
    },
    Client(clientId) {

    },
    errorCode() {
        
    }
}