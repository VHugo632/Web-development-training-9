// Elements

const body = document.body;
const menu_icon = document.getElementById("menu_icon");
const menu = document.getElementById("menu");
const close_menu_icon = document.getElementById("close_menu_icon");

// Functions

function openMenu() {   // To keep the filter transition, I have to put a short delay (1ms) because of display property (which don't keep transitions)
    menu.style.display = "block";
    body.style.overflowY = "hidden";
    setTimeout(function() {
        menu.style.filter = "opacity(100%)";
    }, 1)
}
function closeMenu() {  // To keep the filter transition, I have to put the same delay as written in CSS (0.2s = 200ms)
    menu.style.filter = "opacity(0%)";
    body.style.overflowY = "visible";
    setTimeout(function() {
        menu.style.display = "none";
    }, 200)
}

// Events

menu_icon.addEventListener("click", openMenu);
close_menu_icon.addEventListener("click", closeMenu);