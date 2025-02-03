// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation for Sections
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2 // Trigger animation when 20% of section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-active"); // Add active class
            } else {
                entry.target.classList.remove("fade-in-active"); // Remove when out of view
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add("fade-in"); // Apply default hidden effect
        observer.observe(section);
    });
});

// Button Animation on Click
const button = document.querySelector('.download-button');
if (button) {
    button.addEventListener('click', () => {
        button.style.transform = 'scale(1.1)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 300);
    });
}

// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

// Scroll Progress Bar
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
});