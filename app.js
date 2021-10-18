const menu = document.getElementById("menu")
const menu_bar = document.getElementById("menu-bar")
const nav = document.getElementById("nav-menu")

menu.addEventListener('click', ()=>{
    nav.classList.toggle('toggle-nav')
    if(nav.classList.contains('toggle-nav')){
        menu_bar.src = "images/icon-close.svg"
    }else{
        menu_bar.src = "images/icon-hamburger.svg"
    }
})