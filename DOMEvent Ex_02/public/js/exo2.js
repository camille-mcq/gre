// Exo copy-img
    let body = document.querySelector("body");
    // selectionner boutton
    let bouton = document.querySelector("button");
    // pris la DIV 
    let container = document.getElementById("mignon-container");
    let img = document.querySelector("img");


bouton.addEventListener("click", () => {
    let img_copy = img.cloneNode();
    container.appendChild(img_copy)
});

// Ex rm-img 
let div_mignon = document.getElementById("mignon2-container")
let images = div_mignon.querySelectorAll("img");

images.forEach(element => {
    element.addEventListener("click", () => {
            div_mignon.removeChild(element)
        }
    )}
);
        // tant que le tableau.length < 5 on crée élément
        // let i = 0;
        //     while(i < 4 ) {
        //         images[i] = document.createElement("img");
        //         images[i].setAttribute("src", "../images/mignons2.gif");
        //         images[i].setAttribute("width", "200");
        //         div_mignon.appendChild(images[i]);
        //         i++  
        //     }
        // => remettre les images du début (add de 5 img)

//         }
//     })
// })

// Ex Balise LI
let liste_0 = document.querySelector("li");
let liste_1 = document.createElement("li"); //nouveau LI
liste_1.textContent = "li num 2 coucou";

liste_0.insertAdjacentElement("afterend", liste_1);

// Ex Li from Input
let input = document.querySelector('.form-control');
let button = document.querySelector('.form-row>div>button');
let liste = document.querySelector('#exo-li-from-input>ul');

button.addEventListener('click', () => {
    let li4 = document.createElement('li')
    li4.innerText = input.value;
    liste.insertBefore(li4, document.querySelectorAll("#exo-li-from-input>ul>li")[0]);
    input.value = "";
})

// dernier_proposition (solution below);
let order = false
let edit = document.querySelector('#exo-li-from-input>button')
edit.addEventListener('click', () => {
    let listeTab = document.querySelectorAll("#exo-li-from-input>ul>li")
    if(order == false){
        edit.className = "btn btn-success mb-4"
        listeTab[0].addEventListener('click', () => {
            liste.addEventListener('click', (e) => {
                let temp = listeTab[0].innerText;
                listeTab[0].innerText = e.target.innerText;
                e.target.innerText = temp
            })
        }, false)
        order = true
    }else if(order == true){
        edit.className = "btn btn-light mb-4";
        listeTab[0].removeEventListener('click', () => {
            liste.addEventListener('click', (e) => {
                let temp = listeTab[0].innerText;
                listeTab[0].innerText = e.target.innerText
                e.target.innerText = temp
            })
        }, false)
    }      
})

// 3 correction 
let newLi = document.createElement("li");
newLi.textContent = "li num 2";

let ul = document.querySelector("#exo-add-li ul");
ul.firstElementChild.insertAdjacentElement("afterend", newLi);
