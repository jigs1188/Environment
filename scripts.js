/**
 * @type {number}
 */
let currentSlide = 0;

/**
 * Shows the slide at the specified index.
 * @param {number} index - The index of the slide to show.
 */
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

/**
 * Shows the next slide.
 */
function nextSlide() {
    showSlide(currentSlide + 1);
}

/**
 * Shows the previous slide.
 */
function prevSlide() {
    showSlide(currentSlide - 1);
}

/**
 * Automatically slides to the next slide every 3 seconds.
 */
function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 3000); // Change slide every 3 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);
    showSlide(currentSlide);
    autoSlide();
});

// Export functions for testing
module.exports = {
    showSlide,
    nextSlide,
    prevSlide,
    currentSlide
};
