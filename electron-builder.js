"use strict"

const builder = require("electron-builder");
const Platform = builder.Platform;

// Promise is returned
builder.build({
    targets: Platform.WINDOWS.createTarget()
})
    .then(() => {
        console.log("Successfully created the installer!");
    })
    .catch((error) => {
        console.log("Error creating installer with electron-builder: " + error);
    });