// exercice 1
const temp_celsius = 25;
const temp_fahrenheit = (temp_celsius * 9/5) + 32;

document.getElementById("resultat1").textContent = 'Température en celsius : ' + temp_celsius + '°C Température en fahrenheit : ' + temp_fahrenheit + '°F';

// exercice 2
const long = 5;
const larg = 5;
const aire = long*larg

document.getElementById("resultat2").textContent = "l'aire d'un rectange de longueur " + long + " et de largeur " + larg + " est de " + aire;

// exercice 3
const prenom = "billy";
const nom = "bob";
const nom_prenom = prenom + " " + nom;

document.getElementById("resultat3").textContent = "la personne s'appelle " + nom_prenom;

// exercice 4
const montantHT = 10;
const TVA = 0.2;
const montantTTC = montantHT * (1+TVA);

document.getElementById("resultat4").textContent = "le montant après taxe de 10euros et de " + montantTTC + "euros";