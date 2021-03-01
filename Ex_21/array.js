//*********Ex 01
//1
console.log("Exercice 1");
let tableau = ["0","1", "2", "3", "4"];
tableau.forEach(element => console.log(element));

//2
let coding17 = ["Mohammed", "Yasmina", "Amine", "Salim", "Abdel", "Majda", "Bilal", "Laurie", "Yahya", "Mahad", "Nghia", "Saïd", "Camille", "Antoine", "Ayoub", "Yassin", "Cem", "Gauthier", "Redwane"];

coding17.forEach(element => console.log("Bonjour " + element));

//*********Ex 02
console.log("Exercice 2");

for (let i = 0; i < coding17.length; i++) {
    console.log("Bonjour " + coding17[i]);
    
}
//*********Ex 03

console.log("Exercice 3");
let classe = [];
let nbr = parseInt(prompt("Nombre d'étudiants dans la classe ?"));
let i = 0;

while (i < nbr){
    classe[i] = prompt("entrez un prénom");
    i++;
}
console.log(classe);

//*********Ex 04

console.log("Exercice 4");

do {
    classe[i] = prompt("entrez un prénom");
    i++;
} while (i < nbr);
console.log(classe);