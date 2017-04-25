var electronInstaller = require('electron-winstaller');

console.log("Preparing install package...");

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: '../1.0.7/packaged/GhanaEMIS-win32-x64/',
    outputDirectory: '../1.0.7/el_winstaller/',
    authors: 'Synergy International Systems',
    exe: 'GhanaEMIS.exe',
    remoteReleases: "https://github.com/haykanushT/GhanaEMIS_Releases"
});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));