const { app, BrowserWindow, Notification, ipcMain, nativeTheme, Menu, MenuItem } = require('electron');
const logger = require('../structs/logger');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('./electron/index.html')
}

function 

const menu = new Menu();

menu.append(new MenuItem({
    label: "Window Config",
    submenu: [{
        role: "help",
        accelerator: process.platform === "darwin" ? "Alt+Cmd+I" : "Alt+Shift+I",
        click: () => {
            logger.INFO("HAHA YES");
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