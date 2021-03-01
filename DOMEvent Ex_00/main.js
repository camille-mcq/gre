// 1

let button = document.createElement("button");
button.textContent = "Je suis un bouton";
button.setAttribute("style", "background-color : blue; color : white");
let body_html = document.querySelector("body");
body_html.appendChild(button);

button.addEventListener("click", () => {
    console.log ("j'ai été cliqué");
    
});

// 2
let button_2 = document.createElement("button");
button_2.textContent = "Je suis un second bouton";
button_2.setAttribute("style", "background-color : green; color : white");
body_html.appendChild(button_2);

let i = 1;
button_2.addEventListener("click", () => {
    console.log ("J'ai été cliqué " + i + "fois");
    i++;
});

