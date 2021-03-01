// Ex 01

class Objet {
    constructor(nom, prix){
        this.nom = nom,
        this. prix = prix
    }
}

let lampe = new Objet ("lampe", 10);
let torche = new Objet ("torche", 5);

let tableau = ["lampe", "torche"];

class Personnage {
    constructor (nom, sac, argent){
        this.nom = nom,
        this.sac = sac,
        this.argent = argent,
    this.prendre = (tableau) => {
        this.sac.push(tableau.shift());
    }
    this.acheter = (nom, objet)=> {
        this.argent -= objet.prix;
        nom.argent += objet.prix;
        this.sac.push(objet);
        nom.sac.splice(nom.sac.indexOf(objet), 1);
    } 
}
}
let cam = new Personnage ("Cam", [], 13);
let laurie = new Personnage ("laurie", [], 50);

laurie.prendre(tableau);
cam.prendre(tableau);
console.log(tableau);
console.log(laurie);
cam.acheter(laurie, "lampe");
console.log(cam);
console.log(laurie);


