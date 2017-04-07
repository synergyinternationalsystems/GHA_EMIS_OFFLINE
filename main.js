'use strict';

const electron = require('electron');
const PDFWindow = require('electron-pdf-window');
const server = require("./server");
const path = require('path');
const fs = require('fs');
const fsp = require('fs-promise');
const DBInit = require('./dbInit.js');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
const logger = require('electron-logger');
var configFilePath;
global.sharedObject = {db: null, onlineURL: null, logger:null, userDocuments: null, fileSystem: fsp, PDFWindow: PDFWindow};

if(require('electron-squirrel-startup')) return;

/*================================== Handling Squirrel Events ============================*/
var cp = require('child_process');
var handleSquirrelEvent = function() {

    if (process.platform != 'win32') {
        return false;
    }

    function executeSquirrelCommand(args, done) {
        var updateDotExe = path.resolve(path.dirname(process.execPath),
            '..', 'update.exe');
        var child = cp.spawn(updateDotExe, args, { detached: true });
        child.on('close', function(code) {
            done();
        });
    };

    function install(done) {
        var target = path.basename(process.execPath);
        executeSquirrelCommand(["--createShortcut", target], done);
    };

    function uninstall(done) {
        var target = path.basename(process.execPath);
        executeSquirrelCommand(["--removeShortcut", target], done);
    };

    var squirrelEvent = process.argv[1];

    switch (squirrelEvent) {
        case '--squirrel-install':
            install(app.quit);
            return true;
        case '--squirrel-updated':
            install(app.quit);
            return true;
        case '--squirrel-obsolete':
            app.quit();
            return true;
        case '--squirrel-uninstall':
            uninstall(app.quit);
            return true;
        default:
            logger1.info("Squirrel in default !!!!!!!!!!!!!!!");
            install(function(){});
        return true;
    }

    return false;
};

if (handleSquirrelEvent()) {
    return;
}
/*================================== /Handling Squirrel Events ============================*/


var mainWindow = null;

app.on('will-finish-launching', function() {
    app.setName("GhanaEMIS");
    app.setPath("userData", app.getPath("appData") + "\\" + app.getName());
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 700,
        width: 1400,
        icon: path.join(__dirname, 'app/resources/images/logo.ico')
    });

    PDFWindow.addSupport(mainWindow);
    // mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.loadURL(`http://localhost:3333`);

    // Initiate %user/AppData/Roaming/applicationSettings folder
    configFilePath = app.getPath("userData");
    logger.setOutput({file:`${configFilePath}\\gha-log.log`});
    global.sharedObject.logger = logger;

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    createConfigFile();
    global.sharedObject.userDocuments = app.getPath("downloads");

    // Connect to DB
    const Promise = require('bluebird');
    const db = require('sqlite');
    let dbPromise = db.open(`${configFilePath}\\ghadb.sqlite`, { Promise });
    return dbPromise.then(result => {
        global.sharedObject.db = db;
        // Initialize DB - if newly installed then run creation script, else run appropriate migration scripts
        const dbInit = new DBInit(configFilePath, db);
        let dbInitPromise = dbInit.initDB();
        if(!dbInitPromise){
            return;
        } else {
            return dbInitPromise.then(data => {
                return Promise.resolve();
            });
        }
    });

});

function createConfigFile() {
    let settingsFilePath = `${configFilePath}\\gha-settings.xml`;
    return fsp.exists(settingsFilePath).then(exists => {
        if(!exists) {
            return fsp.writeFile(settingsFilePath,`{"onlineURL": "http://sis2s014:8801/gha-emis-de/api/"}`);
        }
    }).then(err => {
        if(err){
            logger.error("Can't write to settings file");
        } else {
            return fsp.readFile(settingsFilePath).then((data) => {
                if(!data){
                    logger.error("Can't read settings file: ");
                } else {
                    global.sharedObject.onlineURL = JSON.parse(data)["onlineURL"];
                }
            });
        }
    });
}

app.on('login', (event, webContents, request, authInfo, callback) => {
    event.preventDefault();
    callback(authInfo, 'secret');
});

app.on('browser-window-created',function(e,window) {
    window.setMenu(null);
});
// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

// function setGlobalShortcuts() {
//     globalShortcut.unregisterAll();
//
//     var shortcutKeysSetting = configuration.readSettings('shortcutKeys');
//     var shortcutPrefix = shortcutKeysSetting.length === 0 ? '' : shortcutKeysSetting.join('+') + '+';
//
//     globalShortcut.register(shortcutPrefix + '1', function () {
//         mainWindow.webContents.send('global-shortcut', 0);
//     });
//     globalShortcut.register(shortcutPrefix + '2', function () {
//         mainWindow.webContents.send('global-shortcut', 1);
//     });
// }

// var ipc = require('ipc');
//
// ipc.on('close-main-window', function () {
//     app.quit();
// });

// var settingsWindow = null;

// ipc.on('open-settings-window', function () {
//     if (settingsWindow) {
//         return;
//     }
//
//     settingsWindow = new BrowserWindow({
//         frame: false,
//         height: 200,
//         resizable: false,
//         width: 200
//     });
//
//     settingsWindow.loadUrl('file://' + __dirname + '/app/settings.html');
//
//     settingsWindow.on('closed', function () {
//         settingsWindow = null;
//     });
// });
//
// ipc.on('close-settings-window', function () {
//     if (settingsWindow) {
//         settingsWindow.close();
//     }
// });
//
// ipc.on('set-global-shortcuts', function () {
//     setGlobalShortcuts();
// });
