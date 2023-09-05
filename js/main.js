/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */
  'use strict';

  // Demander la température en °C
  let celcius = prompt('Entrez la température en °C :');
  // Convertir la saisie utilisateur en nombre flottant
  celcius = parseFloat(celcius);
  // Calculer la température en °F
  let fahrenheit = celcius * 9 / 5 + 32;
  // Afficher la température en °F
  alert(`${fahrenheit} °F`);
