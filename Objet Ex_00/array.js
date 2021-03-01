// Ex 01
let pers_1 = {
    nom : "Marcq",
    prénom : "Camille",
    age : 20,
    taille : 160,
}
console.log(pers_1.age);

// Ex 02
let pers_2 = {
    nom : "Villoury",
    prénom : "Antoine",
    age : 27,
    taille : 190,
} 
console.log(pers_2.age);
let pers_3 = {
} 

// Ex 03
//1
pers_3.nom = "Jean";
pers_3.prénom = "DeLatour";
pers_3.age = 24;
pers_3.taille = 110;
console.log(pers_3);
//2
pers_3.nom = pers_1.nom;
//3
pers_3.age = pers_2.age;
//4
pers_3.taille = 100;

console.log(pers_3);

// Ex 04
//1
let pers_4 = {
    saluer() {
        console.log(`Coucou ${pers_2.prénom}`);
    } 
}
//2
pers_4.saluer();

// Ex 05
pers_1 = {
    nom : "Ellimac",
    age : 30,
}
pers_2 = {
    nom : "Qcram",
    age : 32,
}
pers_3 = {
    nom : "Eniotna",
    age : 72,
}
let thief = {
    usurpation(personne){
        this.nom = personne.nom;
        this.age = personne.age;
    }
}
console.log(thief);
thief.usurpation(pers_2);