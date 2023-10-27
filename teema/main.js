document.addEventListener("DOMContentLoaded", function(){
    let hamburger = document.getElementById("HeaderListButton");
    let list = document.getElementById("HValikko");
    let open = false;
    hamburger.addEventListener("click", function(){
        if (open == false) {
            open = true;
            list.className = "show"
        } else {
            open = false;
            list.className = "hide"
        };
    });
});