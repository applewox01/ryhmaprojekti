import { tiimi1, tiimi2 } from "../data/tiedot.js";

function nayttatiimilaiset() {
  document.getElementById("tiimilaiset1").innerHTML=""
    let tiiminimi =  document.querySelector("#tiimival option:checked").value;
    let tiimi;
    if (tiiminimi =="tiimi1"){
        tiimi=tiimi1
    }
  else if (tiiminimi=="tiimi2"){
    tiimi=tiimi2
  }

  for (let jasen of tiimi.jasenet) {
    const laatikko = document.createElement("div");
    
    const teksti = document.createTextNode(jasen.nimi + " " + jasen.rooli);
    laatikko.appendChild(teksti);
    document.getElementById("tiimilaiset1").appendChild(laatikko);
    laatikko.addEventListener("click", function() {
      nayttainfo(jasen)
    })

  }
}


document.getElementById("tiimival").addEventListener("change", nayttatiimilaiset);


function nayttainfo(jasen){
document.getElementById("info").innerHTML = `${jasen.nimi} <br>`
document.getElementById("info").innerHTML += `${jasen.rooli} <br>`
document.getElementById("info").innerHTML += `${jasen.osaaminen} <br>`
document.getElementById("info").innerHTML += `${jasen.kuvaus} <br>`


}
