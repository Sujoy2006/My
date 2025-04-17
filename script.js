// Loader control
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize project cards to be visible
    document.querySelectorAll('.project-card').forEach(card => {
        setTimeout(() => {
            card.classList.add('animate-in');
        }, 300);
    });
    
    // Theme Switcher
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const body = document.body;
    
    // Check for saved theme preference or use user's system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
    } else if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'light');
    } else if (prefersDarkScheme.matches) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    
    // Listen for button click
    themeToggleBtn.addEventListener('click', function() {
        const isDark = body.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // About section tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show the corresponding tab pane
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Skills category filtering functionality
    const skillCategoryButtons = document.querySelectorAll('.skill-category-btn');
    const skillBubbles = document.querySelectorAll('.skill-bubble');
    
    skillCategoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            skillCategoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Filter skill bubbles based on category
            const category = button.getAttribute('data-category');
            
            skillBubbles.forEach(bubble => {
                if (category === 'all') {
                    bubble.style.display = 'flex';
                    setTimeout(() => {
                        bubble.style.opacity = '1';
                        bubble.style.transform = 'scale(1)';
                    }, 50);
                } else if (bubble.classList.contains(category)) {
                    bubble.style.display = 'flex';
                    setTimeout(() => {
                        bubble.style.opacity = '1';
                        bubble.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    bubble.style.opacity = '0';
                    bubble.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        bubble.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Initialize skill bubbles with random positions
    const initSkillBubbles = () => {
        const container = document.querySelector('.skills-cloud-container');
        if (!container) return;
        
        skillBubbles.forEach(bubble => {
            // Add random animation delay
            const randomDelay = Math.random() * 2;
            bubble.style.animationDelay = `${randomDelay}s`;
        });
    };
    
    // Call the function to initialize skill bubbles
    initSkillBubbles();
    
    // Add hover effect to hexagon skills
    const hexagonSkills = document.querySelectorAll('.hexagon-skill');
    
    hexagonSkills.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            skill.classList.add('hover');
        });
        
        skill.addEventListener('mouseleave', () => {
            skill.classList.remove('hover');
        });
    });
    
    // Custom Cursor
    const cursor = document.querySelector('.custom-cursor');
    const cursorFollower = document.querySelector('.custom-cursor-follower');
    
    // Update custom cursor position
    document.addEventListener('mousemove', (e) => {
        if (cursor && cursorFollower) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }
    });
    
    // Custom cursor effects for interactive elements
    document.querySelectorAll('a, button, .btn, input, textarea, .project-card, .skill-item, .info-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (cursor) {
                cursor.style.width = '40px';
                cursor.style.height = '40px';
                cursor.style.borderWidth = '3px';
                cursorFollower.style.opacity = '0';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            if (cursor) {
                cursor.style.width = '20px';
                cursor.style.height = '20px';
                cursor.style.borderWidth = '2px';
                cursorFollower.style.opacity = '1';
            }
        });
    });
    
    // Sticky Header
    const header = document.querySelector('header');
    const scrollWatcher = () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };
    window.addEventListener('scroll', scrollWatcher);

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile nav when clicking a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Active Navigation Links on Scroll
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLi.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href').substring(1) === current) {
                li.classList.add('active');
            }
        });
    });

    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to the clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('animate-in');
                    }, 50);
                } else {
                    card.classList.remove('animate-in');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Contact Form Submission with Enhanced UI and Validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Add input animation effects
        const formInputs = contactForm.querySelectorAll('input, textarea');
        
        formInputs.forEach(input => {
            // Add focus and blur event listeners for animation
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (input.value.trim() === '') {
                    input.parentElement.classList.remove('focused');
                }
            });
            
            // Check if input already has value on page load
            if (input.value.trim() !== '') {
                input.parentElement.classList.add('focused');
            }
        });
        
        // Form submission with validation
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            let isValid = true;
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                isValid = false;
                document.getElementById('email').classList.add('error');
                setTimeout(() => {
                    document.getElementById('email').classList.remove('error');
                }, 3000);
            }
            
            if (isValid) {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
                
                // Here you would typically send the form data to a server
                // For this example, we'll simulate a server response
                console.log('Form Submitted:', { name, email, subject, message });
                
                // Simulate server response delay
                setTimeout(() => {
                    // Show success message with animation
                    const successMessage = document.querySelector('.success-message');
                    contactForm.style.opacity = '0';
                    contactForm.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        contactForm.style.display = 'none';
                        successMessage.style.display = 'flex';
                        
                        setTimeout(() => {
                            successMessage.style.opacity = '1';
                            successMessage.style.transform = 'translateY(0)';
                        }, 50);
                        
                        // Reset and hide success message after 5 seconds
                        setTimeout(() => {
                            successMessage.style.opacity = '0';
                            successMessage.style.transform = 'translateY(20px)';
                            
                            setTimeout(() => {
                                successMessage.style.display = 'none';
                                contactForm.style.display = 'block';
                                
                                setTimeout(() => {
                                    contactForm.style.opacity = '1';
                                    contactForm.style.transform = 'translateY(0)';
                                    submitBtn.disabled = false;
                                    submitBtn.innerHTML = '<span>Send Message</span> <i class="fas fa-paper-plane"></i>';
                                    contactForm.reset();
                                    formInputs.forEach(input => {
                                        input.parentElement.classList.remove('focused');
                                    });
                                }, 50);
                            }, 300);
                        }, 5000);
                    }, 300);
                }, 2000);
            }
        });
    }

    // Add Floating Elements
    const addFloatingElements = () => {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            // Add floating elements to sections
            const float1 = document.createElement('div');
            float1.classList.add('floating-element', 'float-1');
            
            const float2 = document.createElement('div');
            float2.classList.add('floating-element', 'float-2');
            
            section.appendChild(float1);
            section.appendChild(float2);
        });
    };
    
    // Call the function to add floating elements
    addFloatingElements();

    // Enhanced Scroll Reveal Animation
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-in-left, .slide-in-right, .zoom-in, .rotate-in, .bounce-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.visibility = 'visible';
                element.style.opacity = 1;
            }
        });
    };
    
    // Add Enhanced Animation Classes
    const addAnimationClasses = () => {
        // Hero section
        document.querySelector('.hero h1').classList.add('fade-in');
        document.querySelector('.hero h2').classList.add('slide-up');
        document.querySelector('.hero p').classList.add('bounce-in');
        document.querySelector('.cta-buttons').classList.add('fade-in');
        document.querySelector('.hero .social-links').classList.add('slide-up');
        
        // About section
        if (document.querySelector('.about-image-wrapper')) {
            document.querySelector('.about-image-wrapper').classList.add('slide-in-left');
        }
        if (document.querySelector('.about-right')) {
            document.querySelector('.about-right').classList.add('slide-in-right');
        }
        
        if (document.querySelector('.personal-summary')) {
            document.querySelector('.personal-summary').classList.add('slide-up');
            document.querySelector('.personal-summary').style.animationDelay = '0.3s';
        }
        
        // About section text elements
        document.querySelectorAll('.about-text h3').forEach((el, index) => {
            el.classList.add('zoom-in');
            el.style.animationDelay = `${index * 0.2}s`;
        });
        
        document.querySelectorAll('.about-text p').forEach((el, index) => {
            el.classList.add('fade-in');
            el.style.animationDelay = `${0.2 + index * 0.2}s`;
        });
        
        // Personal info items
        document.querySelectorAll('.personal-info .info-item').forEach((el, index) => {
            el.classList.add('slide-up');
            el.style.animationDelay = `${0.4 + index * 0.1}s`;
        });
        
        // Section titles
        document.querySelectorAll('.section-title').forEach(el => {
            el.classList.add('zoom-in');
        });
        
        // Project cards
        document.querySelectorAll('.project-card').forEach((card, index) => {
            card.classList.add('slide-up');
            card.style.animationDelay = `${index * 0.2}s`;
        });
        
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach((btn, index) => {
            btn.classList.add('fade-in');
            btn.style.animationDelay = `${index * 0.1}s`;
        });
        
        // Skill items
        document.querySelectorAll('.skill-item').forEach((item, index) => {
            item.classList.add('zoom-in');
            item.style.animationDelay = `${index * 0.1}s`;
        });
        
        // Skill category titles
        document.querySelectorAll('.skills-category h3').forEach((el, index) => {
            el.classList.add('rotate-in');
            el.style.animationDelay = `${index * 0.2}s`;
        });
        
        // Contact section
        if (document.querySelector('.contact-info')) {
            document.querySelector('.contact-info').classList.add('slide-in-left');
        }
        
        // Contact info items
        document.querySelectorAll('.contact-info .info-item').forEach((item, index) => {
            item.classList.add('bounce-in');
            item.style.animationDelay = `${index * 0.2}s`;
        });
        
        if (document.querySelector('.contact-form')) {
            document.querySelector('.contact-form').classList.add('slide-in-right');
        }
        
        // Form elements
        document.querySelectorAll('.form-group').forEach((el, index) => {
            el.classList.add('slide-up');
            el.style.animationDelay = `${0.3 + index * 0.1}s`;
        });
    };
    
    // Call the function to add animation classes
    addAnimationClasses();
    
    // Initial check for animations
    animateOnScroll();
    
    // Add scroll event listener for animations
    window.addEventListener('scroll', animateOnScroll);

    // Typing Animation for Hero Title
    const initTypingAnimation = () => {
        const heroName = document.querySelector('.hero h1 .highlight');
        if (!heroName) return;
        
        const text = heroName.textContent;
        heroName.textContent = '';
        heroName.style.borderRight = '0.1em solid var(--primary-color)';
        
        let charIndex = 0;
        const typeWriter = () => {
            if (charIndex < text.length) {
                heroName.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100);
            } else {
                heroName.style.borderRight = 'none';
            }
        };
        
        setTimeout(() => {
            typeWriter();
        }, 1000);
    };
    
    // Call typing animation
    initTypingAnimation();

    // Smooth Scrolling for Anchor Links with Enhanced Animation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Add a flash animation to the target section
                targetElement.classList.add('section-highlight');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
                
                // Remove the highlight class after animation
                setTimeout(() => {
                    targetElement.classList.remove('section-highlight');
                }, 1500);
            }
        });
    });
    
    // Parallax effect for sections
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        
        // Apply parallax to floating elements
        document.querySelectorAll('.floating-element').forEach(element => {
            const speed = 0.05;
            element.style.transform = `translateY(${scrollPosition * speed}px) rotate(${scrollPosition * 0.02}deg)`;
        });
    });

    // Animation for skill progress bars
    function initProgressBars() {
        // Get all progress bars
        const progressBars = document.querySelectorAll('.skill-progress-bar');
        
        // Create intersection observer to animate when in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Get the width from the inline style (e.g., width: 90%)
                    const targetWidth = entry.target.style.width;
                    
                    // First set width to 0
                    entry.target.style.width = '0';
                    
                    // Then animate to the target width
                    setTimeout(() => {
                        entry.target.style.width = targetWidth;
                    }, 300);
                    
                    // Stop observing once animation is triggered
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        // Start observing each progress bar
        progressBars.forEach(bar => {
            observer.observe(bar);
        });
    }

    // Initialize all components when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Existing initializations
        initAnimations();
        initThemeToggle();
        initMobileMenu();
        initScrollSpy();
        
        // Initialize new components
        initProgressBars();
        
        // Add any other initializations here
    });
});