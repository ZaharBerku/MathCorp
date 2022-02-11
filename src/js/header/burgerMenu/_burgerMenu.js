const btnBurger = document.querySelector('.section-navigation__btn-burger');
const lineBtnBurger = document.querySelector('.section-navigation__burger-menu-line');
const menu = document.querySelector('.section-navigation__navigation-menu');

let activeMenuBurger = () => {
        document.body.classList.toggle('stop-scroll')
        menu.classList.toggle('navigation-menu')
        lineBtnBurger.classList.toggle('burger-menu-line')
        btnBurger.classList.toggle('btn-burger')
}


btnBurger.addEventListener('click', activeMenuBurger)