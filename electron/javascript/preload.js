const { ipcRenderer, contextBridge } = require("electron");

const api = {
    windows: {
        close: () => ipcRenderer.on("app/close"),
        minimize: () => ipcRenderer.on("app/minimize")
    }
}

contextBridge.exposeInMainWorld("app", api);