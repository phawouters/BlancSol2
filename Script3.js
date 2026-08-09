// JavaScript source code
document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("clickMe");
    var greeting = document.getElementById("greeting");

    button.addEventListener("click", function () {
        greeting.textContent = "You clicked the button!";
    });
});
