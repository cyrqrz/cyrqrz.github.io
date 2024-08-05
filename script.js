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

// Dynamic Skill Bar Animation
document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(bar => {
        const value = bar.getAttribute('data-skill');
        bar.style.width = value;
    });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        event.preventDefault();
    } else {
        alert('Message sent successfully!');
    }
});
