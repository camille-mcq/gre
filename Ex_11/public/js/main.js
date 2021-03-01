// Variables temporaires

// let a = 1; // 2
// let b = 2; // 3
// let c = 3; // 1

// let temp = a;
// a = b;
// b = c;
// c = temp;

// console.log(a);
// console.log(b);
// console.log(c);


// Exo 1
// Echanger les valeurs des variables de façon à ce qu'elles aient la valeur indiquée en commentaire
let a = 1; // 4
let b = 2; // 3
let c = 3; // 2
let d = 4; // 1

//etape 1 : inverser valeur de a et d
let tempo = a;
a = d;
d = tempo;

//etape 2 : inverser valeur de b et c
tempo = b;
b = c;
c = tempo;

console.log(a, b, c, d);





// Exo 2
// Echanger les valeurs des variables de façon à ce qu'elles aient la valeur indiquée en commentaire
let e = 1; // 2
let f = 2; // 3
let g = 3; // 4
let h = 4; // 1

tempo = e;
e = f;
f = g;
g = h;
h = tempo;

console.log(e, f, g, h);

// Exo 3
// Afficher 3, 4, 2, 1 en se servant d'une variable temporaire
let tableau = [1, 2, 3, 4];
let temp;

tableau.reverse();
temp = tableau[0] // Stockage de valeuuuuuur
tableau[0] = tableau[1];
tableau[1] = temp;
console.log(tableau);