const nav = document.getElementById('navbar');
window.onscroll = function () { 
    if (window.scrollY >= 200) {
        nav.classList.add("nav-scrolled");
    } else {
        nav.classList.remove("nav-scrolled");
    }
};