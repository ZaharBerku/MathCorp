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