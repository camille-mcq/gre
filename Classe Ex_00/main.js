// Ex 01

class perso {
    constructor(age, nom, ville){
        this.age = age;
        this.nom = nom;
        this.ville = ville;
        this.sePresenter = (perso) => {
            console.log(`Bonjour, je m'appelle ${this.nom} et j'habite dans la ville de ${this.ville}`);
        }
    }
}

let cam = new perso("24", "Marc", "Marcq");
let jerome = new perso("27", "jéjé", "Bruxelles");

cam.sePresenter();
jerome.sePresenter();


