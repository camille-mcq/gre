// Ex 1 Classe
console.log("Exercice 1");

let codingSchool17 = [];
let ajout = (nom) => {
    console.log(`${nom}, rentre dans la classe`);
    return (codingSchool17.push(nom));
};

let retrait = (nom) => {
    console.log(`${nom}, sort dans la classe`);
    return (codingSchool17.splice(codingSchool17.indexOf(nom), 1));
    
    
};

ajout('antoine');
ajout('saïd');
ajout('Abdel');
ajout('Nathan');
ajout('Yasmina');
console.log("tableau de la coding après 5 ajouts " + codingSchool17);
retrait('Abdel');
ajout('gauthier');
console.log("tableau de la coding à la fin " + codingSchool17);

// Ex 2 Premier
console.log("Exercice 2");

let estPremier = (nbr) => {
    if (nbr<2){
        return (`le nombre ${nbr} est premier`);
    };
    for (let i = 2; i < nbr; i++) {
    return (`le nombre ${nbr} n'est pas premier`);
}
    return (`le nombre ${nbr} est premier autre`);
}

console.log(estPremier(45));
console.log(estPremier(5));
console.log(estPremier(0));
console.log(estPremier(8));
