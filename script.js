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
  } else if (nameArticle == "" && getPrixProductModif != " ") {
    document.getElementById("prixProduct").innerHTML = "";
    document.getElementById("prixProduct").value = "";
  }
}

///////////////////////////////////////////////////////////////////////////////

// Recuperation des valeur des imput est on les stoque dans LocalStorage
function result() {
  event.preventDefault();
  let nameProduct = document.getElementById("nameProduct").value;
  let quantity = document.getElementById("quantity").value;
  let prixProduct = document.getElementById("prixProduct").value;
  let pourcentage = document.getElementById("pourcentage").value;
  let prixProductModif = document.getElementById("prixProductModif").value;
  let prixVente = document.getElementById("prixVente").value;
  let pourcentageDeMarge = document.getElementById("pourcentageDeMarge").value;

  sessionStorage.setItem("Nom", nameProduct);
  sessionStorage.setItem("Quantité", quantity);
  sessionStorage.setItem("Prix", prixProduct);
  sessionStorage.setItem("Pourcentage", pourcentage);
  sessionStorage.setItem("PrixProductModif", prixProductModif);
  sessionStorage.setItem("PrixVente", prixVente);
  sessionStorage.setItem("PourcentageDeMarge", pourcentageDeMarge);

  //recuparetion des valeur dans LocalStorage
let getNameProduct = sessionStorage.getItem("Nom");
let getQuantity = sessionStorage.getItem("Quantité");
let getPrixProduct = sessionStorage.getItem("Prix");
let getPourcentage = sessionStorage.getItem("Pourcentage");
let getPrixProductModif = sessionStorage.getItem("PrixProductModif")
let getPrixVente = sessionStorage.getItem("PrixVente");
let getPourcentageDeMarge = sessionStorage.getItem("PourcentageDeMarge")
console.log(getNameProduct, getQuantity, getPrixProduct, getPourcentage, getPrixProductModif, getPrixVente, getPourcentageDeMarge);

let marge = (1 + getPourcentageDeMarge / 100);

  if (prixProductModif !== "" && pourcentage == "") {
    let prixDeVenteModifResult = getQuantity * getPrixProductModif;
    let prixDeVenteModifResultAvecMarge = prixDeVenteModifResult * marge;
    document.getElementById("prixVente").innerHTML = `${prixDeVenteModifResultAvecMarge}€`;
  } else if (prixProductModif == "" && pourcentage == "") {
    let prixDeBaseResult = getPrixProduct * getQuantity;
    let prixDeBaseResultAvecMarge = prixDeBaseResult * marge;
    document.getElementById("prixVente").innerHTML = `${prixDeBaseResultAvecMarge}€`;
  } else if (prixProductModif !== "" && pourcentage !== "") {
    let prixDeBaseResult = (getPrixProductModif * getQuantity) * marge;
    let prixDeVenteRemiserAvecVirgule = (1 - getPourcentage / 100) * prixDeBaseResult;
    let prixVenteModifEtRemiser = Math.round(prixDeVenteRemiserAvecVirgule);
    document.getElementById('prixVenteRemiser').innerHTML = `${prixVenteModifEtRemiser}€`
  } else if (prixProductModif == "" && pourcentage !== "") {
    let prixDeBaseResult = (getQuantity * getPrixProduct) * marge;
    let prixDeVenteRemiserAvecVirgule = (1 - getPourcentage / 100) * prixDeBaseResult;
    let prixVenteRemiser = Math.round(prixDeVenteRemiserAvecVirgule);
    document.getElementById('prixVenteRemiser').innerHTML = `${prixVenteRemiser}€`
  }

}

