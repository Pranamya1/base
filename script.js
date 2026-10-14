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

// Active Link Highlighting on Scroll
const sections = document.querySelectorAll('section, main');
const navLinks = document.querySelectorAll('.nav-link');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('nav-link-active');
        if (link.getAttribute('data-id') === current) {
            link.classList.add('nav-link-active');
        }
    });

    mobileLinks.forEach(link => {
        link.classList.remove('mobile-nav-active');
        if (link.getAttribute('data-id') === current) {
            link.classList.add('mobile-nav-active');
        }
    });
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
            });
            btn.classList.add('bg-white', 'text-black', 'border-white');
            btn.classList.remove('bg-[#111827]', 'text-white/80', 'border-white/10');
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
