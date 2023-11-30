document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.querySelector('.nav-menu');

    burgerMenu.addEventListener('click', function () {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
});

