// ==================== Setup ====================
const nav = document.getElementById('nav');
const navMenu = document.getElementById('navMenu');
const navToggle = document.getElementById('navToggle');
const themeToggle = document.getElementById('themeToggle');

// ==================== Menú mobile ====================
function setMenu(open) {
    navMenu.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}

navToggle.addEventListener('click', () => setMenu(!navMenu.classList.contains('is-open')));
navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        setMenu(false);
        navToggle.focus();
    }
});

// ==================== Tema claro / oscuro ====================
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

function currentTheme() {
    return document.documentElement.getAttribute('data-theme') || (darkQuery.matches ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
});

// ==================== Borde del nav al scrollear ====================
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ==================== Link activo según la sección visible ====================
const navLinks = [...navMenu.querySelectorAll('a[href^="#"]')];
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id));
    });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));

// ==================== Aparición al scrollear ====================
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ==================== Año del footer ====================
document.getElementById('year').textContent = new Date().getFullYear();
