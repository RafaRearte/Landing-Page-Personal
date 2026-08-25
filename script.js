// ==================== Mobile Navigation Toggle ====================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ==================== Navbar Scroll Effect ====================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ==================== Active Nav Link on Scroll ====================
const sections = document.querySelectorAll('section[id]');

function setActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', setActiveNavLink);

// ==================== Smooth Scroll for Navigation Links ====================
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Scroll to Top on Brand Click ====================
const navBrand = document.querySelector('.nav-brand');
navBrand.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== Fade In Animation on Scroll ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
const fadeElements = document.querySelectorAll('.project-card, .skill-category, .education-item');
fadeElements.forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
});

// ==================== Skill Bars Animation ====================
const skillBars = document.querySelectorAll('.skill-progress');
let skillsAnimated = false;

function animateSkillBars() {
    const skillsSection = document.getElementById('skills');
    const skillsSectionTop = skillsSection.offsetTop;
    const skillsSectionHeight = skillsSection.offsetHeight;
    const scrollY = window.pageYOffset;

    if (scrollY > skillsSectionTop - window.innerHeight / 2 &&
        scrollY < skillsSectionTop + skillsSectionHeight &&
        !skillsAnimated) {

        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });

        skillsAnimated = true;
    }
}

window.addEventListener('scroll', animateSkillBars);

// ==================== Hero Stats Counter Animation ====================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const isPercentage = target === 100;
    const isThousands = String(target).includes('K');

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            if (isThousands) {
                element.textContent = Math.floor(current) + 'K+';
            } else if (isPercentage) {
                element.textContent = Math.floor(current) + '%';
            } else {
                element.textContent = Math.floor(current) + '+';
            }
            requestAnimationFrame(updateCounter);
        } else {
            if (isThousands) {
                element.textContent = target + 'K+';
            } else if (isPercentage) {
                element.textContent = target + '%';
            } else {
                element.textContent = target + '+';
            }
        }
    };

    updateCounter();
}

// Animate hero stats when page loads
window.addEventListener('load', () => {
    const statNumbers = document.querySelectorAll('.stat-number');

    setTimeout(() => {
        // 25K+ users
        animateCounter(statNumbers[0], 25);
        // 2+ years
        animateCounter(statNumbers[1], 2);
        // 100% dedication
        animateCounter(statNumbers[2], 100);
    }, 500);
});

// ==================== Parallax Effect on Hero ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ==================== Project Cards Tilt Effect (Optional Enhancement) ====================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.1s ease';
    });

    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', function() {
        this.style.transition = 'transform 0.3s ease';
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==================== Initialize on Page Load ====================
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active nav link
    setActiveNavLink();

    // Add loaded class to body for animations
    document.body.classList.add('loaded');

    console.log('Portfolio website loaded successfully! 🚀');
});

// ==================== External Links Security ====================
// Add rel="noopener noreferrer" to all external links without it
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    const rel = link.getAttribute('rel');
    if (!rel || !rel.includes('noopener')) {
        link.setAttribute('rel', (rel ? rel + ' ' : '') + 'noopener noreferrer');
    }
});

// ==================== Email Click Tracking (Optional) ====================
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Email contact initiated');
    });
});

// ==================== Accessibility Enhancements ====================
// Add keyboard navigation for mobile menu
navToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navToggle.click();
    }
});

// Focus trap for mobile menu when open
document.addEventListener('keydown', (e) => {
    if (navMenu.classList.contains('active') && e.key === 'Escape') {
        navToggle.click();
    }
});
