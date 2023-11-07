import {kokonaistunnit} from "../data/kokonaistunnit.js";
import { tiimi1,tiimi2 } from "../data/tiedot.js";



function näytä_raportit(){
    let tiiminimi = document.querySelector("#solmu option:checked").value;
    let tiimi;
    let yhteensä = 0
    if (tiiminimi == "tiimi1"){
        tiimi = tiimi1
    }
    else if (tiiminimi == "tiimi2"){
        tiimi = tiimi2
    }


    const jäsenet = []
    for (let jäsen of tiimi.jasenet) {
        jäsenet.push(jäsen.nimi)
    }

    let alkupvm = new Date(document.getElementById("alkupvm").value);
    let loppupvm = new Date(document.getElementById("loppupvm").value);


    const tuntisummat = []
    const värit = []

    for (let i of kokonaistunnit){
        let päivämärä = new Date(i.pvm)
        if (jäsenet.includes(i.nimi) && päivämärä >= alkupvm && päivämärä <= loppupvm){
            if (i.nimi in tuntisummat) {
                tuntisummat[i.nimi] += i.tunteja
            }
            else{
                tuntisummat[i.nimi] = i.tunteja
                värit[i.nimi] = Math.floor(Math.random()*16777215).toString(16);
            }
            yhteensä += i.tunteja
        }
    }


    //Pylväs kaavio
    var canvas = document.getElementById("pylväskaavio");
    var konteksti = canvas.getContext("2d");

    konteksti.clearRect(0, 0, 10300, canvas.height);
    konteksti.save();

    let lisätävä = 0

    for (let nimi in tuntisummat) {
        let tunnit = tuntisummat[nimi]

        //var väri = Math.floor(Math.random()*16777215).toString(16);
        konteksti.fillStyle = "#" + värit[nimi]

        let laskuri1 = tunnit
        konteksti.fillRect(10 + lisätävä, 10+250-laskuri1, 50, laskuri1)
        konteksti.font="italic 15px Times New Roman";
        konteksti.textAlign = "center";
        konteksti.fillText( nimi, 30 +lisätävä, 300);
        konteksti.fillText( tunnit + "h", 30 +lisätävä, 320);
        lisätävä += 80
    }


    konteksti.restore()


    //Ympyrä kavio
    var canvas2 = document.getElementById("ympyräkaavio");
    var konteksti2 = canvas2.getContext("2d");

    let alkukulma = 0
    let korkeus = 150

    konteksti2.clearRect(0, 0, 4000, 4000)

    for (let nimi in tuntisummat) {
        let tunnit = tuntisummat[nimi]
        let prosenti = tunnit/yhteensä

        //var väri = Math.floor(Math.random()*16777215).toString(16);
        konteksti2.fillStyle = "#" + värit[nimi]

        konteksti2.beginPath();
        konteksti2.arc(150, 200, 100, alkukulma, alkukulma + prosenti * 2 * Math.PI);
        konteksti2.lineTo(150, 200)
        konteksti2.closePath()
        konteksti2.fill()
        alkukulma += prosenti * 2 * Math.PI

        konteksti2.fillRect(270, korkeus, 10, 10)
        konteksti2.fillText( nimi, 290, korkeus +9);
        korkeus +=30
    }


}


document.getElementById("hae").addEventListener("click", näytä_raportit)


document.getElementById("sisa").addEventListener("mouseenter", function() {
    document.getElementById("sisa").innerHTML = "666 casino on Tosi hyvä paikka";
})
document.getElementById("sisa").addEventListener("mouseleave", function() {
    document.getElementById("sisa").innerHTML = "Työaikaseuranta";
})






































    //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin    //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin    //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
	    //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin    //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin    //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin
        //responsivinen kakka on laitetu persesen takaisin
    //responsivinen kakka on laitetu persesen takaisin