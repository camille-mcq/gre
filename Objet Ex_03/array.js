// Ex
let vielle_dame = {
    age: 80,
    nom: {
        prenom: "murielle",
        nom: "rodriguez",
   },
    moral: "mal",
    objet: "canne",
    parler (){
        if (this.moral == "mal" ) {
            alert("Vous me dérangrez bande salade rabes " + "coup de " + this.objet)
        } else{
            alert("bonjour " + vieil_homme.nom)
        }
    }
}

let vieil_homme = {
    nom: "Luc",
    adoucir (){
        vielle_dame.moral = "bien"
    }
}

vielle_dame.parler()
vieil_homme.adoucir()
vielle_dame.parler()