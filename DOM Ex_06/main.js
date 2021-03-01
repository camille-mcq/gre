// Ex 1
let coucou = document.getElementById('content');
console.log(coucou.firstElementChild);

// Ex 2
let h_3 = document.getElementById('titreNiv3');
console.log(h_3);

// Ex 3
console.log(h_3.previousElementSibling);

// Ex 4
let paraph = document.getElementsByClassName('petitParagraphe');
console.log(paraph[0].nextElementSibling);

// Ex 5
let important = document.getElementsByClassName('important');
console.log(important[0].parentElement);

// Ex 6
console.log(mdl[0].parentElement.firstElementChild);

// Ex 7
let myLastImportant = document.getElementById('listElements');
console.log(myLastImportant.parentElement.firstElementChild);

// Ex 8
let textGeneral = document.getElementById('textGeneral');
console.log(textGeneral.nextElementSibling.nextElementSibling);

// Ex 9
let spanNom = document.getElementsByTagName('span')[1];
console.log(spanNom.parentElement.nextElementSibling);

// Ex 10
let nico = document.getElementsByTagName("b")[2];
console.log(spanNom.parentElement.previousElementSibling.firstElementChild.firstElementChild);

// Ex 11
console.log(document.querySelector("grandParagraphe"));

// Ex 12
let li = document.querySelectorAll('li');
li.forEach(e => {
    console.log(e.textContent);
});