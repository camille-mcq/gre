// Ex 1 - Réponse booleans
let var_1 = prompt("Entrez le 1er nombre");
let var_2 = prompt("Entrez le 2ème nombre");

if (var_1 === var_2){
    alert("La première valeur donnée : " + var_1 + " et la deuxième valeur donnée " + var_2 + " sont égales");
}
else{
    alert("Les chiffres donnés ne sont pas égaux : RAS ");
}

// Ex 2 - part 2
let var_3 = prompt("Entrez le 1er nombre");
let var_4 = prompt("Entrez le 2ème nombre");

if (var_3 < var_4){
    alert("La première valeur donnée : " + var_3 + " est plus petite que la deuxième valeur donnée : " + var_4 );
}
else{
    alert("RAS, l'ami");
}

// Ex 3 - reponse boolean part 3
let var_5 = prompt("Entrez le 1er nombre");
let var_6 = prompt("Entrez le 2ème nombre");
let var_7 = prompt("Entrez  le 3ème nombre");

if ( (var_5 + var_6) > var_7){
    alert("La somme du 1er nombre : " + var_5 + "et du 2eme nombre : " + var_6 + " est plus grande que la troisième valeur donnée : " + var_7);
}
else{
    alert("La somme des deux 1ers nombre" + var_5 + " et " + var_6 + "est égale ou plus petite que la 3ème donnée : " + var_7);
}

// Ex 4 - String et calculs
let var_8 = prompt("Entrez une petite phrase");
let var_9 = prompt("Combien de caractères compte votre phrase précédente ? (un chiffre est attendu)");

if (var_9 == var_8.length){
    alert("Bravo, vous êtes doué.e !");
}
else{
    alert("Vous avez raté de " + Math.abs(var_9 - var_8.length) + " caractères la bonne réponse");
}

// Ex 5 - MAths sans Math
let variable_1 = prompt("Donne un nombre");
let variable_2 = prompt("donnes un autre nombre");

if (variable_1 > variable_2){
    alert(`| ${variable_1} - ${variable_2} | = ${(variable_1-variable_2)}`);
}
if (variable_1 < variable_2){
    alert(`| ${variable_1} - ${variable_2} | = ${(variable_2-variable_1)}`);
}

// Ex 6 Qui a la plus grosse ?
let premier = prompt("Entrez 1 nombre");
let deuxième = prompt("Entrez 1 second nombre");
let troisième = prompt("Entrez 1 troisième nombre");

alert("Entre " + premier + ", " + deuxième + ", " + troisième + ", c'est " + Math.max(premier, deuxième, troisième) + " le nombre le plus grand");


// Ex 5 - Respect des consignes 
let prénom = prompt("Entrez votre prénom !");

if (prénom.length < 2){
    prénom = prompt("Ecrivez votre prénom S.V.P");
}
else{
    alert("Salut " + prénom);
}

// Ex 6 - Abonnez-vous
let abonnement = prompt("Souhaitez-vous vous abonner ?");

if (abonnement = "oui"){
    choix = prompt("Quel abonnement souhaitez-vous Luxe ou Normal ?")
        if (choix = "luxe" || "Luxe"){
            alert("Félicitation pour votre abonnement à la formule Luxe !")
        }
        if (choix = "normal" || "Normal"){
            alert("Merci pour votre abonnement.")
        }
        else{
            prompt("Êtes-vous sûr de de rien vouloir ?")
        }
}
else{
    alert("Vous ne souhaitez pas d'abonnement, dommage...")
}

// Ex 7
let q_1 = prompt("Votre prénom ?").toLowerCase()
let q_2 = prompt("Votre nom ?").toLowerCase()
let r_1 = "camille"
let r_2 = "marcq"


if (q_1 != r_1 && q_2 != r_2){
    alert("Vous avez échoué");
}
if(q_1 != r_1 ^ q_2 != r_2) {
    alert("Vous y êtes presque");
}
if(q_1 == r_1 && q_2 == r_2){
    alert("Bravo !");
}
*/
// Ex 8
let age = parseInt(prompt("Quel âge avez-vous ?"));

if (age > 18){
    alert("vous êtes majeur, vous pouvez réserver.");
}
else if (0 < age  && age < 18){
    alert("vous êtes mineur, revenez plus tard.");
}
else if (age <= 0){
    alert("Revenez quand vous serez né !");
}
else if (age == 18){
    alert("Réservez mais attention, c'est tout juste et ce film peut être choquant !");
}
else if (isNaN(age)){
    alert("Vu que vous ne savez pas lire une instruction, je présume que vous n'avez pas l'âge.");
}

let annee = prompt("En quelle année êtes-vous né ?");

if (annee < 2003){
    alert("vous êtes majeur, vous pouvez réserver.");
}
else if (2003 < annee < 2021){
    alert("vous êtes mineur, revenez plus tard.");
}
else if (annee <= 2021){
    alert("Revenez quand vous serez né !");
}
else if (annee === 2003){
    alert("Réservez mais attention, c'est tout juste et ce film peut être choquant !");
}
else if (annee !== Number()){
    alert("Vu que vous ne savez pas lire une instruction, je présume que vous n'avez pas l'âge.");
}
*/
// Ex 9 Mais oui, c'est clair Logique