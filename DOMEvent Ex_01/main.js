// 3
let button = document.createElement("button");
button.textContent = "Cliquez ici";
button.setAttribute("style", "background-color : black; color : white; width: 100px; height : 40px");
let body = document.querySelector("body");
body.appendChild(button);

let h1 = document.createElement("h1")
let i = 1;
button.addEventListener("click", () => {
    h1.innerHTML = `On m'a cliqué dessus ${i} fois`;
    body.appendChild(h1);
    i++;
});

// 4
let button_2 = document.createElement("button");
button_2.textContent = "Coucou";
button_2.setAttribute("style", "background-color : green; color : white; width: 100px; height : 40px");
body.appendChild(button_2);


button_2.addEventListener("click", () => {
    let button_3 = document.createElement("button");
    button_3.textContent = "Ex04";
    button_3.setAttribute("style", "background-color : red; color : white; width: 100px; height : 40px");
    body.appendChild(button_3);
   
});

//5
let button_4 = document.createElement("button");
button_4.innerText = "Modifier couleur";
button_4.setAttribute("style", "background-color: yellow; width: 150px; height : 40px");
body.appendChild(button_4);

let p = document.createElement("p");
p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis itaque repudiandae!";
p.setAttribute("style", "color: green");
body.appendChild(p);

button_4.addEventListener("click", () => {
    p.removeAttribute("style");
});

//6

/* Etape 1 */
let button_5 = document.createElement("button");
button_5.innerText = "Je lance une fonction";
button_5.setAttribute("style", "background-color: pink; width: 200px; height : 40px");
body.appendChild(button_5);

let h2 = document.createElement("h2");
h2.textContent = "Je suis un h2";
h2.setAttribute("style", "color: purple");
button_5.addEventListener("click", () => {
    body.appendChild(h2);
    body.appendChild(modifier);
    
});

/* Etape 2 */
let modifier = document.createElement("button");
modifier.innerText = "Modifier le titre Exo 06";
modifier.setAttribute("style", "background-color: grey, color: white; width: 200px; height: 40px ");

modifier.addEventListener("click", () => {
    modifier.innerText = "Modifier le titre";
    modifier.setAttribute("style", "color: red; width: 200px; height: 40px ");
})
