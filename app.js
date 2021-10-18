const menu = document.getElementById("menu-bar")
const nav = document.getElementById("nav-menu")

menu.addEventListener('click', ()=>{
    nav.classList.toggle('toggle-nav')
    if(nav.classList.contains('toggle-nav')){
        menu.style.transform = 'rotate(180deg)'
        menu.src = "images/icon-close.svg"
    }else{
    menu.src = "images/icon-hamburger.svg"
    }
})