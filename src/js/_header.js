const btnBurger = document.querySelector('.section-navigation__btn-burger');
const lineBtnBurger = document.querySelector('.section-navigation__burger-menu-line');
const menu = document.querySelector('.section-navigation__navigation-menu');

let activeMenuBurger = (event) => {
    if(btnBurger.classList.contains('btn-burger')){
        menu.classList.remove('navigation-menu')
        lineBtnBurger.classList.remove('burger-menu-line')
       return event.target.classList.remove('btn-burger')
    }
    event.target.classList.add('btn-burger');
    lineBtnBurger.classList.add('burger-menu-line')
    menu.classList.add('navigation-menu')
}


btnBurger.addEventListener('click', activeMenuBurger)