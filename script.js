document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for nav links
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Add shadow to navbar on scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
