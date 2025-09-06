// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Smooth Scrolling for Buttons
document.querySelectorAll('.btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// On load helpers
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Theme toggle (default dark)
    const root = document.documentElement;
    const btn = document.getElementById('theme-toggle');
    const applyTheme = (theme) => {
        if (theme === 'light') {
            root.setAttribute('data-theme', 'light');
            if (btn) btn.setAttribute('aria-pressed', 'true');
        } else {
            root.removeAttribute('data-theme');
            if (btn) btn.setAttribute('aria-pressed', 'false');
        }
    };

    let stored = null;
    try { stored = localStorage.getItem('theme'); } catch {}
    const initial = stored === 'light' ? 'light' : 'dark'; // default dark
    applyTheme(initial);

    if (btn) {
        btn.addEventListener('click', () => {
            const isLight = root.getAttribute('data-theme') === 'light';
            const next = isLight ? 'dark' : 'light';
            applyTheme(next);
            try { localStorage.setItem('theme', next); } catch {}
        });
    }
});

// No contact form: using mailto links for contact.
