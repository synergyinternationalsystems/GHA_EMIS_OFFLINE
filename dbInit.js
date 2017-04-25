/**
 * Created by haykanush.torchyan on 2/17/2017.
 */
const logger = require('electron-logger');
const fsp = require('fs-promise');
const creation_script = require('./database/ghadb_creation_script.js');

class DBInit {

    constructor(userDataPath, db) {
        this.userDataPath = userDataPath;
        this.db = db;
    }

    initDB() {
        return this.checkIsNewlyInstalled().then(isNew => {
            if(isNew){
                return this.runCreationScript();
            } else {
                return this.runMigrationScript();
            }
        }, rejectionReason => {
            return Promise.reject(rejectionReason);
        });
    }

    checkIsNewlyInstalled() {
        let testSelect = "SELECT name FROM sqlite_master WHERE type='table' AND name='UserData'";
        return this.db.get(testSelect).then(result => {
            if(result) {
                return Promise.resolve(false); //no, db is not new, the creation script has been run previously
            } else {
                return Promise.resolve(true); //yes, db is new
            }
        }, rejectionReason => {
            logger.error("Checking isNew DB script rejected, reason: " + reason);
            return Promise.reject(rejectionReason);
        });
    }

    runCreationScript() {
        let creationScript;
        // return fsp.readFile("database/ghadb_creation_script.txt", 'utf-8').then(data => {
        //     creationScript = data;
            return this.db.exec(creation_script).then(result => {
                logger.info("Creation script successfully run!");
                return Promise.resolve();
            }, rejectionReason => {
                logger.error("Running creation script rejected, reason: " + reason);
                return Promise.reject(rejectionReason);
            }).catch(reason => {
                logger.error("Error executing creation script: " + reason);
            });
        // });
    }

    runMigrationScript() {
        // let creationScript;
        // return fsp.readFile("database/ghadb_creation_script.txt", 'utf-8').then(data => {
        //     creationScript = data;
        //     return this.db.exec(creationScript).then(result => {
        //         return Promise.resolve();
        //     }, rejectionReason => {
        //         return Promise.reject(rejectionReason);
        //     });
        // });
    }
}
module.exports = DBInit;