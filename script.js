// script.js
const heroSection = document.getElementById('hero');
const skillsSection = document.getElementById('skills');
const projectsSection = document.getElementById('projects');

heroSection.addEventListener('click', () => {
    heroSection.scrollIntoView({ behavior: 'smooth' });
});

skillsSection.addEventListener('click', () => {
    skillsSection.scrollIntoView({ behavior: 'smooth' });
});

projectsSection.addEventListener('click', () => {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
});

const scrollDownButton = document.getElementById('scroll-down');
scrollDownButton.addEventListener('click', () => {
    heroSection.scrollIntoView({ behavior: 'smooth' });
});