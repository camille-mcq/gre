//Partie 1

//1
let h1 = document.querySelector('h1');
h1.innerText = 'Les attributs class et id';
console.log(h1.innerText);

//2
let h2 = document.querySelector('h2');
h2.innerText = 'Exercice 2 partie A';

//3
let h2_1 = document.querySelectorAll('h2');
h2_1[1].innerText = 'Exercice 2 partie B';
console.log(h2_1[1].innerText);

//4
let p = document.querySelector('p');
p.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes  <b>par coeur </b> ";
console.log(p.innerHTML);

//5
let p_1 = document.querySelectorAll('p');
p_1[1].innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";
console.log(p_1[1].innerHTML);

// Partie 2.1

//6
let h1_2 = document.querySelector("h1");
let a = document.createAttribute("id");
a.value = "bigTitle";
h1_2.setAttributeNode(a);
h1_2.getAttribute("bigTitle"); 
console.log(h1_2);

//7
let div_class = document.querySelector("div");
div_class.setAttribute("class", "container");
console.log(div_class);

//8
let h2_2 = document.querySelectorAll("h2");

h2_2.forEach(element => {
    element.setAttribute("class", "title");
    console.log(h2_2);
});

//9
let p_2 = document.querySelectorAll("p");

p_2.forEach(element => {
    element.setAttribute("class", "text");
    console.log(h2_2);
});

// Partie 2.2

//10
let section_0 = document.querySelectorAll("section");
section_0[0].setAttribute("class", "margin-bottom border-black padding");

console.log(section_0);

// 11
section_0[1].setAttribute("class", "margin-top border-black padding");

//12
let dernier = document.querySelectorAll("div");

dernier[1].setAttribute("style", "background-color: #2a557e; mt-8 width : 20px; height : 20px");
console.log(dernier[1]);