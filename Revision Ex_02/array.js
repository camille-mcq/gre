// Exercice 3
//1.
console.log("");
console.log("1.");
let tab = ["camille", "antoine", "jérome", "justine", "lea", "stephen", "Ilénia", "Sébastien", "Juliette"];
console.log(tab);
//2.
console.log("");
console.log("2.");
tab.forEach(element => {
    console.log(element);
});
//3.
console.log("");
console.log("3.");
tab.forEach(element => {
    console.log(element.charAt(0));
});
//4.
console.log("");
console.log("4.");
tab.forEach(element => {
    console.log(element.charAt(1));
});
//5.
console.log("");
console.log("5.");
tab.forEach(element => {
    console.log(element.charAt(1)+element);
});

//6.
console.log("");
console.log("6.");

tab.forEach((element, index) => {
    if (index %2 == 0){
        console.log(element);
    }
});
