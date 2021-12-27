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

hideTeacherBtn.addEventListener('click', hideTeacherInfo)




















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


