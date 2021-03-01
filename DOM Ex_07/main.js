// EXO 1
let coucou = document.querySelector('#content');
console.log(coucou);

// EXO 2
let hello = document.querySelectorAll('#content');
console.log(hello);

// EXO 3
let important = document.querySelector('.important');
console.log(important);

// EXO 4
let tout_important = document.querySelectorAll('.important');
console.log(tout_important);

// Ex 5
let list = document.querySelectorAll('li');
list.forEach(element => {
    console.log(
        element.textContent.slice(0,element.textContent.length-1)
        +
        element.textContent.slice(element.textContent.length-1).toUpperCase()
    );
    
});

// Ex 6
let fini = document.getElementById("content").getElementsByClassName("grandParagraphe")[0];
console.log(fini.textContent);