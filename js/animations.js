// Animation and Interaction Utilities

document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    initAnimations();
    
    // Initialize scroll effects
    initScrollEffects();
    
    // Initialize smooth scroll
    initSmoothScroll();
});

// Initialize animations on page load
function initAnimations() {
    // Add fade-in animation to hero sections
    const heroes = document.querySelectorAll('.hero-content, .editorial-hero, .boutique-hero, .gallery-hero');
    heroes.forEach(hero => {
        hero.classList.add('fade-in');
    });

    // Add staggered animations to grid items
    const gridItems = document.querySelectorAll('.template-card, .gallery-item, .service-card, .journal-card');
    gridItems.forEach((item, index) => {
        item.classList.add('fade-in-up');
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Add hover effects
    const hoverElements = document.querySelectorAll('.btn, .nav-links a, .social-links a');
    hoverElements.forEach(element => {
        element.classList.add('hover-lift');
    });
}

// Initialize scroll-based animations
function initScrollEffects() {
    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe elements with animate-on-scroll class
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    scrollElements.forEach(element => {
        observer.observe(element);
    });

    // Header scroll effect
    const header = document.querySelector('.site-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// Initialize smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Gallery image loading animation
function initImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.classList.add('loading');
        
        img.onload = function() {
            this.classList.remove('loading');
            this.classList.add('fade-in');
        };
    });
}

// Form submission animation
function initFormAnimations() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading state
            this.classList.add('loading');
            
            // Simulate form submission
            setTimeout(() => {
                this.classList.remove('loading');
                showSuccessMessage(this);
            }, 1500);
        });
    });
}

// Show success message after form submission
function showSuccessMessage(form) {
    const message = document.createElement('div');
    message.className = 'success-message fade-in';
    message.textContent = 'Thank you for your message. We\'ll be in touch soon!';
    
    form.insertAdjacentElement('afterend', message);
    form.reset();
    
    setTimeout(() => {
        message.remove();
    }, 5000);
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initScrollEffects();
    initSmoothScroll();
    initImageLoading();
    initFormAnimations();
});
