const { app, BrowserWindow, ipcMain, nativeTheme, Menu, MenuItem, shell } = require('electron');
const electron = require("electron");
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 1060,
        height: 600,
        frame: true,
        titleBarStyle: "customButtonsOnHover",
        titleBarOverlay: false,
        webPreferences: {
            nodeIntegrationInWorker: true,
            spellcheck: true
        }
    });
    win.loadFile('./src/electron/index.html');
    win.blurWebView.bind();
    win.webContents.debugger.on("message", () => {
    });
}

const menu = new Menu();

app.setUserTasks([
    {
        program: process.execPath,
        arguments: "--new-window",
        iconPath: process.execPath,
        iconIndex: 0,
        title: "New Window!",
        description: "Create A New Window.",
    }
])

menu.append(new MenuItem({
    label: "Config",
    submenu: [{
        role: "Press Me",
        accelerator: process.platform === "darwin" ? "Alt+Cmd+0" : "Alt+0",
        click: () => {
        }
    }]
}));

Menu.setApplicationMenu(menu);;

ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
        nativeTheme.themeSource = 'dark'
    } else {
        nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
});

ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'dark'
});

const NOTIFICATION_TITLE = 'OutLineApi'
const NOTIFICATION_BODY = 'Welcome to OutLine!'

function showNotification() {
    new electron.Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
}

app.whenReady().then(createWindow).then(showNotification)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
});