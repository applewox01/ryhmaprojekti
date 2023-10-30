import {kokonaistunnit} from "../data/kokonaistunnit.js";


const tuntisummat = []
for (let i of kokonaistunnit){
    if (i.nimi in tuntisummat) {
        tuntisummat[i.nimi] += i.tunteja
    }
    else{
        tuntisummat[i.nimi] = i.tunteja
    }

}

for (let nimi in tuntisummat) {
    let tunnit = tuntisummat[nimi]
}

var canvas = document.getElementById("pylväskaavio");
var konteksti = canvas.getContext("2d");


function piirra() {

    konteksti.clearRect(0, 0, canvas.width, canvas.height);
    konteksti.save();
    konteksti.strokeRect(140,10, 50, 100)
    konteksti.fillStyle = "#6E2C00";

    if (laskuri1 <= prosentia){
        laskuri1 += 1
    }
    konteksti.fillRect(140, 10+100-laskuri1, 50, laskuri1)

    konteksti.strokeRect(240,10, 50, 100)
    konteksti.fillStyle = "red";
    if (laskuri2 <= prosentib){
        laskuri2 += 1
    }
    konteksti.fillRect(240, 10+100-laskuri2, 50, laskuri2)

    konteksti.strokeRect(340,10, 50, 100)
    konteksti.fillStyle = "blue";
    if (laskuri3 <= prosentic){
        laskuri3 += 1
    }
    konteksti.fillRect(340, 10+100-laskuri3, 50, laskuri3)

    konteksti.restore();
}


document.getElementById("hae").addEventListener("click", function(p){
    p.preventDefault()
    document.getElementById("varastusalusta").style.display="inline-block"
    let ding = document.getElementById("kakkaaudio")
    ding.play();
    prosentia = parseInt(document.getElementById("nimi1").value)
    prosentib = parseInt(document.getElementById("nimi2").value)
    prosentic = parseInt(document.getElementById("nimi3").value)

    laskuri1 = 0
    laskuri2 = 0
    laskuri3 = 0

    
    setInterval(piirra, 100);
})


