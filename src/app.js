import './scss/base.scss'

document.addEventListener('DOMContentLoaded', function () {
    let current = 0,
        slides = document.querySelectorAll(".slides img");

    setInterval(function () {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.opacity = 0;
        }
        current = (current != slides.length - 1) ? current + 1 : 0;
        slides[current].style.opacity = 1;
    }, 5000); // change every 5 sec

});