
// Fonction appelée lorsqu'on clique sur le bouton "Envoyer"
function submitSurvey() {
    // Collecte des données du sondage
    var formData = new FormData(document.getElementById('surveyForm'));
    
    // Exemple : Affiche les données du sondage dans la console
    formData.forEach((value, key) => {
        console.log(key, value);
    });

    // TODO : Ajouter la logique pour envoyer les données du sondage au serveur ou effectuer d'autres actions.
    alert("Sondage soumis avec succès !");
}