document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Mobile Menu Toggle (only if elements exist)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');

    if (mobileBtn && mobileOverlay) {
        const toggleMobileMenu = () => {
            const isActive = mobileBtn.classList.contains('active');
            mobileBtn.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            mobileBtn.setAttribute('aria-expanded', !isActive);

            // Prevent body scroll when menu is open
            document.body.style.overflow = mobileOverlay.classList.contains('active') ? 'hidden' : '';
        };

        mobileBtn.addEventListener('click', toggleMobileMenu);

        // Add keyboard support
        mobileBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMobileMenu();
            }
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-menu-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileBtn.classList.remove('active');
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking outside
        mobileOverlay.addEventListener('click', (e) => {
            if (e.target === mobileOverlay) {
                mobileBtn.classList.remove('active');
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Newsletter Form Handler
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();

            if (!email) {
                alert('Please enter your email address.');
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // In a real application, this would send the email to a server
            alert('Thank you for subscribing! You\'ll receive updates about our latest products.');
            emailInput.value = '';
        });
    }

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    window.auraObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                window.auraObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial observation
    document.querySelectorAll('.fade-in-up').forEach(el => window.auraObserver.observe(el));

    // Mutation Observer to handle dynamic content
    const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) { // Element node
                    if (node.classList.contains('fade-in-up')) {
                        window.auraObserver.observe(node);
                    }
                    node.querySelectorAll('.fade-in-up').forEach(el => window.auraObserver.observe(el));
                }
            });
        });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Quick Add Button Animation
    const addBtns = document.querySelectorAll('.quick-add');
    addBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const icon = this.querySelector('i');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-check');

            // Reset icon after delay
            setTimeout(() => {
                icon.classList.remove('fa-check');
                icon.classList.add('fa-plus');
            }, 1000);
        });
    });
});
