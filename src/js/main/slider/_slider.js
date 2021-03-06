const wrapperr = document.querySelector('.section-comment__sliders');
const block = document.querySelector('.section-comment__wrapper-sliders');
const slide = document.querySelectorAll('.section-comment__slide');
const section = document.querySelector('.section-comment')

let x;
let startX;
let pressed = false;
let size = 0;

let startDragMouse = (event => {
    pressed = true;
    startX = event.clientX;
})

block.addEventListener('mousedown', startDragMouse)

let startDragTouch = (event => {
    pressed = true;
    startX = event.changedTouches[0].clientX;
})


block.addEventListener('touchstart', startDragTouch)

let draggerMouse = (event) => {
    if (!pressed) return
    event.preventDefault();
    x = event.clientX - startX;
    wrapperr.style.transform = `translate3d(${x + size}px, 0, 0)`
    checkBoundary()
}

block.addEventListener('mousemove', draggerMouse)

let draggerTouch = (event) => {
    if (!pressed) return
    event.preventDefault();
    x = event.changedTouches[0].clientX - startX;
    wrapperr.style.transform = `translate3d(${x + size}px, 0, 0)`
    
    checkBoundary()
}

block.addEventListener('touchmove', draggerTouch)

let endDrag = (event) => {
    const inner = wrapperr.getBoundingClientRect();
    const outer = block.getBoundingClientRect();
    event.preventDefault()
    pressed = false;
    size = x + size;
    if ((x + size) > 0 ) {
        wrapperr.style.transform = `translate3d(0, 0, 0)`
        x = 0;
        size = 0;
    }

    if ( (x + size)  < (outer.width - inner.width)){
        wrapperr.style.transform = `translate3d(${outer.width - inner.width }px, 0, 0)`
        x = 0;
        size = outer.width - inner.width;
    }
}

section.addEventListener('mouseup', endDrag)
section.addEventListener('touchend', endDrag)

function checkBoundary(){
    const inner = wrapperr.getBoundingClientRect();
    const outer = block.getBoundingClientRect();
    if ((x + size) > 0 ) {
       return wrapperr.style.transform = `translate3d(${x / 20}px, 0, 0)`;
    }
    if ((x + size) < (outer.width - inner.width)) {
        wrapperr.style.transform = `translate3d(${x / 20 + (outer.width - inner.width)}px, 0, 0)`
    }
}

