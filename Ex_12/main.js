/*/1 
console.log(1 == "1");

//2
console.log(1 === "1");

//3
let prénom = prompt("Quel est ton prénom?");
if (prénom.length < 5){
    alert("Ton nom est trop court");
}

//4
let calcul = prompt("Résoud le calcul : 2 + 2 ");
console.log(calcul);
if (calcul == 4){
    alert("YEAS");
}
else{
    alert("WAIIIT");
}

//5
calcul = prompt("Résoud le calcul : 5 x 2  ");
console.log(calcul);

if (calcul == 10){
    alert("la réponse était bien " + calcul);
}
if (calcul > 10){
    alert("Dommage, tu étais à " + (calcul-10) + " unités de la bonne réponse");
}
if (calcul < 10) {
    alert("Dommage, tu étais à " + (10-calcul) + " unités de la bonne réponse");
}
*/
//6
let element_1 = []
element_1[0] = prompt("Entrez le 1er élément");
alert("Il manque 2 éléments");

element_1[1] = prompt("Entrez le 2e élément");
alert("Il manque 1 élément");

element_1[2] = prompt("Entrez le 3e élément");
console.log(element_1);
alert("voici votre tableau " + element_1);

//7

