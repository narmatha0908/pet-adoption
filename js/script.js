document.addEventListener("DOMContentLoaded", () => {
    const currentUser = localStorage.getItem('currentUser');

    // --- 1. Universal Authentication & Navigation Logic ---
    function handleAuthNav() {
        const loginNavItem = document.getElementById('login-nav-item');
        const dashboardNavItem = document.getElementById('dashboard-nav-item');
        const logoutNavItem = document.getElementById('logout-nav-item');
        
        if (currentUser) {
            if (loginNavItem) loginNavItem.style.display = 'none';
            if (dashboardNavItem) dashboardNavItem.style.display = 'block';
            if (logoutNavItem) logoutNavItem.style.display = 'block';
        } else {
            if (loginNavItem) loginNavItem.style.display = 'block';
            if (dashboardNavItem) dashboardNavItem.style.display = 'none';
            if (logoutNavItem) logoutNavItem.style.display = 'none';
        }
    }

    // Attach logout functionality to any logout button found
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        });
    }

    // --- 2. Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // --- 3. Homepage Carousel Logic ---
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        const slides = document.querySelectorAll('.carousel-slide');
        let currentSlide = 0;

        if (slides.length > 1) {
            const showSlide = (index) => {
                slides.forEach((slide, i) => {
                    slide.classList.toggle('active', i === index);
                });
            };

            setInterval(() => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }, 4000); // Change slide every 4 seconds
        }
    }

    // --- Run universal functions ---
    handleAuthNav();
});