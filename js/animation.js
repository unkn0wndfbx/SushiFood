const slideTitre = document.querySelector('.anim_scroll');
const slideTitreReverse = document.querySelector('.anim_scroll_reverse');
const sliderMenu = document.querySelector('.menu');

// fonction : afficher titre 1 au scroll
window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;

    const top = slideTitre.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + top).toFixed() - clientHeight * .75) {
        slideTitre.classList.add('titre_anim');
    }
})

// fonction : afficher titre 2 au scroll
window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;

    const top = slideTitreReverse.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + top).toFixed() - clientHeight * .7) {
        slideTitreReverse.classList.add('titre_anim');
    }
})

// fonction : afficher menu au scroll
window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;

    const top = sliderMenu.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + top).toFixed() - clientHeight * .7) {
        sliderMenu.classList.add('menu_anim');
    }
})