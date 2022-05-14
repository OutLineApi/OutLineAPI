const { ipcRenderer, contextBridge, app } = require("electron");
const ipc = ipcRenderer
const api = {
    windows: {
        close: () => ipcRenderer.on("app/close"),
        minimize: () => ipcRenderer.on("app/minimize")
    }
}

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("exit").addEventListener('click', () =>{
        console.log("exit")
        ipc.send('close-app')
       // getWindow().minimize();
    })

    document.getElementById("minimize").addEventListener('click', () =>{
        console.log("min")
        ipc.send('min-app')
       // getWindow().minimize();
    })
    
})

contextBridge.exposeInMainWorld("app", api);


module.exports = application => {
    application.get("/e", (req,res) => {
        res.send("E")
    })
}