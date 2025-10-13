        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Auto-rotate priests carousel (if needed for other sections)
        setInterval(showNextImage, 10000);
// Hero Carousel
const carousel = document.getElementById('church-carousel');
        let currentIndex = 0;
        function showNextImage() {
const items = document.querySelectorAll('.carousel-item');
            items[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % items.length;
            items[currentIndex].classList.add('active');
        }
        // Auto-rotate hero carousel
        let carouselInterval = setInterval(showNextImage, 10000);
// Initialize carousels and feather icons
        document.addEventListener('DOMContentLoaded', function() {
});