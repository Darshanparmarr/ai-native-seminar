// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

function updateThemeIcon(theme) {
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add animation effect
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hero Button Click Events
const viewProjectsBtn = document.getElementById('viewProjectsBtn');
const contactBtn = document.getElementById('contactBtn');

if (viewProjectsBtn) {
    viewProjectsBtn.addEventListener('click', () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Add visual feedback
        viewProjectsBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            viewProjectsBtn.style.transform = 'scale(1)';
        }, 150);
    });
}

if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Add visual feedback
        contactBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            contactBtn.style.transform = 'scale(1)';
        }, 150);
    });
}

// Project Details Modal
const projectModal = document.getElementById('projectModal');
const closeModal = document.getElementById('closeModal');

const projectDetails = {
    portfolio: {
        title: 'Portfolio Website',
        description: 'Developed a responsive portfolio website featuring interactive UI, smooth animations, and a structured layout to showcase projects, skills, and experience. The website includes modern design elements, smooth scrolling navigation, and a fully responsive layout that works seamlessly across all devices.',
        tech: ['HTML', 'CSS', 'JavaScript']
    },
    myntra: {
        title: 'Myntra UI Clone',
        description: 'Developed a MYNTRA UI clone from scratch using HTML, CSS, and Bootstrap to enhance front-end development skills. The project focused on replicating the original design and layout with attention to detail, including responsive navigation, product grids, and interactive elements that mimic the original e-commerce platform.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
    },
    helmet: {
        title: 'Smart Helmet - IoT Project',
        description: 'Developed an IoT-based smart helmet using ESP32 and multiple sensors (gas, temperature, pulse, ultrasonic, IR) to monitor miners\' safety in real-time. The system integrates with the BLYNK app for live data tracking and alerts, providing critical safety monitoring for workers in hazardous environments. The helmet can detect dangerous gas levels, monitor vital signs, and send alerts in case of emergencies.',
        tech: ['Arduino', 'ESP32', 'IoT', 'Sensors', 'BLYNK']
    }
};

function showProjectDetails(projectKey) {
    const project = projectDetails[projectKey];
    if (!project) return;

    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalTech = document.getElementById('modalTech');

    if (modalTitle) modalTitle.textContent = project.title;
    if (modalDescription) modalDescription.textContent = project.description;
    
    if (modalTech) {
        modalTech.innerHTML = '';
        project.tech.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'tech-tag';
            tag.textContent = tech;
            modalTech.appendChild(tag);
        });
    }

    if (projectModal) {
        projectModal.style.display = 'block';
    }
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        if (projectModal) {
            projectModal.style.display = 'none';
        }
    });
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === projectModal) {
        projectModal.style.display = 'none';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && projectModal && projectModal.style.display === 'block') {
        projectModal.style.display = 'none';
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Show success message (in a real application, this would send data to a server)
        alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
        
        // Reset form
        contactForm.reset();
        
        // Add visual feedback
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.backgroundColor = '#10b981';
        
        setTimeout(() => {
            submitBtn.textContent = 'Send Message';
            submitBtn.style.backgroundColor = '';
        }, 2000);
    });
}

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
    
    lastScroll = currentScroll;
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Profile image error handling
const profileImage = document.getElementById('profileImage');
if (profileImage) {
    profileImage.addEventListener('error', function() {
        // If image fails to load, show a placeholder
        this.style.display = 'none';
        const placeholder = document.createElement('div');
        placeholder.style.width = '300px';
        placeholder.style.height = '300px';
        placeholder.style.borderRadius = '50%';
        placeholder.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        placeholder.style.display = 'flex';
        placeholder.style.alignItems = 'center';
        placeholder.style.justifyContent = 'center';
        placeholder.style.fontSize = '3rem';
        placeholder.textContent = 'DP';
        placeholder.style.color = 'white';
        this.parentNode.appendChild(placeholder);
    });
}

// Add click animation to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
        // Don't trigger if clicking the button
        if (e.target.classList.contains('btn-project')) return;
        
        const button = this.querySelector('.btn-project');
        if (button) {
            button.click();
        }
    });
    
    // Add hover effect
    card.style.cursor = 'pointer';
});

