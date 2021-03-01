// Exo Counter

let counter = document.querySelector("button");
let span = document.querySelector("span");
let i = 1;
counter.addEventListener("click", () => {
    span.textContent = `${i}`
    i++;
});

// Exo move square

// Etape 1, ajouter une classe à l'ID parent : "d-flex justify-content-between"
let div_parents = document.getElementById("parent-square");
div_parents.setAttribute("class", "d-flex justify-content-between");

// Etape 2 : ajouter une div avec ID et class mais avec couleur transparente en bg
let div_2 = document.createElement("div");
div_2.setAttribute("id", "square");
div_2.setAttribute("class", "off");
div_2.setAttribute("style", "background-color: transparent");
div_parents.appendChild(div_2);
// Etape 3, au clique, le carré rouge de la div 1 passe transparent et le carré de la div 2 passe en vert.

div_parents.firstElementChild.addEventListener("click", () => {
    div_2.setAttribute("style", "background-color : green");
    div_2.textContent = "on";
    div_parents.firstElementChild.setAttribute("style", "background-color : transparent");
    div_parents.firstElementChild.textContent = "";

})
//Cliquez sur le vert et il disparait et le rouge revient
div_2.addEventListener("click", () => {
    if (div_2.getAttribute("style") == "background-color : green" ){
        div_2.setAttribute("style", "background-color: transparent");
        div_2.textContent = "";
        div_parents.firstElementChild.removeAttribute("style"); 
        div_parents.firstElementChild.textContent = "off";
    }
});

// deuxieme proposition
let btnOnOff = document.querySelector("#parent-square");
let squarreOnOff = document.querySelector("#squarre");

btnOnOff.addEventListener("click", () => {
    
})
//Exo Number Title
// Sélectionner tous les titres
let number_title = document.querySelectorAll("h2");
// Quand on appuie sur le chiffre 6, tous les titres prennent l'index du tableau +1 
let index = 0

document.addEventListener("keypress", (e) => {
    let keyCode = e.which;
    if(keyCode == 54){
        number_title.forEach( () => {
            number_title[index].textContent = `${index+1}. ${number_title[index].textContent}`;
            index++
        });
    }    
});

// Ex Multi-Click
// récupérer le carré
let carre = document.getElementById("multi-click");
carre.setAttribute("style", "border-radius: 0%")
carre.addEventListener("click", () => {
    // Au 1er clic : border radius 
    if(carre.getAttribute("style") == "border-radius: 0%")
    {
       carre.setAttribute("style", "border-radius: 50%");
    } 
    // au 2eme clic : background-color :red
    else if (carre.getAttribute("style") == "border-radius: 50%") {
        carre.setAttribute("style", "border-radius: 50%; background-color: red");
    }
    // Au 3e clic : revenir au point de départ
    else if ( carre.getAttribute("style") == "border-radius: 50%; background-color: red"){
        carre.setAttribute("style", "border-radius: 0%");
    }
});

// Exo Set Color
let color = document.getElementById("exo-set-color");
let p = color.querySelector("p");
let pick_color = document.getElementById("pick-color");

pick_color.addEventListener("change", () => {
    p.style.color = pick_color.value
});
