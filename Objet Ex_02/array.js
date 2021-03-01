//Ex 1

let francois = {
    panier : ["pain", "huile", "tomate"],
    derober(personne, element) : {
        this.panier.push(personne.panier.splice(personne.panier.indexOf(element1), 1).to join());
        this.panier.push(personne.panier.splice(personne.panier.indexOf(element2), 1).to join());
}
let sergio = {
    panier : ["Brioche", "Levure", "eau"],
}


francois.derober(sergio, ["levure", "brioche"]);
console.log(francois, sergio);
