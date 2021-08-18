const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
    },

    breakpoints: {
        540: {
            slidesPerView: 2,
        }
    }
});

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('menu-btn-active');
    menu.classList.toggle('header-active');
})