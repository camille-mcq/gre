
// boutton de départs pour cliquer sur les exo
let ex = document.querySelectorAll(".la");

//Déclaration section
let ex_1 = document.querySelector("#ex1");
let ex_2 = document.querySelector("#ex2");
let ex_3 = document.querySelector("#ex3");
let ex_4 = document.querySelector("#ex4");
let ex_5 = document.querySelector("#ex5");
let ex_6 = document.querySelector("#ex6");
let ex_7 = document.querySelector("#ex7");

//Au click, afficher la section 1
ex[0].addEventListener('click', () => {
   if(getComputedStyle(ex_1).display != "none"){
        ex_1.style.display = "none";
    } else {
        ex_1.style.display = "block";
        ex_2.style.display = "none";
        ex_3.style.display = "none";
        ex_4.style.display = "none";
        ex_5.style.display = "none";
        ex_6.style.display = "none";
        ex_7.style.display = "none";
        };
});
/***Section 1 ***/
// Modifier titre section 1
let titre_modifier = document.querySelectorAll("h1")[1];
titre_modifier.style.color = "green";
titre_modifier.style.backgroundColor = "yellow";
titre_modifier.innerText = "Titre modifié";

/***Section 2 ***/
//Au click, afficher la section 2
ex[1].addEventListener('click', () => {
   if(getComputedStyle(ex_2).display != "none"){
        ex_2.style.display = "none";
    } else {
        ex_1.style.display = "none";
        ex_2.style.display = "block";
        ex_3.style.display = "none";
        ex_4.style.display = "none";
        ex_5.style.display = "none";
        ex_6.style.display = "none";
        ex_7.style.display = "none";
    }
});
/***Section 3 ***/
//Au click, afficher la section 3
ex[2].addEventListener('click', () => {
   if(getComputedStyle(ex_3).display != "none"){
        ex_3.style.display = "none";
    } else {
        ex_1.style.display = "none";
        ex_2.style.display = "none";
        ex_3.style.display = "block";
        ex_4.style.display = "none";
        ex_5.style.display = "none";
        ex_6.style.display = "none";
        ex_7.style.display = "none";
    }
});
// Déclarer TOUS les inputs
let input = document.querySelectorAll('input');
let input_ex3 = document.querySelector(".input_ex3");

//Quand on écrit dedans, on ajoute un élément à la liste
input[0].nextElementSibling.addEventListener('click', () => {
    //insère un  nouvel element apres chaque click
    let input_li = document.createElement('li');
    input_li.textContent = input[0].value;
    input_ex3.parentElement.firstElementChild.textContent = "Welcome " + input[0].value;
    input[0].value = "";
    input_ex3.nextElementSibling.firstElementChild.appendChild(input_li);
    
});
/***Section 4 ***/
//Au click, afficher la section 4
ex[3].addEventListener('click', () => {
   if(getComputedStyle(ex_4).display != "none"){
        ex_4.style.display = "none";
    } else {
        ex_1.style.display = "none";
        ex_2.style.display = "none";
        ex_3.style.display = "none";
        ex_4.style.display = "block";
        ex_5.style.display = "none";
        ex_6.style.display = "none";
        ex_7.style.display = "none";
    }
});
// récupérer les boutons
let button = document.querySelectorAll("button");
// on récupère le carré rouge
let carre_rouge = document.querySelectorAll(".carre_rouge");
// quand on clique sur le bouton, ça incrémente le bouton "nbr de click"
carre_rouge[0].style.display = "block";
carre_rouge[1].style.display = "none";
let i = 0;
button[1].addEventListener('click', () => {
    // On incrémente i et ole bouton vert
    i++;
    button[2].textContent = `clicks ${i}`;
    if (carre_rouge[0].style.display == "block" && carre_rouge[1].style.display == "none") {
        carre_rouge[0].style.display = "none";
        carre_rouge[1].style.display = "block";
    } else {
        carre_rouge[0].style.display = "block";
        carre_rouge[1].style.display = "none";
    }
});

/***Section 5 ***/
//Au click, afficher la section 5
ex[4].addEventListener('click', () => {
   if(getComputedStyle(ex_5).display != "none"){
        ex_5.style.display = "none";
    } else {
        ex_1.style.display = "none";
        ex_2.style.display = "none";
        ex_3.style.display = "none";
        ex_4.style.display = "none";
        ex_5.style.display = "block";
        ex_6.style.display = "none";
        ex_7.style.display = "none";
    }
});

