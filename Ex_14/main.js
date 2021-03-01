// ToDo
let jour = prompt('jour de la semaine');

switch (jour){
    case "vendredi":
        alert("On est vendredi. Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us.")
    case "lundi":
        alert("On est vendredi. Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us.")
    case "mardi":
        alert("On est mardi. Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us.")
    case "mercredi":
        alert("On est mercredi. Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us.")
    case "jeudi":
        alert("On est jeudi. Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us.")
    case "samedi" || "dimanche":
        alert("On est le WE. Tu n'as pas cours sur le Discord MolenGeek, tu peux jouer à Among Us.")
    break;

    default:
        alert("Drôle de jour..")
}

//Sortez couverts
let meteo = "Quelle est la météo du jour ?"

switch (meteo){
    case "il pleut":
        alert("Pensez à prendre un parapluie")
    case "soleil":
        alert("Sortez les lunettes de soleil")
    case "il vente":
        alert("un kway ?")
    case "il neige":
        alert("Attention aux chutes")
    case "il fait froid":
        alert("Prenez une écharpe et un bonnet")
    case "il fait chaud":
        alert("Attention aux coups de chaud")
    break;

    default:
        alert("Drôle de jour..")
}

//3. Les 2 font plaisir
let nombre = prompt("Entrez un chiffre")

switch (nombre){
    case (nombre%2 == 0):
        alert("C'est pair")
    case (nombre%2 != 0):
        alert("C'est impair")

    break;

    default:
        alert("Drôle de chiffre..")
}

//4 Maths avancée

let nombre_1 = prompt("Entrez un premier nombre");
let operateur = prompt("Un opérateur");
let nombre_2 = prompt("Entrez un deuxième nombre");


switch (operateur){
    case (operateur = "+"):
        alert(`Votre calcul est ${nombre_1} + ${nombre_2} = ${nombre_1+nombre_2}`);
    case (operateur = "-"):
        alert(`Votre calcul est ${nombre_1} - ${nombre_2} = ${nombre_1-nombre_2}`);
    case (operateur = "*"):
        alert(`Votre calcul est ${nombre_1} x ${nombre_2} = ${nombre_1*nombre_2}`);
    case (operateur = "/"):
        alert(`Votre calcul est ${nombre_1} / ${nombre_2} = ${nombre_1/nombre_2}`);
    case (operateur = "%"):
        alert(`Votre calcul est ${nombre_1} % ${nombre_2} = ${nombre_1%nombre_2}`);

    break;

    default:
        alert("Drôle de chiffre..")
}