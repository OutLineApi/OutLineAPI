const { app, BrowserWindow, Notification, ipcMain, nativeTheme, Menu, MenuItem, shell } = require('electron');
const express = require("express")
const logger = require('../structs/logger');
const path = require("path");
const ipc = ipcMain

class Startup {
    constructor() {
        this.app = app;
        this.BrowserWindow = BrowserWindow;
        this.Notification = Notification;
        this.ipcMain = ipcMain;
        this.nativeTheme = nativeTheme;
        this.Menu = Menu;
        this.MenuItem = MenuItem;
        this.shell = shell;

        const createWindow = () => {
            logger.READY("Electron is running.");
            const win = new this.BrowserWindow({
                width: 1060,
                height: 600,
                frame: false,
                titleBarStyle: "customButtonsOnHover",
                titleBarOverlay: true,
                webPreferences: {
                    enableRemoteModule: true,
                    nodeIntegration: false,
                    spellcheck: true,
                    preload: (__dirname + "/javascript/preload.js"),
                    devTools: true
                }
            });
            win.loadFile('./electron/web/index.html');
            win.loadURL("http://localhost:8000/")
            win.blurWebView.bind();
            win.webContents.openDevTools()
            win.webContents.debugger.on("message", () => {
                logger.INFO("Debugging is Enabled!!");
            });
            ipc.on('close-app', () => {
                win.close();
            });
            ipc.on('min-app', () => {
                win.minimize();
            });
        }

        const menu = new this.Menu();
        this.menu = menu;

        if (process.defaultApp) {
            if (process.argv.length >= 2) {
                this.app.setAsDefaultProtocolClient("electron-fiddle", process.execPath, [path.resolve(process.argv[1])])
            }
        } else {
            this.app.setAsDefaultProtocolClient('electron-fiddle')
        }

        this.app.setUserTasks([
            {
                program: process.execPath,
                arguments: "--new-window",
                iconPath: process.execPath,
                iconIndex: 0,
                title: "New Window!",
                description: "Create A New Window.",
            }
        ])

        this.menu.append(new MenuItem({
            label: "Config",
            submenu: [{
                role: "Press Me",
                accelerator: process.platform === "darwin" ? "Alt+Cmd+0" : "Alt+0",
                click: () => {
                    logger.INFO("Button Pressed!");
                }
            }]
        }));
        this.Menu.setApplicationMenu(menu);;

        this.ipcMain.handle('dark-mode:toggle', () => {
            if (nativeTheme.shouldUseDarkColors) {
                nativeTheme.themeSource = 'dark'
            } else {
                nativeTheme.themeSource = 'dark'
            }
            return nativeTheme.shouldUseDarkColors
        });

        this.ipcMain.handle('dark-mode:system', () => {
            nativeTheme.themeSource = 'dark'
        });

        const NOTIFICATION_TITLE = 'OutLineApi'
        const NOTIFICATION_BODY = 'Welcome to OutLine!'

        const showNotification = () => {
            new this.Notification({
                title: NOTIFICATION_TITLE,
                body: NOTIFICATION_BODY
            })
        }

        this.app.whenReady().then(createWindow).then(showNotification)

        this.app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit()
            }
        })

        this.app.on('activate', () => {
            if (this.BrowserWindow.getAllWindows().length === 0) {
                createWindow()
            }
        })
    }
}

let startup;
startup = new Startup();

module.exports = (application, path) => {
    application.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + "/web/html/home.html"))
    })

    application.get("/AES", (req, res) => {
        res.sendFile(path.join(__dirname + "/web/html/aes.html"))
    })

    application.get("/playlist", (req, res) => {
        res.sendFile(path.join(__dirname + "/web/html/playlist.html"))
    })

    application.get("/shop", (req, res) => {
        res.sendFile(path.join(__dirname + "/web/html/shop.html"))
    })

    application.get("/news", (req, res) => {
        res.sendFile(path.join(__dirname + "/web/html/news.html"))
    })

    application.get("/status", (req, res) => {
        res.sendFile(path.join(__dirname + "/web/html/status.html"))
    })


    application.use("/css", express.static(__dirname + "/web/css"))
}