// Ex1
let nbr = prompt("Un chiffre svp");
let compteur = 0;
while (compteur < nbr){
    console.log(compteur);
    compteur++;
}
console.log(compteur);

// Ex 2
let classe = ["Cam", "Cem", "Gauthier", "Mahad", "Laurie"];
let i = 0

while (i < 5){
    console.log("Bonjour " + classe[i]);
    i++;
}

// Ex 3
let classe_1 = [];
classe_1.length = parseInt(prompt("Combien d'étudiants dans la classe?"));
let i = 0

while (i != classe_1.length){
    classe_1[i] = console.log(`Bienvenue étudiant numéro ${i+1}`)
    i++;
}
console.log("La classe est remplie, merci");
