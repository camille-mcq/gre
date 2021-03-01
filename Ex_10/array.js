
/*******EXERVICE 1********/

/*1*/
var coding = ["Coding 15", "coding 16", "Coding 17"];

/*2*/
console.log(coding);

/*3*/
console.log(coding.length);

/*4*/
console.log(coding[0], coding[1], coding[2]);

/*5*/
coding.push('Cam', '24');
console.log(coding);

/*6*/
coding.unshift('false', '3.14');
console.log(coding);

/*7*/
coding.pop();
console.log(coding);

/*8*/
coding.shift(coding);
console.log(coding);

/*9*/
coding.splice(2, 1, 'Coucou');
console.log(coding);

/*10*/
console.log(coding[4]);

/*11*/
coding.splice(2, 1);
console.log(coding);

/*12*/
coding.reverse();
console.log(coding);

/*13*/
coding.splice(3, 0, 'Camille');
console.log(coding);


/*******EXERVICE 2********/
/*1*/
var arr = [4, 5, 2, 1, 3];
console.log(arr);

/*2*/
arr.sort();
console.log(arr);

/*2 bis*/
console.log(arr.join());
console.log(arr.join('/'));

/*3*/
arr.split("");
console.log(arr);