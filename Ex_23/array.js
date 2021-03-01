// Ex 1 reverseNumber
console.log("Exercice 1");

let reversedNum = (num) => {
    return (parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num));
};
console.log(reversedNum(-543.29));
console.log(reversedNum(123456789));

// Ex 2 Pair
console.log("Exercice 2");

let estPair = (num) => {
    switch (num % 2) {
        case 0:
            return (`Votre chiffre ${num} est pair, il est divisible par 2 : ${num} / 2 = ${num / 2}`);
        case 1:
            return (`Votre chiffre ${num} est impair, il n'est divisible par 2 : ${num} / 2 = ${num / 2}`);

        default:
            return ("Drôle de chiffres..");
    }
}
console.log(estPair(5));
console.log(estPair(6));

// Ex 3 logIn
console.log("Exercice 3");

let logIn = () => {
    let mot;
    do {
        mot = prompt('Votre mdp svp')
    } while (mot !== 'ahah');
    console.log(alert("tu es connecté"));
}
logIn();