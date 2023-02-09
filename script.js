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
            text += "<p>Zacka: "+ e.auto.znacka+"</p><p>Rok vydani: "+e.auto.rok_vyroby+"</p><p>Model: "+e.auto.model +"</p><p>Kilometry: "+e.auto.kilometry+"km</p>";
        });
        return text;
    }
}

const vypisCar = document.querySelector(".vypis"); 
const kar = document.querySelector(".karticky")
const submit = document.querySelector(".pridat")
const vymazat = document.querySelector(".vymazat");
let zn;
let mod;
let rok;
let kil;
let b;
let a;

function getFormValue(){
    zn = document.querySelector(".znackaForm").value;
    mod = document.querySelector(".modelForm").value;
    rok = document.querySelector(".rokForm").value;
    kil = document.querySelector(".kilometryForm").value;
}
submit.addEventListener("click", function(){
    prirad();
});

function prirad(){
    console.log(getFormValue());
    a = new Auto(rok,zn,mod,kil);
    b = new Autoservis([a]);
}

function karticka(){
    let div = document.createElement('div');
    div.className = "cards";
    div.innerHTML = b.vypisAut;
    kar.appendChild(div);
    vymazat.addEventListener("click",function(){
        div.remove();
        b.removeAuto(a);
    });
    return div;
}

vypisCar.addEventListener("click", function(){
    karticka();
});


function save() {
    localStorage.setItem(karticka, karticka.toDataURL());
  }
  
  function load() {
    
  }

