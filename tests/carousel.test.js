const { showSlide, nextSlide, prevSlide, getCurrentSlide } = require('../scripts');

beforeEach(() => {
    document.body.innerHTML = `
        <div class="carousel">
            <div class="carousel-images">
                <img src="photos/day1_photo1.jpg" class="carousel-item">
                <img src="photos/day2_photo1.jpg" class="carousel-item">
            </div>
        </div>
    `;
});

test('showSlide displays the correct slide', () => {
    showSlide(0);
    expect(document.querySelector('.carousel-images').style.transform).toBe('translateX(0%)');
    showSlide(1);
    expect(document.querySelector('.carousel-images').style.transform).toBe('translateX(-100%)');
});

test('nextSlide advances to the next slide', () => {
    showSlide(0);
    nextSlide();
    expect(document.querySelector('.carousel-images').style.transform).toBe('translateX(-100%)');
});

test('prevSlide goes to the previous slide', () => {
    showSlide(1);
    prevSlide();
    expect(document.querySelector('.carousel-images').style.transform).toBe('translateX(0%)');
});
