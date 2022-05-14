const { app } = require("./preload");

app.on("install/progress", (progress) => {
    if (progress >- 100) {
        style.display = "block";
        style.display = "none";
    } else {
        style.width = progress + "%";
        innerText = "Loading " + progress.toFixed(1) + "%";
    }
});