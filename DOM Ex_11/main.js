//1
let elements = document.querySelectorAll("#liste-competences>h2");
console.log(elements);

//2
let competences = {
    HTML : 100,
    CSS: 90,
    JS : 70,
    React : 40,
    Laravel : 10
};

let i = 0;
for (let e in competences) {
    elements[i].textContent += `${competences[e]} %`;
    if (competences[e] < 50){
        elements[i].style.backgroundColor = "red";
    } else if (competences[e] > 50 && competences[e] < 100) {
        elements[i].style.backgroundColor = "green";
        elements[i].style.color = "white";
    }
    else if (competences[e] == "100") {
        elements[i].style.backgroundColor = "gold";
    }
    i++;
}

let h2 = document.createElement("h2")
h2.textContent = "je suis un h2";

let body = document.querySelector("body");
body.appendChild(h2);

h2.setAttribute("class", "blue");

let button = document.createElement("button");
button.textContent = "Je suis un boutton";

body.appendChild(button);

let i = 0;
button.addEventListener("click", () => {
    if (i < 3)
    console.log ("je suis un evenement");
    i++
});

//
let inputColor = document.createElement("input");
inputColor.setAttribute("type", "color");

let h1 = document.createElement("h1");
body.append(h1, inputColor);

inputColor.addEventListener("change", () => {
    body.style.backgroundColor = inputColor.value;
});
