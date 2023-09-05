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

// ajouter la fonction convertir au boutton
document.querySelector("#button-convert").addEventListener("click", convert);

// ajouter la fonction reinitialiser au boutton
document.querySelector("#button-reinit").addEventListener("click", reinit);

// ajouter les 2 fonctions au touches du clavier
document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    convert();
  }
  if (e.code === "Escape") {
    reinit();
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
  document.querySelector("#result").innerHTML = `${fahrenheit}°F`;

  // inscrire le résultat dans l'historique
  document.querySelector("#history-list").innerHTML += `<li>${celsius}°C = ${fahrenheit}°F</li>`;

  // vider l'input
  document.querySelector("#input-celsius").value = "";
}

function reinit() {
  // vider l'input
  document.querySelector("#input-celsius").value = "";

  // vider le résultat
  document.querySelector("#result").innerHTML = "";

  // vider l'historique
  document.querySelector("#history-list").innerHTML = "";
}
