'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

// Codes des touches du clavier.
const SPACE_KEY= 'Space';
const LEFT_ARROW_KEY = 'ArrowLeft';
const RIGHT_ARROW_KEY = 'ArrowRight';

// La liste des slides du carrousel.

const slides =
[
    { image: '', legend: '' },
    { image: '', legend: ' ' },
    { image: '', legend: ' ' },
    { image: '', legend: ' ' },
    { image: '', legend: ' '  },
    { image: '', legend: ' '  }
    { image: '', legend: ' '  }
];



// Objet contenant l'état du carrousel.
let state;


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/


function onSliderGoToNext()
{
    // Passage à la slide suivante.
    state.index++;

    // Est-ce qu'on est arrivé à la fin de la liste des slides ?
    if(state.index == slides.length)
    {
        // Oui, on revient au début (le carrousel est circulaire).
        state.index = 0;
    }

    // Mise à jour de l'affichage.
    refreshSlider();
}

function onSliderGoToPrevious()
{
    // Passage à la slide précédente.
    state.index--;

    // Est-ce qu'on est revenu au début de la liste des slides ?
    if(state.index < 0) {

        // Oui, on revient à la fin (le carrousel est circulaire).
        state.index = slides.length - 1;
    }

    // Mise à jour de l'affichage.
    refreshSlider();
}

function onSliderGoToRandom()
{
    let index;

    do
    {
        /*
         * Récupération d'un numéro de slide aléatoire différent
         * du numéro de slide actuel.
         */
        index = getRandomInteger(0, slides.length - 1);
    }
    while(index == state.index);

    // Passage à une slide aléatoire.
    state.index = index;

    // Mise à jour de l'affichage.
    refreshSlider();
}

/*
 * Quand on créé un gestionnaire d'évènements, le navigateur appelle la
 * fonction en fournissant un argument event représentant l'évènement lui-même.
 *
 * Si le gestionnaire d'évènements n'a pas besoin de cet argument,
 * inutile de le déclarer !
 *
 * Mais ici on va en avoir besoin...
 */
function onSliderKeyUp(event)
{
    /*
     * Les gestionnaires d'évènements d'appui sur une touche (évènements
     * keydown, keyup, keypress) contiennent une propriété keyCode dans l'objet
     * event représentant le code de la touche du clavier.
     *
     * Il existe de très nombreux codes, plus ou moins standards, voir la page :
     * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
     */

    switch(event.code)
    {
        case RIGHT_ARROW_KEY:
        // On passe à la slide suivante.
        onSliderGoToNext();
        break;

        case SPACE_KEY:
        // On démarre ou on arrête le carrousel.
        onSliderToggle();
        break;

        case LEFT_ARROW_KEY:
        // On passe à la slide précédente.
        onSliderGoToPrevious();
        break;
    }
}

function onSliderToggle()
{
    // Modification de l'icône du bouton pour démarrer ou arrêter le carrousel.
    const icon = document.querySelector('#slider-toggle i');

    icon.classList.toggle('fa-play');
    icon.classList.toggle('fa-pause');

    // Est-ce que le carousel est démarré ?
    if(state.timer == null) {

        // Non, démarrage du carousel, toutes les deux secondes.
        state.timer = window.setInterval(onSliderGoToNext, 2000);

        /*
         * Modification du libellé du bouton en mode "OFF".
         *
         * La variable spéciale this est automatiquement initialisée par le
         * navigateur avec l'objet DOM qui a déclenché l'évènement.
         *
         * C'est le bouton "Démarrer/Arrêter le carrousel" qui a déclenché
         * l'évènement, donc la variable spéciale this vaut la même chose
         * que l'objet renvoyé par document.querySelector('#js-slider-toggle');
         */
        this.title = 'Arrêter le carrousel';
    }
    else {
        // Oui, arrêt du carousel.
        window.clearInterval(state.timer);

        // Réinitialisation de la propriété pour le prochain clic sur le bouton.
        state.timer = null;

        /*
         * Modification du libellé du bouton en mode "ON".
         *
         * La variable spéciale this est automatiquement initialisée par le
         * navigateur avec l'objet DOM qui a déclenché l'évènement.
         *
         * C'est le bouton "Démarrer/Arrêter le carrousel" qui a déclenché
         * l'évènement, donc la variable spéciale this vaut la même chose
         * que l'objet renvoyé par document.querySelector('#js-slider-toggle');
         */
        this.title = 'Démarrer le carrousel';
    }
}

function onToolbarToggle()
{
    // Modification de l'icône du lien pour afficher ou cacher la barre d'outils.
    const icon = document.querySelector('#toolbar-toggle i');

    icon.classList.toggle('fa-arrow-down');
    icon.classList.toggle('fa-arrow-right');

    /*
     *  Les deux lignes de code ci-dessus sont équivalentes à :
     *
     *
     *  if(icon.classList.contains('fa-arrow-right') == true)
     *  {
     *      icon.classList.remove('fa-arrow-right');
     *      icon.classList.add('fa-arrow-down');
     *  }
     *  else
     *  {
     *      icon.classList.add('fa-arrow-right');
     *      icon.classList.remove('fa-arrow-down');
     *  }
     */

    // Affiche ou cache la barre d'outils.
    document.querySelector('.toolbar ul').classList.toggle('hide');
}

function refreshSlider()
{
    // Recherche des balises de contenu du carrousel.
    const sliderImage  = document.querySelector('#slider img');
    const sliderLegend = document.querySelector('#slider figcaption');

    // Changement de la source de l'image et du texte de la légende du carrousel.
    sliderImage.src          = slides[state.index].image;
    sliderLegend.textContent = slides[state.index].legend;
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/


/*
 * Installation d'un gestionnaire d'évènement déclenché quand l'arbre DOM sera
 * totalement construit par le navigateur.
 *
 * Le gestionnaire d'évènement est une fonction anonyme que l'on donne en deuxième
 * argument directement à document.addEventListener().
 */
//document.addEventListener('DOMContentLoaded', function() {

    // Initialisation du carrousel.
    state       = {};
    state.index = 0;                   // On commence à la première slide
    state.timer = null;                // Le carrousel est arrêté au démarrage


    // Installation des gestionnaires d'évènement.
    installEventHandler('#slider-random', 'click', onSliderGoToRandom);
    installEventHandler('#slider-previous', 'click', onSliderGoToPrevious);
    installEventHandler('#slider-next', 'click', onSliderGoToNext);
    installEventHandler('#slider-toggle', 'click', onSliderToggle);
    installEventHandler('#toolbar-toggle', 'click', onToolbarToggle);

    /*
     * L'évènement d'appui sur une touche doit être installé sur l'ensemble de la
     * page, on ne recherche pas une balise en particulier dans l'arbre DOM.
     *
     * L'ensemble de la page c'est la balise <html> et donc la variable document.
     */
    document.addEventListener('keyup', onSliderKeyUp);
    // Equivalent à installEventHandler('html', 'keyup', onSliderKeyUp);


    // Affichage initial.
    refreshSlider();
//});

function getRandomInteger(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function installEventHandler(selector, type, eventHandler)
{
    // Récupération du premier objet DOM correspondant au sélecteur.
    const domObject = document.querySelector(selector);

    // Installation d'un gestionnaire d'évènement sur cet objet DOM.
    domObject.addEventListener(type, eventHandler);
}