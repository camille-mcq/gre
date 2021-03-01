// Ex 1
let perso = {
    nom : "Camille",
    prénom: "Mcq",
    sePresenter(){
        console.log(`Bonjour je m'appelle ${perso.prénom} ${perso.nom}`);
    }
}
console.log(perso);

// Ex 2
//1 & 2 & 3
let perso2 = {
    nom : "CamCam",
    idée() {
        this.age = prompt("Donnez un nouvel age ");
        alert(`${perso2.nom} a ${this.age} ans !`);
    }
}
perso2.idée();



