document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    /* 
       Note: The HTML structure for mobile menu overlay isn't fully implemented 
       in the initial markup, but we handle the button click here for future expansion.
    */
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    mobileBtn.addEventListener('click', () => {
        // Toggle mobile menu logic would go here
        console.log('Mobile menu clicked');
    });

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    // We can add classes to elements we want to animate on scroll

    // Quick Add Button Animation
    const addBtns = document.querySelectorAll('.quick-add');
    addBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const icon = this.querySelector('i');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-check');

            // Update Cart Count
            const badge = document.querySelector('.cart-count');
            let count = parseInt(badge.innerText);
            badge.innerText = count + 1;

            // Reset icon after delay
            setTimeout(() => {
                icon.classList.remove('fa-check');
                icon.classList.add('fa-plus');
            }, 1500);
        });
    });
});
