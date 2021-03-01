// Ex 1 Additionner
console.log("Exercice 1");

let addition = (nbr_1, nbr_2) => {
    console.log(`L'addition de ${nbr_1} et de ${nbr_2} est de ${nbr_2+nbr_1}`);
}
addition(5, 8);

// Ex 2 Soustraire
console.log("Exercice 2");

let soustraction = (nbr_1, nbr_2) => {
    console.log(`La soustraction de ${nbr_1} et de ${nbr_2} est de ${nbr_1 - nbr_2}`);
}
soustraction(6, 2);

// Ex 3 Multiplication
console.log("Exercice 3");

let multi = (nbr_1, nbr_2) => {
    console.log(`La multi de ${nbr_1} et de ${nbr_2} est de ${nbr_1*nbr_2}`);
}
multi(20, 2);

// Ex 4 Division
console.log("Exercice 4");

let division = (nbr_1, nbr_2) => {
    console.log(`La division de ${nbr_1} et de ${nbr_2} est de ${nbr_1/ nbr_2}`);
}
division(20,2);

// Ex 5 Modulo
console.log("Exercice 5");

let modulo = (nbr_1, nbr_2) => {
    console.log(`Le modulo de ${nbr_1} et de ${nbr_2} est de ${nbr_1% nbr_2}`);
}
modulo(40, 14);

// Ex 6 Carré
console.log("Exercice 6");

let carré = (nbr_1) => {
    console.log(`Le carré de ${nbr_1} est de ${nbr_1*nbr_1}`);
}
carré(4);

// Ex 7 Exposant
console.log("Exercice 7");

let exposant = (nbr_1, nbr_2) => {
    console.log(`${nbr_1} exposant ${nbr_2} est égal à ${nbr_1^nbr_2}`);
}
exposant(4);

// Ex 8 capitalize
console.log("Exercice 8");

let capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(capitalize("heLLo"));

// Ex 9 Calcul
console.log("Exercice 9");

let calcul = (par_1, par_2, opé) => {
        switch (opé) {
            case "+":
                return (`Votre calcul est ${par_1} + ${par_2} = ${par_1+par_2}`);
            case "-":
                return (`Votre calcul est ${par_1} - ${par_2} = ${par_1-par_2}`);
            case "*":
                return (`Votre calcul est ${par_1} x ${par_2} = ${par_1*par_2}`);
            case "/":
                return(`Votre calcul est ${par_1} / ${par_2} = ${par_1/par_2}`);
            case "%":
                return(`Votre calcul est ${par_1} % ${par_2} = ${par_1%par_2}`);
        
            default:
                alert("Drôle de chiffres..")
}
}

console.log(calcul(10, 2, "-"));
console.log(calcul(3, 8, "+"));
console.log(calcul(4, 5, "*"));
console.log(calcul(8, 2, "/"));
console.log(calcul(10, 3, "%"));
