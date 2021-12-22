const btnBurger = document.querySelector('.section-navigation__btn-burger');
const lineBtnBurger = document.querySelector('.section-navigation__burger-menu-line');
const menu = document.querySelector('.section-navigation__navigation-menu');

let activeMenuBurger = (event) => {
    if (event.currentTarget.classList.contains('btn-burger')) {
        document.body.classList.remove('stop-scroll')
        menu.classList.remove('navigation-menu')
        lineBtnBurger.classList.remove('burger-menu-line')
        return btnBurger.classList.remove('btn-burger')
    }
    document.body.classList.add('stop-scroll')
    btnBurger.classList.add('btn-burger');
    lineBtnBurger.classList.add('burger-menu-line')
    menu.classList.add('navigation-menu')
}


btnBurger.addEventListener('click', activeMenuBurger)