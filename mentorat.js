function demanderConsultation(session) {
    // Afficher le formulaire de demande de consultation
    document.getElementById('consultationForm').style.display = 'block';

    // Pré-remplir le champ de session dans le formulaire
    document.getElementById('nom').value = session;
}

