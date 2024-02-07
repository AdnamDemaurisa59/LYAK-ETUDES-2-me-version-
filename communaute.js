function logout() {
    // Logique de déconnexion ici
    alert("Déconnexion réussie !");
}

document.getElementById('creerGroupeBtn').addEventListener('click', function() {
    // Logique de création de groupe
    var nouveauGroupe = document.createElement('div');
    nouveauGroupe.className = 'groupe';
    
    var nomGroupe = prompt('Entrez le nom du nouveau groupe :');
    var titre = document.createElement('h2');
    titre.textContent = nomGroupe;
    nouveauGroupe.appendChild(titre);
    
    var description = prompt('Entrez la description du nouveau groupe :');
    var paragraphe = document.createElement('p');
    paragraphe.textContent = description;
    nouveauGroupe.appendChild(paragraphe);
    
    document.body.appendChild(nouveauGroupe);
});

function rejoindreGroupe(nomGroupe) {
    // Vous pouvez ajouter ici la logique pour déterminer si le groupe est privé ou public
    var estGroupePrive = /* logique pour déterminer si le groupe est privé */ false;

    // Affiche les détails du groupe
    var detailsGroupe = document.getElementById('groupe-details');
    detailsGroupe.innerHTML = '<h2>' + nomGroupe + '</h2>';
    alert("Ce groupe est privé. Les détails du groupe ne seront visibles que pour les membres autorisés.")
    if (estGroupePrive) {
        detailsGroupe.innerHTML += '<p>Ce groupe est privé. Les détails ne seront visibles que pour les membres autorisés.</p>';
    } else {
        detailsGroupe.innerHTML += '<p>Ce groupe est public. Tout le monde peut voir les détails du groupe.</p>';
    }

    
    // Affiche les détails du groupe
    detailsGroupe.style.display = 'block';
}