// Ex 2
let tab = ["banane", "pastèque", "menthe", "rhum", "citron"];
// 1
console.log("");
console.log("1.");
console.log ("le tableau complet est : " + tab);
console.log("Le 3ème élément est : "+ tab[2]);
//2
console.log("");
console.log("2.");
console.log("Le 1er élémént est : '"+ tab[0] + "' Le dernier élément est '" + tab[4] +"'");
//3
console.log("");
console.log("3.");
console.log("Le 2ème élément est : " + tab[1].charAt(0).toUpperCase() + tab[1].charAt(1).toUpperCase() + tab[1].charAt(2).toLowerCase());

//4
console.log("");
console.log("4.");
console.log("La pemière lettre du 4ème élément est : " + tab[3].charAt(0));

//5
console.log("");
console.log("5.");
console.log("Les lettres du 5ème élément sans sa première lettre sont : " + tab[tab.length-1].slice(1));

//6
console.log("");
console.log("6.");
console.log("Les 2 premières lettres du 1er élément: " + tab[0].charAt(0).toLowerCase() + tab[0].charAt(1).toUpperCase());

//7
console.log("");
console.log("7.");
console.log( "contatenation 1er élément '" + tab[0] + "' et 3eme élément : '" + tab[2] + "' donne " + tab[0].concat(tab[2]));

//8
console.log("");
console.log("8.");
console.log("Moitié du 2ème élément à afficher et du dernier élément " + tab[1].substr(0, (tab[1].length /2)) + tab[4].substr((tab[4].length/2), (tab[1].length-1)));

//9
console.log("");
console.log("9.");
console.log("Deux 1ères du 3è en maj + 5è élément en minuscule " + tab[3].substr(0,2).toUpperCase() + tab[4].toLowerCase());

//10
console.log("");
console.log("10.");
console.log("concaténation " + tab[0].charAt(0).toLowerCase() + tab[0].charAt(1).toUpperCase() + tab[1].charAt(0).toLowerCase() + tab[1].charAt(1).toUpperCase() + tab[2].charAt(0).toLowerCase() + tab[2].charAt(1).toUpperCase() + tab[3].charAt(0).toLowerCase() + tab[3].charAt(1).toUpperCase() + tab[4].charAt(0).toLowerCase() + tab[4].charAt(1).toUpperCase());
