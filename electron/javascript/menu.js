const {remote} = require('electron');

document.getElementById('minimize').addEventListener('click', minimizeWindow);
document.getElementById('exit').addEventListener('click', closeWindow);

const getWindow = () => remote.BrowserWindow.getFocusedWindow();

function closeWindow () {
    getWindow().close();
}

function minimizeWindow () {  
    getWindow().minimize();
}