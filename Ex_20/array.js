//******** Ex 1 *********
// 1
let nom = prompt("Quel est votre nom ?");

while (!nom){
    alert("Répondez à la question")
    nom = prompt("Quel est votre nom ?");
}
//2
let chiffre = prompt("un chiffre svp");
while (chiffre < 10){
    alert("chiffre trop petit");
    chiffre = prompt("un chiffre svp");
}


//3
console.log("cet exercice fait une boucle infini, je vais pas la lancer");

//4
let coucou = 7;
let i = 3;
while (i< coucou){
    console.log("voici le chiffre du jour : " + i);
    i++;
}

//5
let hey = parseInt(prompt("un nombre entre 20 et 40, svp"));
i = 0; //la variable i est déclarée plus haut

while (i <= hey){
    console.log(i);
    i += 2;
}
console.log("le nombre choisi était : " + hey);

//******** Ex 2 *********

let legumes = ["carotte", "courgette", "navet", "poireau"];
let caisseLegumes = [];

while (legumes.length>0){
    console.log(legumes[0]);
    caisseLegumes.push(panierLegumes.splice(panierLegumes[0],1));   
}
console.table("Mon premier panieu");
console.log(legumes);
console.table("Mon nouveau panier");
console.table(caisseLegumes);


//******** Ex 3 *********
let enigme = prompt("Qu'est ce qui est jaune et qui attend?");

while (enigme != "jonathan"){
    enigme = prompt("Réessayez : Qu'est ce qui est jaune et qui attend?");
}
alert("Bravo, vous avez trouvé la bonne réponse");

//******** Ex 4 *********

enigme = prompt("Qu'est ce qui est jaune et qui attend?");

do {
    enigme = prompt("Réessayez : Qu'est ce qui est jaune et qui attend?");
} while (enigme != "jonathan");

alert("Bravo, vous avez trouvé la bonne réponse");

//******** Ex 5 *********

let currentDate = new Date;
let currentYear = currentDate.getFullYear();
let randomYear = Math.round(Math.random() * (2018 - 1970) + 1970);
let devine;
let essaie = 0;

do {
    essaie++;
    console.log(essaie); 

    console.log(currentYear-randomYear); 
    devine = parseInt(prompt("Si je suis né en " + randomYear + " , Quel âge j'ai aujourd'hui en " + currentYear + " ?"));


} while(devine!= currentYear-randomYear && essaie < 3);

if (devine == currentYear-randomYear){
    alert("C'est tout bon Michel");
}

else{
    alert("Tu t'es planté Gérard");
}


//******** Ex 6 *********//

let panierFruits = []
do{
    let fruit = prompt("Entrez un nom de fruit");
    fruit = fruit.charAt(0).toUpperCase() + fruit.slice(1).toLowerCase();
    console.log(fruit);
    panierFruits.push(fruit);
} while(panierFruits.length<5);

console.table(panierFruits);

// *****Supprimer les fruits

let fruit_a_enlever = prompt("Souhaitez vous retirer un de ces fruits : \n" + panierFruits);
fruit_a_enlever = fruit_a_enlever.charAt(0).toUpperCase() + fruit_a_enlever.slice(1).toLowerCase();

while (panierFruits.includes(fruit_a_enlever)){
    panierFruits.splice(panierFruits.indexOf(fruit_a_enlever), 1);
    console.log("Suppression de "+ fruit_a_enlever + " du tableau");
    fruit_a_enlever = prompt("Souhaitez vous retirer un de ces fruits : \n" + panierFruits);
    fruit_a_enlever = fruit_a_enlever.charAt(0).toUpperCase() + fruit_a_enlever.slice(1).toLowerCase();

}

alert("Voici le contenu de ton panier, bon ap : " + panierFruits );
