/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.2
 * @since   2019-08-19
 */
'use strict'; // Demande un interprétation stricte du code

let celsius = parseInt(prompt("Température en celsius"));
if (isNaN(celsius)) {
  alert("Entrez un nombre");
} else {
  let fahrenheit = celsius * 9 / 5 + 32;
  alert(`${celsius}°C = ${fahrenheit}°F`);
}