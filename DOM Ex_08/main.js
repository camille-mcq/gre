// Ex 01
let h2 = document.querySelector('h2');
console.log(h2.innerText);

// Ex 02
h2.innerText = 'exercice 1';
console.log(h2.innerText);

// Ex 03
let deux = document.querySelector("h2+p");
deux.textContent = "h2.textContent = 'exercice 1'";

// Ex 04
let section = document.querySelector("section");
console.log(section.id);

// Ex 05
let h1 = document.querySelector("h1");
console.log(h1.className);
console.log(h1.classList);
// Ex 06
let all_h1 = document.querySelectorAll("h1");
all_h1.forEach(element => {
    console.log(element.className);
});

// Ex 07
let input = document.querySelector('input');
console.log(input.attributes);

// Ex 08
console.log(input.attributes.type.value);

// Ex 09
let input_2 = document.querySelector("#inputPassword3");
input_2.setAttribute("type", "password");
input_2.setAttribute("value", "password");
console.log(input_2);

// Ex 10
input_2.attributes.type.value = "color";
input.setAttribute("type", "color");