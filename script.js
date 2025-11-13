// Scroll to Top Button
window.addEventListener('scroll', function() {
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
        if (window.pageYOffset > 300) {
            scrollTop.classList.add('visible');
        } else {
            scrollTop.classList.remove('visible');
        }
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Animate progress bars on scroll
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
}

// Create floating particles
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random color from palette
        const colors = ['rgba(139, 127, 248, 0.6)', 'rgba(77, 212, 212, 0.6)', 'rgba(77, 212, 125, 0.6)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        // Random animation duration
        const duration = Math.random() * 10 + 15;
        particle.style.animationDuration = duration + 's';
        
        // Random delay
        const delay = Math.random() * 5;
        particle.style.animationDelay = delay + 's';
        
        hero.appendChild(particle);
    }
}

// Create geometric shapes floating in background
function createGeometricShapes() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const shapes = ['circle', 'triangle', 'square'];
    const shapeCount = 15;
    
    for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        shape.className = 'geometric-shape';
        
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
        shape.classList.add(shapeType);
        
        // Random starting position
        shape.style.left = Math.random() * 100 + '%';
        shape.style.top = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 60 + 30;
        shape.style.width = size + 'px';
        shape.style.height = size + 'px';
        
        // Random animation duration
        const duration = Math.random() * 15 + 20;
        shape.style.animationDuration = duration + 's';
        
        // Random delay
        const delay = Math.random() * 5;
        shape.style.animationDelay = delay + 's';
        
        hero.appendChild(shape);
    }
}

// Create light rays effect
function createLightRays() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const rayCount = 8;
    
    for (let i = 0; i < rayCount; i++) {
        const ray = document.createElement('div');
        ray.className = 'light-ray';
        
        ray.style.left = (i * 12.5) + '%';
        ray.style.animationDelay = (i * 0.3) + 's';
        
        hero.appendChild(ray);
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    animateProgressBars();
    createParticles();
    createGeometricShapes();
    createLightRays();
    
    // Project filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filterValue === 'all' || category.includes(filterValue)) {
                        card.style.display = 'block';
                        // Add fade in animation
                        card.style.animation = 'fadeIn 0.5s';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // FAQ Accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = answer.classList.contains('active');

            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(a => {
                a.classList.remove('active');
            });

            // Toggle clicked answer
            if (!isActive) {
                answer.classList.add('active');
            }
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Show success message
            alert('Thank you for your message! I will get back to you within 24 hours.');
            
            // Reset form
            contactForm.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Add animation to cards on scroll
    const cards = document.querySelectorAll('.skill-card, .project-card, .contact-info-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        cardObserver.observe(card);
    });

    // Typing effect for tech text
    const techText = document.querySelector('.tech-text');
    if (techText) {
        const words = ['Data Engineer ', 'AWS Engineer ', 'Azure Engineer '];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let currentWord = '';

        function type() {
            const fullWord = words[wordIndex];

            if (isDeleting) {
                currentWord = fullWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                currentWord = fullWord.substring(0, charIndex + 1);
                charIndex++;
            }

            techText.textContent = currentWord;

            let typeSpeed = isDeleting ? 50 : 150;

            if (!isDeleting && charIndex === fullWord.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        // Start typing effect after a short delay
        setTimeout(type, 1000);
    }
});

// Add CSS for animations dynamically
const styleElement = document.createElement('style');
styleElement.textContent = '@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } } .particle { position: absolute; border-radius: 50%; pointer-events: none; animation: floatUpParticle 20s linear infinite; box-shadow: 0 0 10px currentColor; } @keyframes floatUpParticle { 0% { transform: translateY(100vh) translateX(0) rotate(0deg); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-100vh) translateX(100px) rotate(360deg); opacity: 0; } } .geometric-shape { position: absolute; pointer-events: none; opacity: 0.1; animation: floatRotate 25s ease-in-out infinite; } .geometric-shape.circle { border-radius: 50%; background: linear-gradient(135deg, rgba(139, 127, 248, 0.3), rgba(77, 212, 212, 0.3)); border: 2px solid rgba(139, 127, 248, 0.5); } .geometric-shape.square { background: linear-gradient(135deg, rgba(77, 212, 125, 0.3), rgba(77, 212, 212, 0.3)); border: 2px solid rgba(77, 212, 212, 0.5); transform: rotate(45deg); } .geometric-shape.triangle { width: 0 !important; height: 0 !important; border-left: 30px solid transparent; border-right: 30px solid transparent; border-bottom: 52px solid rgba(77, 212, 125, 0.3); } @keyframes floatRotate { 0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); } 25% { transform: translateY(-50px) translateX(50px) rotate(90deg); } 50% { transform: translateY(-100px) translateX(0) rotate(180deg); } 75% { transform: translateY(-50px) translateX(-50px) rotate(270deg); } } .light-ray { position: absolute; top: -50%; width: 2px; height: 200%; background: linear-gradient(to bottom, transparent, rgba(139, 127, 248, 0.3), transparent); animation: rayMove 8s ease-in-out infinite; pointer-events: none; } @keyframes rayMove { 0%, 100% { transform: translateY(0) scaleY(1); opacity: 0.3; } 50% { transform: translateY(20%) scaleY(1.5); opacity: 0.6; } }';
document.head.appendChild(styleElement);

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.stars');
    
    if (parallax) {
        parallax.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
    }
});

// Download resume functionality
const downloadBtn = document.querySelector('.btn-primary[href="#"]');
if (downloadBtn && downloadBtn.textContent.includes('Download Resume')) {
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Resume download will be available soon. Please contact me directly for my resume.');
    });
}