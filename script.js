// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

mobileMenuToggle.addEventListener('click', () => {
    const isOpen = !mobileNav.classList.contains('hidden');
    
    if (isOpen) {
        mobileNav.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
    } else {
        mobileNav.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
    }
});

// Close mobile menu when clicking a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
    });
});

// Close mobile menu on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileNav.classList.contains('hidden')) {
        mobileNav.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
    }
});


// Timeline Scroll Animation
const timelineContainer = document.getElementById('timeline-container');
const timelineFill = document.getElementById('timeline-fill');
const timelineItems = document.querySelectorAll('.timeline-item');

if (timelineContainer && timelineFill) {
    window.addEventListener('scroll', () => {
        const containerRect = timelineContainer.getBoundingClientRect();
        const containerTop = containerRect.top;
        const containerHeight = containerRect.height;
        const windowHeight = window.innerHeight;

        // Start filling when the top of the container is at the middle of the screen
        let scrollPercentage = 0;
        const startPoint = windowHeight / 2;
        
        if (containerTop < startPoint) {
            const scrolledPastStart = startPoint - containerTop;
            scrollPercentage = (scrolledPastStart / containerHeight) * 100;
        }

        // Clamp between 0 and 100
        scrollPercentage = Math.max(0, Math.min(100, scrollPercentage));
        timelineFill.style.height = `${scrollPercentage}%`;
    });
}

// Intersection Observer for Timeline Items
const timelineObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
});

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

// Contact Form Interactive Handling
const serviceOptionBtns = document.querySelectorAll('.service-option-btn');
const selectedServiceInput = document.getElementById('selected-service-input');
const contactForm = document.getElementById('contact-form');
const contactSuccess = document.getElementById('contact-success');
const contactSuccessText = document.getElementById('contact-success-text');
const contactResetBtn = document.getElementById('contact-reset-btn');

if (serviceOptionBtns.length && selectedServiceInput) {
    serviceOptionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            serviceOptionBtns.forEach(b => {
                b.classList.remove('bg-white', 'text-black', 'border-white');
                b.classList.add('bg-[#111827]', 'text-white/80', 'border-white/10');
                b.setAttribute('aria-checked', 'false');
            });
            btn.classList.add('bg-white', 'text-black', 'border-white');
            btn.classList.remove('bg-[#111827]', 'text-white/80', 'border-white/10');
            btn.setAttribute('aria-checked', 'true');
            selectedServiceInput.value = btn.getAttribute('data-service') || 'Websites';
        });
    });
}

if (contactForm && contactSuccess) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const firstName = document.getElementById('contact-first-name')?.value || '';
        const emailVal = document.getElementById('contact-email')?.value || '';
        if (contactSuccessText) {
            contactSuccessText.textContent = `Thank you${firstName ? ', ' + firstName : ''}! We've received your project details and problem constraints. We will follow up at ${emailVal} within 24 hours.`;
        }
        contactForm.classList.add('hidden');
        contactSuccess.classList.remove('hidden');
        contactSuccess.classList.add('flex');
        if (window.lucide) {
            window.lucide.createIcons();
        }
    });
}

if (contactResetBtn && contactForm && contactSuccess) {
    contactResetBtn.addEventListener('click', () => {
        contactForm.reset();
        contactForm.classList.remove('hidden');
        contactSuccess.classList.add('hidden');
        contactSuccess.classList.remove('flex');
    });
}

// FAQ Accordion
const faqCards = document.querySelectorAll('.faq-card');
if (faqCards.length > 0) {
    faqCards.forEach(card => {
        const trigger = card.querySelector('.faq-trigger');
        const answer = card.querySelector('.faq-answer');
        const icon = card.querySelector('.faq-icon');
        const iconWrapper = card.querySelector('.faq-icon-wrapper');
        const numberBadge = card.querySelector('.faq-number');

        if (trigger && answer) {
            trigger.addEventListener('click', () => {
                const isOpen = !answer.classList.contains('hidden');

                // Close all cards
                faqCards.forEach(c => {
                    const cAnswer = c.querySelector('.faq-answer');
                    const cTrigger = c.querySelector('.faq-trigger');
                    const cIcon = c.querySelector('.faq-icon');
                    const cIconWrapper = c.querySelector('.faq-icon-wrapper');
                    const cNumberBadge = c.querySelector('.faq-number');

                    if (cAnswer) cAnswer.classList.add('hidden');
                    if (cTrigger) cTrigger.setAttribute('aria-expanded', 'false');
                    if (cIcon) cIcon.style.transform = 'rotate(0deg)';
                    if (cIconWrapper) {
                        cIconWrapper.classList.remove('bg-[#22D3EE]', 'text-black', 'border-[#22D3EE]');
                        cIconWrapper.classList.add('bg-white/5', 'text-[#79EDFF]', 'border-white/10');
                    }
                    if (cNumberBadge) {
                        cNumberBadge.classList.remove('bg-[#22D3EE]/10', 'border-[#22D3EE]/30');
                        cNumberBadge.classList.add('bg-white/5', 'border-white/10');
                    }
                    c.classList.remove('border-[#22D3EE]/40', 'shadow-[0_10px_30px_rgba(34,211,238,0.06)]');
                    c.classList.add('border-white/10');
                });

                // Toggle clicked card
                if (!isOpen) {
                    answer.classList.remove('hidden');
                    trigger.setAttribute('aria-expanded', 'true');
                    if (icon) icon.style.transform = 'rotate(45deg)';
                    if (iconWrapper) {
                        iconWrapper.classList.remove('bg-white/5', 'text-[#79EDFF]', 'border-white/10');
                        iconWrapper.classList.add('bg-[#22D3EE]', 'text-black', 'border-[#22D3EE]');
                    }
                    if (numberBadge) {
                        numberBadge.classList.remove('bg-white/5', 'border-white/10');
                        numberBadge.classList.add('bg-[#22D3EE]/10', 'border-[#22D3EE]/30');
                    }
                    card.classList.remove('border-white/10');
                    card.classList.add('border-[#22D3EE]/40', 'shadow-[0_10px_30px_rgba(34,211,238,0.06)]');
                }
            });
        }
    });
}
