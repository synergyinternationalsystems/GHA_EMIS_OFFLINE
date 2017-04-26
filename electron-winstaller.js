var electronInstaller = require('electron-winstaller');

console.log("Preparing install package...");

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: '../1.0.9/packaged/GhanaEMIS-win32-x64/',
    outputDirectory: '../1.0.9/el_winstaller/',
    authors: 'Synergy International Systems',
    exe: 'GhanaEMIS.exe',
    skipUpdateIcon: 'true',
    remoteReleases: "https://github.com/haykanushT/GhanaEMIS_Releases"
});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));