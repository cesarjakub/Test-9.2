class Auto{
    constructor(rok_vyroby, znacka, model, kilometry){
        this.rok_vyroby = rok_vyroby;
        this.znacka = znacka;
        this.model = model;
        this.kilometry = kilometry;
    }
}

class Autoservis{
    constructor(auta, poleAut){
        this.auta = auta;
        this.poleAut = poleAut;
    }

    addAuto(auto){
        this.poleAut.push(auto);
    }

    removeAuto(auto){
        this.poleAut.remove(auto)
    }

    vypisAut(params) {
        let text = "";
        this.poleAuto.forEach(e => {
            text += "zacka: "+e.auto.znacka + ", rok vydani: "+e.auto.rok_vyroby+", model: "+e.auto.model+", kilometry: "+e.auto.kilometry;
        });
        return text;
    }
}

const vypisCar = document.querySelector(".vypis"); 
const karticky = document.querySelector(".karticky")
const submit = document.querySelector(".submitForm")
let zn;
let mod;
let rok;
let kil;

function getFormValue(){
    zn = document.querySelector(".znackaForm").value;
    mod = document.querySelector(".modelForm").value;
    rok = document.querySelector(".rokForm").value;
    kil = document.querySelector(".kilometryForm").value;
}

function prirad(){
    getFormValue();
    let a 
}

function karticka(){
    let div = document.createElement('div');
    div.className = "cards";
    karticky.appendChild(div);
    return div;
}

vypisCar.addEventListener("click", function(){
    karticka();
});

