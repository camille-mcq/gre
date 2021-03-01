// Ex 4 Boucle for, Each  & condition
let leTableau = [4,"true",true,"bonjour",511,"coding school",{},2020,1 ,"maryam",false,[],13,["salut",13,false],"les tartines c'est délicieux","true et false",1070,478,"hello","top",4000,99,"codeur",45,"javascript",399,"autodidacte","oui",1000,1001,"brainstorming","lol"];

//1
console.log("\n 1.");

leTableau.forEach(element => {
    console.log(typeof element) 
}); 

//2

console.log("\n 2.");

let lesIntegers = [];
let lesStrings = [];
let lesAutres = [];

leTableau.forEach((element) => {
    switch (typeof element){
        case "number":
            lesIntegers.push(element);
        break;
        case "string":
            lesStrings.push(element);
        break;
        default:
            lesAutres.push(element);
        break;
    }
}); 
console.table(lesStrings);
console.table(lesAutres);
console.table(lesIntegers);

//3

console.log("\n 3.");
let lesGrandsIntegers = [];
let lesPetitsIntegers = [];
let lesPetitsStrings = [];
let lesGrandsStrings = [];

leTableau.forEach(element => {
    switch (typeof element){
        case "number":
            if (element > 100){
                lesGrandsIntegers.push(element);
            }
            else {
                lesPetitsIntegers.push(element);
            }
        break;
        case "string":
            if (element.length < 6){
                lesPetitsStrings.push(element);
            }
            else {
                lesGrandsStrings.push(element);
            }     
        break;
    }
}); 
console.log("Tableau des petits strings" );
console.table(lesPetitsStrings);
console.log("Tableau des grands strings" );
console.table(lesGrandsStrings);
console.log("Tableau des petits integers" );
console.table(lesPetitsIntegers);
console.log("Tableau des grands integers" );
console.table(lesGrandsIntegers);

//4

console.log("\n 4.");

let random = [];
let premier_pot = [];
let deuxieme_pot =[];

for (let index = 0; index < 11; index++) {
    random = prompt("entrez un chiffre");
        if (random <= 100 && random > 0){
            premier_pot.push(Math.floor(random));
        }
        else if (random > 100){
            deuxieme_pot.push(Math.floor(random));
         }
        else if (random <= "0" ){
            alert("trop petit l'ami");
        }
}

console.log("Premier pot :")
console.table(premier_pot);
console.log("Deuxième pot:")
console.table(deuxieme_pot);
console.log("RANDOM :")
console.table(random);


//5

console.log("\n 5.");
// Etape 1 : on remplit le panier
let panier = [];
for (let index = 0; index < 4; index++) {
    panier[index] = prompt("entrez un fruit ou un légume");  
};
// radis, pomme, poire, courgette 

// Etape 2 : on distrubue le panier
let fruit = ["pomme", "poire"];
let legume =["courgette", "radis"];
let panier_fruit = [];
let panier_legume = [];

panier.forEach(element => {
        if (fruit.indexOf(element) > -1 ){
            panier_fruit.push(element);
        }
        else if (fruit.indexOf(element) === -1 ){
            panier_legume.push(element);
        }

});


console.log("Panier");
console.table(panier);
console.log("Panier fruit");
console.table(panier_fruit);
console.log("Panier legume");
console.table(panier_legume);
*/
// Ex 6

let vetements = ['chaussure classique','t-shirt super héro','pull col roulé','basket de sport','chaussettes blanches','pentalon noir','soutien-gorge','pull rayé','t-shirt soleil souriant','caleçon blanc'];
let temporaire = [];
let sousVetements = [];
let chaussures = [];
let vetement = [];

vetements.forEach(element => {
    temporaire = prompt("où va l'article : " + element + " va dans 'sous vetement', ou dans 'chaussure' ou dans 'vetement' ? " );
    switch (temporaire) {
        case "sous vetement":
            sousVetements.push(element);
            break;
        case "chaussure":
            chaussures.push(element);
            break;
        case "vetement":
            vetement.push(element);
            break;
    }
});
console.log("Vetement");
console.table(vetement);
console.log("sous vetement");
console.table(sousVetements);
console.log("Chaussures");
console.table(chaussures);
