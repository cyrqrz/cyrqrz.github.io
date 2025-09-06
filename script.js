// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const hash = this.hash; // only intercept in-page anchors (e.g., #projects)
        if (hash && document.querySelector(hash)) {
            e.preventDefault();
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Smooth Scrolling for Buttons
document.querySelectorAll('.btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const hash = this.hash; // allow external links (http, https, mailto) to work normally
        if (hash && document.querySelector(hash)) {
            e.preventDefault();
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
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
    const logo = document.querySelector('.brand'); // header logo <img>

    // Swap logo asset based on theme. Expects filenames like: foo-light.svg and foo-dark.svg
    const updateLogoForTheme = (theme) => {
        if (!logo || logo.tagName !== 'IMG') return;
        const src = logo.getAttribute('src') || '';
        const lastDot = src.lastIndexOf('.');
        if (lastDot === -1) return;
        const ext = src.slice(lastDot); // .svg, .png, etc
        const base = src.slice(0, lastDot).replace(/-(dark|light)$/i, '');
        const themed = theme === 'light' ? `${base}-light${ext}` : `${base}-dark${ext}`;
        if (themed !== src) logo.setAttribute('src', themed);
    };

    const applyTheme = (theme) => {
        if (theme === 'light') {
            root.setAttribute('data-theme', 'light');
            if (btn) btn.setAttribute('aria-pressed', 'true');
        } else {
            root.removeAttribute('data-theme');
            if (btn) btn.setAttribute('aria-pressed', 'false');
        }
        updateLogoForTheme(theme);
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
