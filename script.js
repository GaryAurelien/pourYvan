/*// Recuperation des valeur des imput est on les stoque dans LocalStorage

function result() {
  let nameProduct = document.getElementById("nameProduct").value;
  let quantity = document.getElementById("quantity").value;
  let prixProduct = document.getElementById("prixProduct").value;
  let pourcentage = document.getElementById("pourcentage").value;

  sessionStorage.setItem("Nom", nameProduct);
  sessionStorage.setItem("Quantité", quantity);
  sessionStorage.setItem("Prix", prixProduct);
  sessionStorage.setItem("Pourcentage", pourcentage);
}

///////////////////////////////////////////////////////////////////////////////

//recuparetion des valeur dans LocalStorage

let getNameProduct = sessionStorage.getItem("Nom");
let getQuantity = sessionStorage.getItem("Quantité");
let getPrixProduct = sessionStorage.getItem("Prix");
let getPourcentage = sessionStorage.getItem("Pourcentage");
console.log(getNameProduct, getQuantity, getPrixProduct, getPourcentage);

///////////////////////////////////////////////////////////////////////////////

// la fonction qui va calculer le prix en fonction des quantité
let PrixTotalSansPourcentage = getPrixProduct * getQuantity;

// calculer le prix en fonction des quantité et du pourcentage de reduction
let PrixTotalAvecPourcentage1 = PrixTotalSansPourcentage * getPourcentage;
let PrixTotalAvecPourcentage2 = PrixTotalAvecPourcentage1 / 100;
let PrixTotalAvecPourcentage3 =
  PrixTotalSansPourcentage - PrixTotalAvecPourcentage2;

///////////////////////////////////////////////////////////////////////////////

if (getPourcentage == 0 || null) {
  let affichageConclusion = (document.getElementById(
    "messageDeValidation"
  ).innerHTML = `<h1>Résultat</h1>
  <h2>Tu a commander ${getQuantity} ${getNameProduct} pour ${PrixTotalSansPourcentage}€</h2>
  `);
} else {
  let affichageConclusion = (document.getElementById(
    "messageDeValidation"
  ).innerHTML = `<h1>Résultat</h1>
  <h2>Tu a commander ${getQuantity} ${getNameProduct} pour ${PrixTotalAvecPourcentage3}€ car tu avais ${getPourcentage}% de remise</h2>
  `);
}

*/

document.getElementById("nameProduct").addEventListener("change", nameArticle);

function nameArticle() {
  let nameArticle = document.getElementById("nameProduct").value.toLowerCase();

  if (nameArticle == "banane") {
    document.getElementById("prixProduct").innerHTML = 5;
    document.getElementById("prixProduct").value = 5;
  } else if (nameArticle == "pomme") {
    document.getElementById("prixProduct").innerHTML = 10;
    document.getElementById("prixProduct").value = 10;
  } else if (nameArticle == "poire") {
    document.getElementById("prixProduct").innerHTML = 15;
    document.getElementById("prixProduct").value = 15;
  } else if (nameArticle == "") {
    document.getElementById("prixProduct").innerHTML = "";
    document.getElementById("prixProduct").value = "";
  }
}

document
  .getElementById("prixProduct")
  .addEventListener("click", changementPrix);

function changementPrix() {
  document.getElementById("prixProduct").value = "";
  document.getElementById("prixProduct").innerHTM = "";
}

// Recuperation des valeur des imput est on les stoque dans LocalStorage

function result() {
  let nameProduct = document.getElementById("nameProduct").value;
  let quantity = document.getElementById("quantity").value;
  let prixProduct = document.getElementById("prixProduct").value;
  let pourcentage = document.getElementById("pourcentage").value;

  sessionStorage.setItem("Nom", nameProduct);
  sessionStorage.setItem("Quantité", quantity);
  sessionStorage.setItem("Prix", prixProduct);
  sessionStorage.setItem("Pourcentage", pourcentage);
}

///////////////////////////////////////////////////////////////////////////////

//recuparetion des valeur dans LocalStorage

let getNameProduct = sessionStorage.getItem("Nom");
let getQuantity = sessionStorage.getItem("Quantité");
let getPrixProduct = sessionStorage.getItem("Prix");
let getPourcentage = sessionStorage.getItem("Pourcentage");
console.log(getNameProduct, getQuantity, getPrixProduct, getPourcentage);

///////////////////////////////////////////////////////////////////////////////

// la fonction qui va calculer le prix en fonction des quantité
let PrixTotalSansPourcentage = getPrixProduct * getQuantity;

// calculer le prix en fonction des quantité et du pourcentage de reduction
let PrixTotalAvecPourcentage1 = PrixTotalSansPourcentage * getPourcentage;
let PrixTotalAvecPourcentage2 = PrixTotalAvecPourcentage1 / 100;
let PrixTotalAvecPourcentage3 =
  PrixTotalSansPourcentage - PrixTotalAvecPourcentage2;

///////////////////////////////////////////////////////////////////////////////

if (getPourcentage == 0 || null) {
  let affichageConclusion = (document.getElementById(
    "messageDeValidation"
  ).innerHTML = `<h1>Résultat</h1>
  <h2>Tu a commander ${getQuantity} ${getNameProduct} pour ${PrixTotalSansPourcentage}€</h2>
  `);
} else {
  let affichageConclusion = (document.getElementById(
    "messageDeValidation"
  ).innerHTML = `<h1>Résultat</h1><h2>Tu a commander ${getQuantity} ${getNameProduct} pour ${PrixTotalAvecPourcentage3}€ car tu avais ${getPourcentage}% de remise</h2>`);
}
