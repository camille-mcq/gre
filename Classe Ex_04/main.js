// Ex 5
// Partie 1

class eleve {
    constructor (prenom, nom, sexe, age){
        this.prenom = prenom,
        this.nom = nom,
        this.sexe = sexe,
        this.age = age,
        this.sePrésenter = () => {
            if (this.sexe == "h") {
                alert(`Bonjour Monsieur ${prenom} ${nom}`);
            }
            else if (this.sexe == "f") {
                alert(`Bonjour Madame ${prenom} ${nom} `);
            }
            else {
                alert(`Bonjour le non binaire ${prenom} ${nom} `);
            }
        }
        this.galoche = (personne) => {
            if (personne.sexe == this.sexe){
                console.log(`${personne.prenom} ${personne.nom} désolée, pas possible`);
            }
            else {
                console.log(`${personne.prenom} ${personne.nom}, you can make out with ${this.prenom} ${this.nom}`);
            }
        }

}
}

let eleve1 = new eleve ("Max", "Plank", "h", 40);
let eleve2 = new eleve ("Richard", "Berry", "h", 40);
let eleve3 = new eleve ("Stephen", "Hawking", "nb", 40);
let eleve4 = new eleve ("Marie", "Curie", "f", 30);

eleve1.sePrésenter();
eleve2.sePrésenter();
eleve3.sePrésenter();
eleve4.sePrésenter();

eleve1.galoche(eleve2);
eleve2.galoche(eleve3);
eleve3.galoche(eleve4);
eleve4.galoche(eleve1);