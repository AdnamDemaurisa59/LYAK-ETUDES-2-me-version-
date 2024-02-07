function ajouterEtudiant() {
    var nomEtudiantInput = document.getElementById("nom-etudiant");
    var listeEtudiants = document.getElementById("liste-etudiants");

    var nomEtudiant = nomEtudiantInput.value.trim();
    if (nomEtudiant !== "") {
        var nouvelEtudiant = document.createElement("li");
        nouvelEtudiant.textContent = nomEtudiant;
        listeEtudiants.appendChild(nouvelEtudiant);

        // Effacer le champ de saisie après l'ajout de l'étudiant
        nomEtudiantInput.value = "";
    }
}


function envoyerMessage() {
    var messageInput = document.getElementById("message-input");
    var messagesContainer = document.getElementById("messages-container");

    var message = messageInput.value.trim();
    if (message !== "") {
        var nouveauMessage = document.createElement("p");
        nouveauMessage.textContent = message;
        messagesContainer.appendChild(nouveauMessage);

        // Effacer le champ de saisie après l'envoi du message
        messageInput.value = "";
    }
}
