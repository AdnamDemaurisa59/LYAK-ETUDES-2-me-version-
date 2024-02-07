// server.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Client connecté');

    // Vous pouvez ajouter des logiques de suivi en temps réel ici
    // par exemple, envoyer des mises à jour aux clients lorsqu'une candidature est soumise.
});

server.listen(3000, () => {
    console.log('Serveur écoutant sur le port 3000');
});

    // Mettez à jour l'interface utilisateur avec les données en temps réel

// client.js
const socket = io.connect('http://localhost:3000');

socket.on('update', (data) => {
    const updatesContainer = document.getElementById('updates-container');
    const newUpdate = document.createElement('div');
    newUpdate.className = 'update';
    newUpdate.innerHTML = `<p>${data.message}</p>`;
    updatesContainer.appendChild(newUpdate);
    console.log('Mise à jour en temps réel:', data);

});