//Au click, on ajoute les oeufs en dessous du boutton 
button[3].addEventListener('click', () => {
    let img = document.createElement("img");
    img.src = "./public/img/oeuf.png";
    img.style.width = "110px";
    img.style.height = "150px";
    button[3].parentElement.nextElementSibling.appendChild(img);
});


/***Section 6 ***/
//Au click, afficher la section 6
ex[5].addEventListener('click', () => {
   if(getComputedStyle(ex_6).display != "none"){
        ex_6.style.display = "none";
    } else {
        ex_1.style.display = "none";
        ex_2.style.display = "none";
        ex_3.style.display = "none";
        ex_4.style.display = "none";
        ex_5.style.display = "none";
        ex_6.style.display = "block";
        ex_7.style.display = "none";
    }
});

//Niveau 1
button[4].addEventListener('click', () => {
    button[4].nextElementSibling.textContent = ` ${parseInt(input[1].value) + parseInt(input[2].value)}`;
});

//Niveau 2 - Valeur de input
//élément 1 avant opérateur
let elem_1;
//élement 2 Après opérateur
let elem_2;
//opé = opérateur utilisé
let ope;
//Quand on clique sur le bouton 1
button[5].addEventListener('click', () =>{
    input[3].value = input[3].value + "1";
});
//Quand on clique sur le bouton 2
button[6].addEventListener('click', () =>{
    input[3].value = input[3].value + "2";
});
//Quand on clique sur le bouton 3
button[7].addEventListener('click', () =>{
    input[3].value = input[3].value + "3";
});
//Quand on clique sur le bouton +
button[8].addEventListener('click', () =>{
    elem_1 = input[3].value;
    ope = "+";
    input[3].value = "";
});
//Quand on clique sur le bouton 4
button[9].addEventListener('click', () =>{
    input[3].value = input[3].value + "4";
});
//Quand on clique sur le bouton 5
button[10].addEventListener('click', () =>{
    input[3].value = input[3].value + "5";
});
//Quand on clique sur le bouton 6
button[11].addEventListener('click', () =>{
    input[3].value = input[3].value + "6";
});
//Quand on clique sur le bouton -
button[12].addEventListener('click', () =>{
    elem_1 = input[3].value;
    ope = "-";
    input[3].value = "";
});
//Quand on clique sur le bouton 7
button[13].addEventListener('click', () =>{
    input[3].value = input[3].value + "7";
});
//Quand on clique sur le bouton 8
button[14].addEventListener('click', () =>{
    input[3].value = input[3].value + "8";
});
//Quand on clique sur le bouton 9
button[15].addEventListener('click', () =>{
    input[3].value = input[3].value + "9";
});
//Quand on clique sur le bouton *
button[16].addEventListener('click', () =>{
    elem_1 = input[3].value;
    ope = "*";
    input[3].value = "";
});
//Quand on clique sur le bouton C
button[17].addEventListener('click', () =>{
    input[3].value = "";
    elem_1 = 0;
    elem_2 = 0;
    ope = "";
});
//Quand on clique sur le bouton 0
button[18].addEventListener('click', () =>{
    input[3].value = input[3].value + "0";
});
//Quand on clique sur le bouton /
button[20].addEventListener('click', () =>{
    elem_1 = input[3].value;
    ope = "/"; 
    input[3].value = "";
});
//Quand on clique sur le bouton ==
button[19].addEventListener('click', () =>{
    elem_2 = input[3].value;
    input[3].value = `${elem_1} ${ope} ${elem_2}`
    switch (ope) {
        case "+":
            input[3].previousElementSibling.textContent = parseInt(elem_2) + parseInt(elem_1);
            break;
        case "-":
            input[3].previousElementSibling.textContent = parseInt(elem_1) - parseInt(elem_2);
            break;
        case "/":
            input[3].previousElementSibling.textContent = parseInt(elem_1) / parseInt(elem_2);
            break;
        case "*":
            input[3].previousElementSibling.textContent = parseInt(elem_2) * parseInt(elem_1);
            break;

    }
});


//Au click, afficher la section 7
ex[6].addEventListener('click', () => {
   if(getComputedStyle(ex_7).display != "none"){
        ex_7.style.display = "none";
    } else {
        ex_1.style.display = "none";
        ex_2.style.display = "none";
        ex_3.style.display = "none";
        ex_4.style.display = "none";
        ex_5.style.display = "none";
        ex_6.style.display = "none";
        ex_7.style.display = "block";
    }
});

