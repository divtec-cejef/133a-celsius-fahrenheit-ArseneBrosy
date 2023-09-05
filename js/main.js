/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Arsène Brosy
 * @version 0.3
 * @since   2019-08-19
 */
'use strict'; // Demande un interprétation stricte du code

/*let celsius = parseFloat(prompt("Température en celsius"));
if (isNaN(celsius)) {
  alert("Entrez un nombre");
} else {
  let fahrenheit = celsius * 9 / 5 + 32;
  alert(`${celsius}°C = ${fahrenheit}°F`);
}*/

document.querySelector("#button-convert").addEventListener("click", convert);
document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    convert();
  }
})

function convert() {
  // récuperer la valeur de l'input
  let celsius = parseFloat(document.querySelector("#input-celsius").value);

  // verifier que c'est un nombre
  if (isNaN(celsius)) {
    alert("Entrez un nombre");
    return;
  }

  // convertir en fahrenheit et l'afficher
  let fahrenheit = celsius * 9 / 5 + 32;
  document.querySelector("#result").innerHTML = "${fahrenheit}°F";

  // inscrire le résultat dans l'historique
  document.querySelector("#history-list").innerHTML += "<li>${celsius}°C = ${fahrenheit}°F</li>";
}