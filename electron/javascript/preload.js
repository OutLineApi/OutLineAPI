const { ipcRenderer, contextBridge } = require("electron");

const api = {
    on: (msg, cb) => ipcRenderer.on(msg, (_, data) => {
        cb(data);
    }),
    windows: {
        close: () => ipcRenderer.on("app/close"),
        minimize: () => ipcRenderer.on("app/minimize")
    }
}

contextBridge.exposeInMainWorld("app", api);