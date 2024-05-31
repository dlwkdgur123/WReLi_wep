document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let index = 0;

    function showSlide(n) {
        if (n >= dots.length) {
            index = 0;
        } else if (n < 0) {
            index = dots.length - 1;
        } else {
            index = n;
        }

        slides.style.transform = `translateX(${-index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function nextSlide() {
        showSlide(index + 1);
    }

    function prevSlide() {
        showSlide(index - 1);
    }

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => showSlide(i));
    });

    showSlide(index);
});
