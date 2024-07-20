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
