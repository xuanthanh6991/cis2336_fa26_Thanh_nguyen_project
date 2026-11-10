
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", function () {
    menu.classList.toggle("show");
});

document.addEventListener("click", function (event) {
    if (event.target !== menuButton) {
        menu.classList.remove("show");
    }
});
