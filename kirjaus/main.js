

document.addEventListener("DOMContentLoaded", function(){
    let uusi = document.getElementById("uusi");
    let cloneDefault = document.getElementById("cloneDefault");
    const laheta = document.getElementById("laheta");
    laheta.hidden = true;

    let kirjausLista = document.getElementById("kirjausLista");

    let removeParent = function(event) {
        event.target.parentNode.remove();
    };

    const pvmr = document.getElementById("pvmr");
    const nimi = document.getElementById("nimi");

    const kuvausYlin = document.getElementById("kuvausYlin");
    const tuntiYlin = document.getElementById("tuntiYlin");

    let check = function() {
        let valid = true;
        if (pvmr.value == "" || nimi.value == "") {
            valid = false;
        };
        if (kuvausYlin.value == "") {
            valid = false;
        };
        if (tuntiYlin.value > 12 || tuntiYlin.value < 0 || isNaN(tuntiYlin.value)) {
            valid = false;
        };
        if (valid == true) {
            laheta.hidden = false;
        } else {
            laheta.hidden = true;
        }
    };
    tuntiYlin.addEventListener("input", check);
    kuvausYlin.addEventListener("input", check);

    pvmr.addEventListener("input", check);
    nimi.addEventListener("input", check);

    //Lähetä-nappi on poissa käytöstä siihen asti, kunnes käyttäjä on antanut nimen, valinnut päivämäärän ja syöttänyt ainakin yhdelle riville (ylimmälle) tuntikirjauksen. 
    //Päivän kokonaistuntimäärä ei myöskään saa olla yli 12 tuntia eikä yksikään tuntikenttä saa olla negatiivinen luku (tai jotain muuta kuin luku).
    //responsivinen kakka on laitetu persesen takaisin
    

    uusi.addEventListener("click",function(){
        let clone = cloneDefault.cloneNode(true);
        const attr = clone.getAttributeNode("id");
        clone.removeAttributeNode(attr);
        kirjausLista.appendChild(clone);
        let button = document.createElement("button");
        button.innerHTML = "Poista";
        button.addEventListener("click", removeParent);
        button.className = "poistaButton";
        clone.appendChild(button);

    });


});










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