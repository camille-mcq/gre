/****Div à modifier****/
let div = document.getElementById("last");


// Background Color
let bouton = document.querySelectorAll("button");
// Bouton blanc
bouton[0].addEventListener("click", () => {
    div.style.backgroundColor = "#cecaca";
});
// Bouton rouge
bouton[1].addEventListener("click", () => {
    div.style.backgroundColor = "red";
});
// Bouton vert
bouton[2].addEventListener("click", () => {
    div.style.backgroundColor = "green";
});
// bouton bleu
bouton[3].addEventListener("click", () => {
    div.style.backgroundColor = "blue";
});

// Border
// Solid
bouton[4].addEventListener("click", () => {
    div.style.border = "solid 5px black";
});
// dotted
bouton[5].addEventListener("click", () => {
    div.style.border = "dotted 4px black";
});
// Thin
bouton[6].addEventListener("click", () => {
    div.style.border = "solid 1px black";
});

//Border Top
// No border
bouton[7].addEventListener("click", () => {
    div.style.borderTop = "none";
});
// Border soft red
bouton[8].addEventListener("click", () => {
    div.style.borderTop = "solid red 1px";
});
// Border bold red
bouton[9].addEventListener("click", () => {
    div.style.borderTop = "solid red 6px";
});

/*****Select your color*****/
// Tous les input
//BG-color
let input = document.querySelectorAll("input");
input[0].addEventListener("change", () => {
    div.style.backgroundColor = input[0].value;
});

//border plain
input[1].addEventListener("change", () => {
    div.style.border = `solid black ${input[1].value}px`;
});
//border top
input[2].addEventListener("change", () => {
    div.style.borderTop = `solid black ${input[2].value}px`;
});
//border right
input[3].addEventListener("change", () => {
    div.style.borderRight = `solid black ${input[3].value}px`;
});
//border bottom
input[4].addEventListener("change", () => {
    div.style.borderBottom = `solid black ${input[4].value}px`;
});
//border left
input[5].addEventListener("change", () => {
    div.style.borderLeft = `solid black ${input[5].value}px`;
});
/***Select your border radius ****/
//Rouded
input[6].addEventListener("click", () => {
    div.style.borderRadius = `${input[6].value}px`;
});
//Top left
input[7].addEventListener("click", () => {
    div.style.borderTopLeftRadius = `${input[7].value}px`;
});
//Rouded
input[8].addEventListener("click", () => {
    div.style.borderTopRightRadius = `${input[8].value}px`;
});
//Rouded
input[9].addEventListener("click", () => {
    div.style.borderBottomRightRadius = `${input[9].value}px`;
});
//Rouded
input[10].addEventListener("click", () => {
    div.style.borderBottomLeftRadius = `${input[10].value}px`;
});
