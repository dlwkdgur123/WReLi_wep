document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".carousel-item");
    const itemCount = items.length;
    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove('prev', 'prev-2', 'active', 'next', 'next-2');
            const offset = (index - currentIndex + itemCount) % itemCount;

            if (offset === 0) {
                item.classList.add('active');
                item.style.transform = 'translateX(0) scale(1)';
                item.style.zIndex = '2';
            } else if (offset === 1 || offset === itemCount - 1) {
                item.classList.add('next');
                item.style.transform = `translateX(${offset === 1 ? '120%' : '-120%'}) scale(0.7)`;
                item.style.zIndex = '1';
            } else if (offset === 2 || offset === itemCount - 2) {
                item.classList.add('next-2');
                item.style.transform = `translateX(${offset === 2 ? '150%' : '-150%'}) scale(0.5)`;
                item.style.zIndex = '0';
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % itemCount;
        updateCarousel();
    }

    setInterval(nextSlide, 3000);

    updateCarousel();
});
