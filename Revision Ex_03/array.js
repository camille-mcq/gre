// Ex 3
// 1
console.log("1.");
let tab = ["camille", "antoine", "jérome", "justine", "lea", "stephen", "Ilénia", "Sébastien", "Juliette"];
console.log(tab);
//2
console.log("");
console.log("2.");
tab.forEach((element, index) => {
    if (index %2 !== 0){
        console.log(element.toUpperCase());
    }
});
//3
console.log("");
console.log("3.");
tab.forEach((element, index) => {
    if (index %2 == 0){
        console.log(element.charAt(0).toUpperCase());
    }
});
//4
console.log("");
console.log("4.");
tab.forEach((element, index) => {
    if (index %2 == 0 &&  element.length > 4){
        console.log(element);
    }
});
//5
console.log("");
console.log("5.");
tab.forEach((element, index) => {
    if (index %2 !== 0 &&  element.length > 4){
        console.log(element.charAt(0).toUpperCase());
    }
});
//6
console.log("");
console.log("6.");
tab.forEach(element => {
    if (element.charAt(0) == "a" || element.charAt(0) == "e" || element.charAt(0) == "m" || element.charAt(0) == "f" || element.charAt(0) == "y" || element.charAt(0) == "n"){
        console.log(element);
    }
});
//7
console.log("");
console.log("7.");
tab.forEach(element => {
    if (element.charAt(0) == "a" || element.charAt(0) == "e" || element.charAt(0) == "m" || element.charAt(0) == "f" || element.charAt(0) == "y" || element.charAt(0) == "n" && element.length>5){
        console.log(element);
    }
});