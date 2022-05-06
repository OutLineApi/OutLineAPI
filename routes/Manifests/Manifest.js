const { INFO, ERROR } = require("../../structs/logger");
const { createBuilder, runUpdater } = require("../updaters/manifestUpdater");

Update();
Start();
LoadManifest();

PulledManifest();

function Update() {
    runUpdater(LoadManifest);
}

function Start() {
    createBuilder; // creates the builder
}

function LoadManifest() {
    Start(File);
    var File = require("./Manifests/manifest.json");
}

function PulledManifest() {
    var File = require("./Manifests/manifest.json");
    if (!File) {
        return ERROR("Failed to Pull Manifest.");
    } else {
        INFO("Successfully Pulled Manifest.");
    }
}