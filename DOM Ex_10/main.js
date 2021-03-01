//1
let recup = document.querySelectorAll("#object *");
console.log(recup);

//2
let obj = {
    nom: "Cam",
    age: 24
}
console.log(Object.keys(obj));

//3
for (let elem in obj){
    console.log(elem);
}

//4
for (let elem in obj) {
    console.log(obj[elem])
};

//5
let table = Object.values(object);
table.forEach((element, i) => {
    console.log(i);
});

//6
recup.forEach((e, i) => {
    e.textContent = Object.values(obj)[i];
});