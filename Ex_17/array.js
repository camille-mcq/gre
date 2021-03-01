/*// Ex 01
let multi = 5;

for (let i = 0; i < 11; i++){
    console.log(multi*i);
}
console.log("Table ci-dessous, avec la valeur du prompt")
multi = parseInt(prompt("Donnez un nombre"));

for (let i = 0; i < 11; i++){
    console.log(multi*i);
}

// Ex 02

let double = parseInt(prompt("Donnez un nombre"));

for (let i = 0; i < 11; i += 2){
    console.log(double*i);
}

// Ex 03
let sous = 20;

for (let i = 0; i <=20; i += 2){
    console.log(sous-i);
}

// Ex 04
let tablo = ["camcam", "Ayoub", "Saïd", "Yassin", "Cem", "Nghia"];
let longterm = [];


tablo.forEach(element => {
    if (element.length > 5){
        longterm.push(element);
    }
})
console.log(longterm);
*/
// Ex 05
let somme = [14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61];
let grosse_somme = [];


somme.forEach (element => {
    if (parseInt(element) > 60){
        grosse_somme.push(element);
    }
});

console.log(grosse_somme);
console.log(somme);

// Ex 06
let donnees = [17, 7, 97, {}, "247", 67, 101, true, 34, 78 , [], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100];
let str = [];
let nbr = [];
let obj = [];
let autre = [];


donnees.forEach(element => {
    if (typeof element == "number"){
        nbr.push(element);
    }
    else if (typeof element == "string"){
        str.push(element);
    }
    else if (typeof element == "object"){
        obj.push(element);
    }
    else {
        autre.push(element);
    }
});
console.log(str);
console.log(nbr);
console.log(obj);
console.log(autre);

