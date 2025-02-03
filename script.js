// Smooth Scroll Function for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Active Class for Sections on Scroll
const sections = document.querySelectorAll('section');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Hover Effect for Download Button Tooltip
const downloadButton = document.querySelector('.download-button');
const tooltip = downloadButton.querySelector('.tooltip');

downloadButton.addEventListener('mouseenter', () => {
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = 1;
});

downloadButton.addEventListener('mouseleave', () => {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = 0;
});

// Form Validation Feedback
const form = document.querySelector('.contact-me form');
const inputs = form.querySelectorAll('input, textarea');
const submitButton = form.querySelector('button');

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
            input.classList.add('invalid');
            input.classList.remove('valid');
        } else {
            input.classList.remove('invalid');
            input.classList.add('valid');
        }
    });
});

// Button Animation on Click
const button = document.querySelector('.download-button');
button.addEventListener('click', () => {
    button.style.transform = 'scale(1.1)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 300);
});

// Toggle Dark Mode (Optional)
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Example function for dynamically loading content
function loadMoreContent() {
    const contentSection = document.querySelector('.content-section');
    const newContent = document.createElement('div');
    newContent.classList.add('new-content');
    newContent.innerHTML = `<p>Here's some more content! Keep scrolling...</p>`;
    contentSection.appendChild(newContent);
}

// Trigger loading more content on scroll (for example)
window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadMoreContent();
    }
});