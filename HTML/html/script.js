// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = window.innerWidth <= 768 ? 80 : 0; // Account for sticky header on mobile
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Form Handling with Formspree
const inquiryForm = document.getElementById('inquiryForm');

// Check if form was submitted successfully (Formspree redirects back with success)
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('form_submitted') || urlParams.has('success') || window.location.search.includes('formspree')) {
    // Reset the form after successful submission
    inquiryForm.reset();

    // Show success message
    showFormMessage('✓ Inquiry sent successfully! We will contact you soon.', 'success');

    // Clear URL parameters after a delay
    setTimeout(() => {
        window.history.replaceState(null, null, window.location.pathname);
    }, 3000);
}

inquiryForm.addEventListener('submit', (e) => {
    const submitBtn = inquiryForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    // Add a timeout to reset the button if something goes wrong
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 10000); // Reset after 10 seconds if no redirect

    // The form will submit normally to Formspree
    // After Formspree processes it, it will redirect back with success
});

// Function to show form messages
function showFormMessage(message, type) {
    // Remove any existing message
    const existingMessage = document.getElementById('formMessage');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message element
    const messageDiv = document.createElement('div');
    messageDiv.id = 'formMessage';
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;

    // Insert after the form
    inquiryForm.parentNode.insertBefore(messageDiv, inquiryForm.nextSibling);

    // Scroll to message
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }
}

// Validate phone number format
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        e.target.value = '+' + value;
    }
});

// Set minimum date to today
const deliveryDateInput = document.getElementById('deliveryDate');
const today = new Date().toISOString().split('T')[0];
deliveryDateInput.setAttribute('min', today);

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInLeft 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.about-text, .info-card, .contact-method').forEach(el => {
    observer.observe(el);
});

// Truck animation enhancement
const truckSvg = document.querySelector('.truck-svg');
if (truckSvg) {
    truckSvg.addEventListener('mouseenter', () => {
        truckSvg.style.filter = 'drop-shadow(0 30px 60px rgba(255, 149, 0, 0.5))';
    });

    truckSvg.addEventListener('mouseleave', () => {
        truckSvg.style.filter = 'drop-shadow(0 20px 50px rgba(255, 149, 0, 0.3))';
    });
}

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});

// WhatsApp click tracking (optional)
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('WhatsApp link clicked');
    });
});

// Email copy functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add visual feedback when copying email
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const email = link.textContent;
            // The browser will handle the mailto link naturally
            console.log('Email link clicked: ' + email);
        });
    });
});

// Performance optimization - lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Console message
console.log('%cA.I MANARAT GLOBAL NIGERIA LTD', 'color: #ff9500; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
console.log('%cPremium Transportation & Logistics Services', 'color: #ffd700; font-size: 14px; font-weight: bold;');
console.log('%cWhatsApp: +234 802 760 5352 | Email: anwaribrahimlawankn@gmail.com', 'color: #666; font-size: 12px;');
