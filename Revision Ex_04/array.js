// Ex 3 p3
// 1
console.log("1.");
let tab = ["camille", "antoine", "jérome", "justine", "lea", "stephen", "manon", "ysham", "ela"];
console.log(tab);

//2
console.log("");
console.log("2.");
tab.forEach(element => {
    if ((element.length < 5) && (element.charAt(0) == "a" || element.charAt(0) == "e" || element.charAt(0) == "m" || element.charAt(0) == "f" || element.charAt(0) == "y" || element.charAt(0) == "n" )){
        console.log(element.charAt(0).toUpperCase() + element.slice(1).toLowerCase());
    }
});

//2b
console.log("");
console.log("2b.");
tab.forEach((element, index) => {
    if ((index%2 !== 0) && (element.length > 4) && (element.charAt(0) == "k" || element.charAt(0) == "c" || element.charAt(0) == "m" || element.charAt(0) == "f" || element.charAt(0) == "y" || element.charAt(0) == "n" || element.charAt(0) == "a" || element.charAt(0) == "e" || element.charAt(0) == "p" || element.charAt(0) == "o" )){
        console.log(element.charAt(0).toUpperCase() + element.slice(1).toLowerCase());
    }
});
//3
console.log("");
console.log("3.");
tab.forEach((element, index) => {
    if ((index%2 == 0) && (element.length > 5) && (element.charAt(0) == "k" || element.charAt(0) == "c" || element.charAt(0) == "m" || element.charAt(0) == "f" || element.charAt(0) == "y" || element.charAt(0) == "n" || element.charAt(0) == "a" || element.charAt(0) == "e" || element.charAt(0) == "p" || element.charAt(0) == "o" )){
        console.log(element.charAt(0).toLowerCase() + element.charAt(1).toUpperCase() + element.substr(2, element.length-3).toLowerCase() + element.substr(element.length-1).toUpperCase());
    }
});
//4
console.log("");
console.log("4.");

tab.forEach((element, index) => {
    if ((index%2 == 0) && (element.length < 7) && (element.charAt(0) == "k" || element.charAt(0) == "y" || element.charAt(0) == "m" || element.charAt(0) == "f" || element.charAt(0) == "n" || element.charAt(0) == "a" || element.charAt(0) == "e" || element.charAt(0) == "o" )){
        console.log(element.charAt(0).toLowerCase() + element.charAt(1).toUpperCase());
    }
});
