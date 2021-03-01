// Ex 01 Les méthoçdes de strings & prompts
console.log("Exercice 1");
// 1
let prénom = prompt("Votre prénom svp");
alert("La première lettre est : " + prénom.charAt(0));
console.log("La première lettre est : " + prénom.charAt(0));

// 2
console.log("Exercice 2");
prénom = prompt("Un autre prénom svp");
let lettres = [];
for (let i = 1; i < prénom.length; i++) {
    lettres[i-1] = prénom[i];
}
alert("Tout sauf la première lettre est : " + lettres.join(''));
console.log("Tout sauf la première lettre est : " + lettres.join(''));

//3
console.log("Exercice 3");
prénom = prompt("Encore un autre");
if (prénom.length > 5){
    alert("La 5ème lettre est : " + prénom.charAt(4));
    console.log("La 5èmelettre est : " + prénom.charAt(4));
}
else {
    alert("Prénom trop court, sorry");
    console.log("Prénom trop court, sorry");
}

//4 
console.log("Exercice 4");
prénom = prompt("Un nouveau prénom");
if (prénom.length > 5){
    alert("La 5ème lettre est : " + prénom.charAt(4));
    console.log("La 5èmelettre est : " + prénom.charAt(4));
}
else{
    alert("Prénom trop court, sorry, il ne fait que : " + prénom.length + " caractères, et voici son dernier caractère : " + prénom.charAt(prénom.length-1));
    console.log("Prénom trop court, sorry");
}
 
// 5
console.log("Exercice 5");

let minuscule = (élément) => {
    élément = élément.toUpperCase();
    console.log("majuscule : " + élément);
}
minuscule(prompt("Votre phrase, écrivez petit"));

let majuscule = (élément) => {
    élément = élément.toLowerCase();
    console.log("minuscule : " +élément);
}
majuscule(prompt("Votre phrase, écrivez grand"));

let capitalize = (string) => {
    console.log(string.charAt(0).toUpperCase() + string.slice(1).toLowerCase());
}
capitalize(prompt("Votre phrase, écrivez grand et petit"));

let mini = (string) => {
    console.log(string.charAt(0).toLowerCase() + string.slice(1).toUpperCase());
}
mini(prompt("Votre phrase, écrivez grand et petit"));