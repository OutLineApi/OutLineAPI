const { app, BrowserWindow, Notification, ipcMain, nativeTheme, Menu, MenuItem, shell } = require('electron');
const logger = require('../structs/logger');
const path = require("path");

let ProgressInterval

function createWindow() {
    logger.READY("Electron is Ready!");
    const win = new BrowserWindow({
        width: 1050,
        height: 600,
        frame: false,
        titleBarStyle: "hidden",
        titleBarOverlay: true,
        webPreferences: {
            nodeIntegrationInWorker: true,
            spellcheck: true
        }
    });
    win.loadFile('./electron/index.html');
    win.blurWebView.bind();
    // win.webContents.openDevTools()
    // const INCREMENT = 0.03
    // const INTERVAL_DELAY = 100

    // let c = 0;

    // ProgressInterval = setInterval(() => {
    //     win.setProgressBar(c);
    //     if (c < 2) {
    //         c += INCREMENT
    //     } else {
    //         c = (INCREMENT * 5)
    //     }
    // }, INTERVAL_DELAY);
}

// app.on('before-quit', () => {
//     clearInterval(ProgressInterval)
// });

const menu = new Menu();

if (process.defaultApp) {
    if (process.argv.length >= 2) {
        app.setAsDefaultProtocolClient("electron-fiddle", process.execPath, [path.resolve(process.argv[1])])
    }
} else {
    app.setAsDefaultProtocolClient('electron-fiddle')
}

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
    label: "Window Config",
    submenu: [{
        role: "help",
        accelerator: process.platform === "darwin" ? "Alt+Cmd+I" : "Alt+Shift+I",
        click: () => {
            logger.INFO("Button Pressed!");
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
    new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
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
})