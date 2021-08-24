

var css = document.querySelector("h3");
var gradient1 = document.querySelector(".gradient1");
var gradient2 = document.querySelector(".gradient2");
var body = document.getElementsByTagName("body")[0];

gradient1.addEventListener("input", function() {
    color_change();
    set_h3();
})

gradient2.addEventListener("input", function () {
    color_change();
    set_h3();
})

function color_change() {
    body.style.background = 
    "linear-gradient(to right, " + 
    gradient1.value +
    ", " + 
    gradient2.value + 
    ")";
}

function set_h3() {
    css.textContent = gradient1.value + " to " + gradient2.value;
}