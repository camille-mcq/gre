// Ex 01

// Lieux 
class Lieu {
    constructor (nom, contenu, ingredients){
        this.nom = nom
        this.contenu = contenu
        this.ingredients = ingredients
    }
}
let maison = new Lieu ("maison", []);
let cuisine = new Lieu ("cuisine", [], []);
let epicerie = new Lieu ("epicerie", [], []);

// ingrédient
class Ingredient {
    constructor(nom, état, prix){
        this.nom = nom,
        this.état = état,
        this.prix = prix
    }
}
let poivron = new Ingredient ("poivron", "entier", 1);
let oignon = new Ingredient ("oignon", "entier", 2);
let oeuf = new Ingredient ("oeuf", "entier", 4);
let épices = new Ingredient ("epice", "moulu", 3.25);
let paprika = new Ingredient ("paprika", "moulu", 1.50);
let fromage = new Ingredient ("fromage", "coupé", 1.60);

// Personne
class Personne {
    constructor (nom, lieu, argent, panier){
        this.nom = nom,
        this.lieu = lieu,
        this.argent = argent,
        this.panier = panier
        this.se_deplacer = (lieu) => {
            this.lieu = Lieu.nom;
            lieu.contenu.push(this);
            console.log (`${this.nom} se déplace à ${lieu.nom}`)
        }
        this.payer = (x) => {
            this.argent -= x.prix;
            this.panier.push(x);
        }
        this.couper = (article) => {
        if (article.etat == "entier"){
            article.etat = "coupé";
            }
        }
    }
}

let maxime = new Personne ("Maxime", "néant", 100, []);
maxime.payer(oignon);
maxime.se_deplacer(maison);
maxime.payer(poivron);
console.log(maxime);
console.log("ca doit afficher " + maison);
console.log(maison);