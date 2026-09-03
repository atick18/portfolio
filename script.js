document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Footer year ---------- */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- Scroll-reveal for sections ---------- */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.hidden-left, .hidden-right, .hidden-up')
        .forEach((el) => revealObserver.observe(el));

    /* ---------- Navbar scrolled state ---------- */
    const nav = document.getElementById('mainNav');
    const onScroll = () => {
        if (!nav) return;
        if (window.scrollY > 40) {
            nav.classList.add('is-scrolled');
        } else {
            nav.classList.remove('is-scrolled');
        }

        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            backToTop.classList.toggle('is-visible', window.scrollY > 500);
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Back to top ---------- */
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---------- Collapse mobile nav after clicking a link ---------- */
    const navbarCollapseEl = document.getElementById('navbarNav');
    if (navbarCollapseEl && window.bootstrap) {
        const bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(navbarCollapseEl, { toggle: false });
        navbarCollapseEl.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', () => bsCollapse.hide());
        });
    }
});
