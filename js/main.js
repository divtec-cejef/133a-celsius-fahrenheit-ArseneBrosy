/**
 * Conversion de degrés Celsius en Farenheit
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict';

  // Récupération des éléments HTML à manipuler
  const formulaire = document.querySelector('form');
  const txtCelcius = document.getElementById('celsius');
  const strongFahrenheit = document.getElementById('fahrenheit');
  const ulHistorique = document.getElementById('historique');

  /**
   * Ecoute l'événement submit du formulaire
   *  - Récupère la valeur saisie par l'utilisateur
   *
   *  - Test si la valeur est un nombre valide
   *    - Si pas valide
   *      - Affiche un message d'erreur dans une alerte
   *      - Vide la zone de résultat
   *    - Si valide
   *      - Calcule la températeur en Farenheit
   *      - Affiche le résultat
   *      - Ajoute les données dans l'historique
   *
   *  - Vide le champ de texte celsius
   *  - Mets le focus au champ texte celsius
   *
   */
  formulaire.addEventListener('submit', function (event) {
    event.preventDefault();

    let tempCelcius = parseFloat(txtCelcius.value);
    let tempFahrenheit = '';

    if(txtCelcius.value.length < 1 || isNaN(txtCelcius.value)) {

      strongFahrenheit.innerHTML =  '';
      alert('Entrer un température valide !');

    } else {

      tempFahrenheit = tempCelcius * 9 / 5 + 32;

      strongFahrenheit.innerHTML =  tempFahrenheit + '°F';

      ulHistorique.innerHTML +=
        `<li>
            ${tempCelcius}°C = ${tempFahrenheit}°F
        </li>`;
    }

    txtCelcius.value = '';
    txtCelcius.focus();
  });

  /**
   * Ecoute l'événement rest du formulaire
   *  - Vide l'historique
   *  - Vide le champ texte celsius
   *  - Mets le focus au champ texte celsuis
   */
  formulaire.addEventListener('reset', function (event) {
    event.preventDefault();

    ulHistorique.innerHTML = '';
    strongFahrenheit.innerHTML = '';
    txtCelcius.value = '';
    txtCelcius.focus();
  });

  /**
   * Ecout les événements claviers du champ texte celcius
   *  - Reset le formulaire quand la touche Escape est relachée
   */
  txtCelcius.addEventListener('keyup', function(event) {
    if (event.key === 'Escape') {
      formulaire.reset();
    }
  });
}()); // Main IIFE
