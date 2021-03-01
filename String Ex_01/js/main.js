let phrase = 'Bonjour tout le monde    ';
console.log(typeof(phrase));
alert(phrase);
/*2*/
console.log(phrase.length);

/*3*/
phrase = phrase.trim();

/*4*/
console.log(phrase.length);

/*5*/
console.log(phrase.substr(-1, 1));

/*6*/
phrase = phrase.replace("Bonjour", " ");
console.log(phrase);

/*7*/
phrase = "Bonjour".concat(phrase);
console.log(phrase);

/*8*/
phrase = phrase.substr(0,7);
console.log(phrase);

/*9*/
phrase = phrase.replace("Bonjour" , "Number");
console.log(phrase);
