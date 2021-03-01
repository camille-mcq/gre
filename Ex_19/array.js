// Ex 1
let nbr = prompt("Un chiffre svp");
let compteur = 0;

do{
    console.log(compteur)
    compteur++;
} while(compteur <= nbr);

// Ex 2
let table = ["Cam", "Cem", "Saïd", "Antoine"];
let i = 0;

do{
    console.log(`Bonjour ${table[i]}`);
    i++;
} while (i < table.length);

// Ex 3
let fruit = ["Banane", "pomme", "orange", "poire", "cerise", "Framboise"];
do{
    fruit.splice(0, 1);
    console.log(fruit);
}while (fruit.length != 0);


