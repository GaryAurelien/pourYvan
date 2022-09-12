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

  sessionStorage.setItem("Nom", nameProduct);
  sessionStorage.setItem("Quantité", quantity);
  sessionStorage.setItem("Prix", prixProduct);
  sessionStorage.setItem("Pourcentage", pourcentage);
  sessionStorage.setItem("PrixProductModif", prixProductModif);
  sessionStorage.setItem("PrixVente", prixVente);

  //recuparetion des valeur dans LocalStorage
let getNameProduct = sessionStorage.getItem("Nom");
let getQuantity = sessionStorage.getItem("Quantité");
let getPrixProduct = sessionStorage.getItem("Prix");
let getPourcentage = sessionStorage.getItem("Pourcentage");
let getPrixProductModif = sessionStorage.getItem("PrixProductModif")
let getPrixVente = sessionStorage.getItem("PrixVente");
console.log(getNameProduct, getQuantity, getPrixProduct, getPourcentage, getPrixProductModif, getPrixVente);

  if (prixProductModif !== "" && pourcentage == "") {
    let prixDeVenteModifResult = getQuantity * getPrixProductModif;
    document.getElementById("prixVente").innerHTML = `${prixDeVenteModifResult}€`;
  } else if (prixProductModif == "" && pourcentage == "") {
    let prixDeBaseResult = getPrixProduct * getQuantity;
    document.getElementById("prixVente").innerHTML = `${prixDeBaseResult}€`;
  } else if (prixProductModif !== "" && pourcentage !== "") {
    let prixDeVenteModifResult = getQuantity * getPrixProductModif;
    let prixDeBaseResult = getPrixProductModif * getQuantity;
    let prixVenteModif = prixDeBaseResult * getPourcentage;
    let prixVenteModifEtRemiser = prixVenteModif / 100;
    document.getElementById('prixVenteRemiser').innerHTML = `${prixVenteModifEtRemiser}`
  } else if (prixProductModif == "" && pourcentage !== "") {
    let prixDeBaseResult = getPrixProduct * getQuantity;
    let prixVenteModif = prixDeBaseResult * getPourcentage;
    let prixVenteModifEtRemiser = prixVenteModif / 100;
    document.getElementById('prixVenteRemiser').innerHTML = `${prixVenteModifEtRemiser}`
  }

}

