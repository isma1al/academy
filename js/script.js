const anchors = document.querySelectorAll('.menu__list-link');



const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu--active');

});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('menu--active');
});

anchors.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.remove('menu--active');
        const blockId = link.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        });
    });
});