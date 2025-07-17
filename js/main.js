// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Set active link based on current page
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    navItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        if (currentPage === itemHref) {
            item.classList.add('active');
            navItems.forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });
        }
    });
});