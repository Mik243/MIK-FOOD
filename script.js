alert("Bonjour ! Bienvenue sur le site de Mik'S FOOD.");
function Commander() {
    alert("Merci pour votre commande chez MIK'S FOOD !");
} 

function validerCommande() {

    let nom = document.grtElementById("nom").value;

    let produit = document.getElementById("produit").value;

    alert("Merci " + nom + " ! votre commande de " + produit + " a été enregistrée");
}

function calculerPrix() {

    let prix = document.getElementById("produit").value;

    document.getElementById("prix").innerHTML = "prix : " + " FC";
}