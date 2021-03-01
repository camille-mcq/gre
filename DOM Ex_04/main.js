// Ex 01
let coucou = document.getElementsByTagName('h1')[1];
console.log(coucou.textContent);

// Ex 02
let caillou = document.getElementsByTagName('ul');
let ciseau = document.getElementsByTagName('li');
console.log(caillou[0].lastElementChild.textContent);
console.log(ciseau[3].textContent);

// Ex 03
let pierre = document.querySelector('p').firstChild.textContent.toUpperCase();
console.log(pierre);

// Ex 04
let montagne = document.querySelectorAll('li');
montagne.forEach(element => {
    console.log(element.textContent.toUpperCase());
});