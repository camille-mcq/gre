// import des =
let bouton = document.querySelectorAll("button");
let input = document.querySelectorAll("input");
// 1 première opération
let resultat1 = document.getElementById("response1");

bouton[0].addEventListener("click", () => {
    resultat1.textContent = `${parseInt(input[0].value) + parseInt(input[1].value)}`;
});

// 2 Choix des opérateurs
let resultat2 = document.getElementById("response2");

bouton[1].addEventListener("click", () => {
    let ope = document.querySelector("select");
    console.log(ope.value);
switch (ope.value) {
    case '+':
        resultat2.textContent = `${parseInt(input[2].value) + parseInt(input[3].value)}`;
        break;
    case '-':
        resultat2.textContent = `${parseInt(input[2].value) - parseInt(input[3].value)}`;
        break;
    case '/':
        resultat2.textContent = `${parseInt(input[2].value) / parseInt(input[3].value)}`;
        break;
    case '*':
        resultat2.textContent = `${parseInt(input[2].value) * parseInt(input[3].value)}`;
        break;
  default:
    resultat2.textContent = `Nan`;
}
});

// 3 
// prendre opérateur entre les input
let operateur = document.querySelector("#operatorsExo3>span>i");

// Avoir le résultat
let resultat3 = document.getElementById("response3");

bouton[2].addEventListener("click", () => {
    switch (operateur.className) {
        case 'fas fa-plus':
            resultat3.textContent = `${parseInt(input[4].value) + parseInt(input[5].value)}`;
            break;
        case 'fas fa-minus':
            resultat3.textContent = `${parseInt(input[4].value) - parseInt(input[5].value)}`;
            break;
        case 'fas fa-divide':
            resultat3.textContent = `${parseInt(input[4].value) / parseInt(input[5].value)}`;
            break;
        case 'fas fa-times':
            resultat3.textContent = `${parseInt(input[4].value) * parseInt(input[5].value)}`;
            break;
      default:
        resultat3.textContent = `Nan`;
    }
});

// Quand on clique sur le +, on fait juste l'addition
bouton[3].addEventListener("click", () => {
    operateur.className = "fas fa-plus";
});
// Quand on clique sur le -, l'opérateur change 
bouton[4].addEventListener("click", () => {
    operateur.className = "fas fa-minus";
});
// Quand on clique sur le *, l'opérateur change
bouton[5].addEventListener("click", () => {
    operateur.className = "fas fa-times";
});
// Quand on clique sur le /, l'opérateur change
bouton[6].addEventListener("click", () => {
    operateur.className = "fas fa-divide";
});

// 4 Calto
//input focus à gauche ou Target

// input focus à droite

// *******Changer de signe au milieu******* // 
let op = document.querySelector("test");
// Quand on clique sur le +, on fait juste l'addition
bouton[3].addEventListener("click", () => {
    operateur.className = "fas fa-plus";
});
// Quand on clique sur le -, l'opérateur change 
bouton[4].addEventListener("click", () => {
    operateur.className = "fas fa-minus";
});
// Quand on clique sur le *, l'opérateur change
bouton[5].addEventListener("click", () => {
    operateur.className = "fas fa-times";
});
// Quand on clique sur le /, l'opérateur change
bouton[6].addEventListener("click", () => {
    operateur.className = "fas fa-divide";
});