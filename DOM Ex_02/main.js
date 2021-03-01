// Ex 01
let myBody = document.getElementsByTagName('body');

// Ex 02
console.log(myBody[0].firstElementChild);

// Ex 03
console.log(myBody[0].lastElementChild);
console.log(myBody[0].lastChild);

// Ex 04
let ex_04 = document.getElementsByTagName('div')[0];
console.log(ex_04.children);

// Ex_05
let ex_05 = document.getElementsByTagName('li')[0];
console.log(ex_05.nextElementSibling);

// Ex_06
let ex_06 = document.getElementsByTagName('li')[1];
console.log(ex_06.previousElementSibling);