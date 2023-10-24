

document.addEventListener("DOMContentLoaded", function(){
    let uusi = document.getElementById("uusi");
    let cloneDefault = document.getElementById("cloneDefault");

    let kirjausLista = document.getElementById("kirjausLista");

    let removeParent = function() {

    };

    uusi.addEventListener("click",function(){
        let clone = cloneDefault.cloneNode(true);
        kirjausLista.appendChild(clone);
        let button = document.createElement("button");
        button.innerHTML = "Poista";
        button.addEventListener("click", removeParent);
        button.className = "poistaButton";
        clone.appendChild(button);

    });


});