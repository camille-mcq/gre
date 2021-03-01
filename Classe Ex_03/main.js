// Ex 01

class Lieu {
    constructor (nom, personne){
        this.nom = nom,
        this.personne = [personne],
    }
}
let MolenGeek = new Lieu ("MolenGeek", []);
let Snack = new Lieu ("Snack", []);
let Maison = new Lieu("Maison",[]);

class Personne {
    constructor(nom, prénom, argent){
        this.nom = nom;
        this.prénom = prénom;
        this.argent = argent;
        this.se_deplacer = (départ, destination, bus) => {
            // permet de se déplacer dans différents lieux en faisant appel à la méthode embarquer du bus.
            if (bus == 0){
                départ.personnes.splice(départ.personnes.indexOf(this), 1);
                destination.personnes.push(this);
                console.log(`${this.nom} se dirige à ${destination.nom} à pied`);
            }
            else{
                bus.embarquer(this.départ.destination);
            }
        
        }
    }
}

let Gauthier = new Personne ("CS17", "Gauthier", 2);
let said = new Personne ("Said", "Maktabi", 20);
let delijn = new Bus ([], 10);

// coucou, on se déplace
class Bus {
    constructor(personnes, caisse){
        this.personnes = [personnes];
        this.caisse = caisse;
        this.embarquer = (passager, lieu_depart, destination) => {
            // appeler la méthode se_déplacer

            // Pour payer le bus.
            if (2.80 >= passager.argent){
                passager.argent -= 2,80;
                console.log("roulez bien, il vous reste " + this.personne.argent + "  argent sur vous");
                this.caisse += 2,80;
                lieu_depart.personne.splice(lieu_depart.personne.indexOf(passager) ,1);
                destination.personne.push(passager);
                console.log(`Bonjour ${passager.prénom}, bienvenu à bord ! Direction ${destination.nom} !`);
            }
            else {
                lieu_depart.personne.splice(lieu_depart.personne.indexOf(passager) ,1);
                destination.personne.push(passager);
                console.log("trop cher pour toi, vas à pied à " + destination.nom + " !");
            }
        }
    }
}

maison.personnes.push(said);
said.se_deplacer(maison, MolenGeek, delijn);
said.se_deplacer(molengeek, Snack, delijn);
said.se_deplacer(Snack, MolenGeek);
said.se_deplacer(MolenGeek, maison, delijn);

