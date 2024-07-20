// main.js
document.addEventListener("DOMContentLoaded", function() {
    function checkWindowSize() {
        const indicator = document.querySelector('.scroll-indicator');
        if (window.innerWidth < 768) {
            indicator.style.display = 'none';
        } else {
            indicator.style.display = 'block';
        }
    }

    window.addEventListener('resize', checkWindowSize);
    checkWindowSize();
});

// Carroussel

// main.js
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel-images');
    const totalSlides = slides.children.length;

    // Ensure index is within bounds
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Update transform property to show the current slide
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialize carousel
showSlide(currentIndex);

// Optional: Auto-slide functionality
setInterval(nextSlide, 3000);
