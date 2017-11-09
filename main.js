'use strict';

const electron = require('electron');
const PDFWindow = require('electron-pdf-window');
const server = require("./server");
const path = require('path');
const fs = require('fs');
const fsp = require('fs-promise');
const DBInit = require('./database/dbInit.js');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
const logger = require('electron-logger');
const {autoUpdater} = require("electron-updater");
var configFilePath;
global.sharedObject = {db: null, onlineURL: null, logger:null, userDocuments: null, fileSystem: fsp, PDFWindow: PDFWindow, checkForUpdates: null};

app.setName("GhanaEMIS");
app.setPath("userData", app.getPath("appData") + "\\" + app.getName());
autoUpdater.logger = logger;
// autoUpdater.logger.transports.file.level = 'info';


global.sharedObject.logger = logger;

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 700,
        width: 1400,
        icon: path.join(__dirname, 'app/resources/images/logo.ico')
    });

    PDFWindow.addSupport(mainWindow);
    // mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.loadURL(`http://localhost:3333#v${app.getVersion()}`);

    // Initiate %user/AppData/Roaming/applicationSettings folder
    configFilePath = app.getPath("userData");

    // Open the DevTools.
    // mainWindow.webContents.openDevTools(); 

    createConfigFile();
    global.sharedObject.userDocuments = app.getPath("downloads");

    createLogFile().then((result)=>{
        logger.info('App starting...');
    });

    // Connect to DB
    const Promise = require('bluebird');
    const db = require('sqlite');
    let dbPromise = db.open(`${configFilePath}\\ghadb.sqlite`, { Promise });
    return dbPromise.then(result => {
        global.sharedObject.db = db;
        // Initialize DB - if newly installed then run creation script, else run appropriate migration scripts
        const dbInit = new DBInit(configFilePath, db);
        let dbInitPromise = dbInit.initDB();
        logger.info('Checking for updates...');
        // autoUpdater.checkForUpdates();
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
            return fsp.writeFile(settingsFilePath,`{"onlineURL": "http://dad.synisys.com/gha-emis2_de/api/"}`);
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

function createLogFile() {
    let logFilePath = `${configFilePath}\\gha-log.log`;
    return fsp.exists(logFilePath).then(exists => {
        if(!exists) {
            return fsp.writeFile(logFilePath,'');
        }
    }).then(err => {
        if(err){
            console.error("Can't create log file");
        } else {
            logger.setOutput({file:`${app.getPath("userData")}\\gha-log.log`});
        }
    });
}

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

/*=============================== Auto Updater ============================*/

let updater;
// autoUpdater.autoDownload = false;

let INFO_MESSAGE = 'INFO_MESSAGE';
let OK_MESSAGE = 'OK_MESSAGE';
let UPDATE_UNAVAILABLE_MESSAGE = 'UPDATE_NOT_AVAILABLE';
function sendStatusToWindow(text, messageType) {
    logger.info(text);
    mainWindow.webContents.send(messageType, text);
}
autoUpdater.on('checking-for-update', () => {
    sendStatusToWindow('Checking for update...', INFO_MESSAGE);
});
autoUpdater.on('update-available', (ev, info) => {
    sendStatusToWindow('Update available.', INFO_MESSAGE);
});
autoUpdater.on('update-not-available', (ev, info) => {
    sendStatusToWindow('Update not available.', UPDATE_UNAVAILABLE_MESSAGE);
});
autoUpdater.on('error', (ev, err) => {
    sendStatusToWindow('Error in auto-updater.', INFO_MESSAGE);
});
autoUpdater.on('download-progress', (ev, progressObj) => {
    sendStatusToWindow('Download progress...', INFO_MESSAGE);
});
autoUpdater.on('update-downloaded', (ev, info) => {
    sendStatusToWindow('Update downloaded; will install in 5 seconds', INFO_MESSAGE);
});
autoUpdater.on('update-downloaded', (ev, info) => {
    // Wait 5 seconds, then quit and install
    // In your application, you don't need to wait 5 seconds.
    // You could call autoUpdater.quitAndInstall(); immedia`tely
    setTimeout(function() {
        autoUpdater.quitAndInstall();
    }, 5000)
})

function checkForUpdates () {
    autoUpdater.checkForUpdates();
}
// module.exports.checkForUpdates = checkForUpdates;
global.sharedObject.checkForUpdates = checkForUpdates;
/*=============================== /Auto Updater ============================*/


// if(require('electron-squirrel-startup')) return;
//
// /*================================== Handling Squirrel Events ============================*/
// var cp = require('child_process');
// var handleSquirrelEvent = function() {
//     logger1.setOutput({file:`C:\\Users\\haykanush.torchyan\\Desktop\\gha-log1.log`});
//
//     if (process.platform != 'win32') {
//         return false;
//     }
//
//     function executeSquirrelCommand(args, done) {
//         logger1.info("Squirrel preparing to update... !!!!!!!!!!!!!!!");
//         var updateDotExe = path.resolve(path.dirname(process.execPath),
//             '..', 'update.exe');
//         var child = cp.spawn(updateDotExe, args, { detached: true });
//         child.on('close', function(code) {
//             logger1.info("Squirrel successfully updated !!!!!!!!!!!!!!!");
//             done();
//         });
//     };
//
//     function install(done) {
//         var target = path.basename(process.execPath);
//         executeSquirrelCommand(["--createShortcut", target], done);
//     };
//
//     function uninstall(done) {
//         var target = path.basename(process.execPath);
//         executeSquirrelCommand(["--removeShortcut", target], done);
//     };
//
//     var squirrelEvent = process.argv[1];
//     logger1.info("Squirrel event = "+squirrelEvent+" !!!!!!!!!!!!!!!");
//
//     switch (squirrelEvent) {
//         case '--squirrel-firstrun':
//             logger1.info("Squirrel in --squirrel-firstrun !!!!!!!!!!!!!!!");
//             install(app.quit);
//             return true;
//         case '--squirrel-install':
//             logger1.info("Squirrel in --squirrel-install !!!!!!!!!!!!!!!");
//             install(app.quit);
//             return true;
//         case '--squirrel-updated':
//             logger1.info("Squirrel in --squirrel-updated !!!!!!!!!!!!!!!");
//             install(app.quit);
//             return true;
//         case '--squirrel-obsolete':
//             logger1.info("Squirrel in --squirrel-obsolete !!!!!!!!!!!!!!!");
//             app.quit();
//             return true;
//         case '--squirrel-uninstall':
//             logger1.info("Squirrel in --squirrel-uninstall !!!!!!!!!!!!!!!");
//             uninstall(app.quit);
//             return true;
//         return true;
//     }
//
//     return false;
// };
//
// if (handleSquirrelEvent()) {
//     return;
// }
// /*================================== /Handling Squirrel Events ============================*/
