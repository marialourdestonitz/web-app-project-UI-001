const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[close-button]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < triggerOpen.length; i++) {
    let currentId = triggerOpen[i].dataset.target,
        targetEl = document.querySelector(`#${currentId}`)

    const openData = function () {
        targetEl.classList.remove('active');
        overlay.classList.remove('active');
    };

    triggerOpen[i].addEventListener('click', function () {
        targetEl.classList.add('active');
        overlay.classList.add('active');
    });

    targetEl.querySelector('[close-button]').addEventListener('click', openData);
    overlay.addEventListener('click', openData);
};

/*MOBILE*/
const submenu = document.querySelectorAll('.child-trigger');
submenu.forEach((menu) => menu.addEventListener('click', function (e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('active') : null);
    this.closest('.has-child').classList.toggle('active');
}));


/*--SLIDER--*/

const swiper = new Swiper('.sliderbox', {
    loop: true,
    effect: 'fade',
    autoHeight: true,
    slidesPerView: "auto",
    spaceBetween: 30,


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


