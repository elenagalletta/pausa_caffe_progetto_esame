const menu = document.getElementById('hamburger-menu');
const menuButton = document.getElementById('hamburger-button');
const menuXmark = document.getElementById('menu-xmark');

function menuHandler(){
    if (!menu.classList.contains("menu-visible")) {
        menu.classList.add("menu-visible");
    } else {
        menu.classList.remove("menu-visible");
    }
}

menu.onclick = menuHandler;
menuButton.onclick = menuHandler;
menuXmark.onclick = menuHandler;