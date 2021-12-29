const hideTeacherBtn = document.querySelector('.section-our-teachers__btn-teacher');
const allBlockWithteacher = document.querySelectorAll('.block-about-teacher')


let hideTeacherInfo = () =>{
    allBlockWithteacher.forEach((element) => {
         if (!element.classList.contains('block-about-teacher--active')) {
            element.classList.add('block-about-teacher--active')
              hideTeacherBtn.classList.remove('btn-teacher--show')
         }
            })
}

hideTeacherBtn.addEventListener('click', hideTeacherInfo);


//Slider


const wrapperr = document.querySelector('.section-comment__sliders');
const block = document.querySelector('.section-comment__wrapper');
const slide = document.querySelectorAll('.section-comment__slide');


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
    x = event.clientX - startX;
    wrapperr.style.transform = `translate3d(${x + size}px, 0, 0)`

    checkBoundary()
}

block.addEventListener('mousemove', draggerMouse)

let draggerTouch = (event) => {
    if (!pressed) return
    x = event.changedTouches[0].clientX - startX;
    wrapperr.style.transform = `translate3d(${x + size}px, 0, 0)`

    // checkBoundary()
}

block.addEventListener('touchmove', draggerTouch)

let endDrag = () => {
    // const inner = wrapperr.getBoundingClientRect();
    // const out = block.getBoundingClientRect();
    pressed = false;
    size = x + size;
    // if (inner.right > inner.width) {
    //     wrapperr.style.transform = `translate3d(0, 0, 0)`
    // }
    // if (inner.left  < -out.width) {
    //     wrapperr.style.transform = `translate3d(-${out.width}px, 0, 0)`
    // }
}

window.addEventListener('mouseup', endDrag)
window.addEventListener('touchend', endDrag)

function checkBoundary(){
    const inner = wrapperr.getBoundingClientRect();
    const out = block.getBoundingClientRect();
    const different = 82;
    if (inner.right - different > inner.width) {
        wrapperr.style.transform = `translate3d(0, 0, 0)`
    }
    if (inner.left  < different - out.width) {
        wrapperr.style.transform = `translate3d(-${out.width}px, 0, 0)`
    }
}





















function testWebP(callback) {

    let webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });


