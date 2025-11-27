// Master Wood Creations Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Master Wood Creations website loaded');

    // Product categories data
    const productData = {
        doors: [
            { title: "Entrance Door - Single", description: "Premium single entrance doors with intricate carvings", image: "🚪 Single Entrance" },
            { title: "Entrance Door - Double", description: "Grand double entrance doors for impressive entrances", image: "🚪🚪 Double Entrance" },
            { title: "Pooja Doors - Single", description: "Sacred single doors with traditional motifs", image: "🕉️ Pooja Single" },
            { title: "Pooja Doors - Double", description: "Elaborate double doors for prayer rooms", image: "🕉️🕉️ Pooja Double" },
            { title: "Interior Doors", description: "Elegant interior doors for modern homes", image: "🏠 Interior" }
        ],
        staircase: [
            { title: "Staircase Posts", description: "Handcrafted staircase posts in various designs", image: "🏛️ Staircase Posts" },
            { title: "Master Staircase Posts", description: "Premium master posts for grand staircases", image: "👑 Master Posts" },
            { title: "Carved Caps", description: "Decorative caps for staircase posts", image: "🔹 Carved Caps" },
            { title: "Hand Rails", description: "Ergonomic and beautiful handrails", image: "✋ Hand Rails" },
            { title: "Table Legs", description: "Custom carved table legs and supports", image: "🦵 Table Legs" }
        ],
        carvings: [
            { title: "Interior Carvings", description: "Beautiful interior decorative carvings", image: "🏺 Interior Carvings" },
            { title: "Exterior Carvings", description: "Weather-resistant exterior decorative elements", image: "🌿 Exterior Carvings" },
            { title: "Inlay Work", description: "Intricate inlay designs and patterns", image: "🎨 Inlay Work" },
            { title: "Ceiling Designs", description: "Ornate ceiling carvings and moldings", image: "🏛️ Ceiling Designs" }
        ],
        specials: [
            { title: "Idols", description: "Sacred idols and religious sculptures", image: "🕉️ Idols" },
            { title: "Decorative Panels", description: "Artistic panels for walls and partitions", image: "🎭 Decorative Panels" },
            { title: "Window Shutters", description: "Traditional and modern window shutters", image: "🪟 Window Shutters" },
            { title: "Gift Products", description: "Handcrafted wooden gifts and keepsakes", image: "🎁 Gift Products" },
            { title: "Mementos", description: "Custom mementos for special occasions", image: "🏆 Mementos" }
        ],
        custom: [
            { title: "Name Boards", description: "Personalized wooden name boards", image: "📝 Name Boards" },
            { title: "Picture Frames", description: "Custom carved picture frames", image: "🖼️ Picture Frames" },
            { title: "Mantels & Headboards", description: "Elegant mantels and bed headboards", image: "🛏️ Mantels & Headboards" },
            { title: "Pooja Mandapams", description: "Traditional prayer room structures", image: "🏛️ Pooja Mandapams" }
        ],
        industrial: [
            { title: "Laser Cutting", description: "Precision laser cutting services", image: "⚡ Laser Cutting" },
            { title: "Prototyping", description: "Product development and prototyping", image: "🔧 Prototyping" },
            { title: "Custom Storage", description: "Modular storage solutions", image: "📦 Custom Storage" },
            { title: "CNC Machining", description: "Computer-controlled precision cutting", image: "🖥️ CNC Machining" }
        ]
    };

    // Utility function for smooth scrolling
    function smoothScrollTo(targetId) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight || 80;
            const offsetTop = targetSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            console.log('Scrolling to:', targetId, 'at offset:', offsetTop);
            return true;
        } else {
            console.error('Target section not found:', targetId);
            return false;
        }
    }

    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            console.log('Mobile menu toggled');
        });
    }

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Nav link clicked:', this.getAttribute('href'));
            
            const targetId = this.getAttribute('href');
            smoothScrollTo(targetId);
            
            // Close mobile menu after clicking a link
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });

    // Hero CTA Button Smooth Scrolling
    const ctaButtons = document.querySelectorAll('.hero-buttons a[href^="#"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('CTA button clicked:', this.getAttribute('href'));
            
            const targetId = this.getAttribute('href');
            smoothScrollTo(targetId);
        });
    });

    // Category Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categorySections = document.querySelectorAll('.category-section');

    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const filter = this.getAttribute('data-filter');
            console.log('Filter clicked:', filter);

            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Show/hide category sections
            categorySections.forEach(section => {
                const categoryType = section.getAttribute('data-category');
                if (filter === 'all' || filter === categoryType) {
                    section.classList.remove('hidden');
                    section.style.display = 'block';
                } else {
                    section.classList.add('hidden');
                    section.style.display = 'none';
                }
            });

            console.log('Filter applied successfully:', filter);
        });
    });

    // View Category Buttons (from featured products)
    const viewCategoryButtons = document.querySelectorAll('.view-category-btn');
    viewCategoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const category = this.getAttribute('data-category');
            console.log('View category clicked:', category);

            // Navigate to categories section
            if (smoothScrollTo('#categories')) {
                // Filter to show only the selected category
                setTimeout(() => {
                    const filterBtn = document.querySelector(`[data-filter="${category}"]`);
                    if (filterBtn) {
                        filterBtn.click();
                    }
                }, 500);
            }
        });
    });

    // Quick View Modal Functionality
    const quickViewButtons = document.querySelectorAll('.quick-view-btn');
    const modal = document.getElementById('quickViewModal');
    const modalClose = document.getElementById('closeModal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalImage = document.getElementById('modalImage');

    // Open modal function
    function openModal(product) {
        if (modal && modalTitle && modalDescription && modalImage) {
            modalTitle.textContent = product.title;
            modalDescription.textContent = product.description;
            modalImage.textContent = product.image;
            modal.classList.remove('hidden');
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            console.log('Modal opened for:', product.title);
        }
    }

    // Close modal function
    function closeModal() {
        if (modal) {
            modal.classList.add('hidden');
            modal.style.display = 'none';
            document.body.style.overflow = '';
            console.log('Modal closed');
        }
    }

    // Quick view button event listeners
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const productCard = this.closest('.product-card');
            if (productCard) {
                const productTitle = productCard.querySelector('h4').textContent;
                const productDescription = productCard.querySelector('p').textContent;
                const productImage = productCard.querySelector('.placeholder-image').textContent;
                
                const product = {
                    title: productTitle,
                    description: productDescription,
                    image: productImage
                };
                
                openModal(product);
            }
        });
    });

    // Modal close event listeners
    if (modalClose) {
        modalClose.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        });
    }

    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // Modal action buttons
    const modalActions = document.querySelectorAll('.modal-actions .btn');
    modalActions.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (this.textContent === 'Request Quote') {
                closeModal();
                // Navigate to contact section
                smoothScrollTo('#contact');
            } else if (this.textContent === 'More Details') {
                console.log('More details clicked');
                closeModal();
            }
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Contact form submitted');
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            console.log('Form data:', formObject);
            
            // Basic form validation
            if (!validateForm(formObject)) {
                console.log('Form validation failed');
                return;
            }
            
            console.log('Form validation passed');
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission (in real app, this would be an API call)
            setTimeout(() => {
                console.log('Form submission completed');
                
                // Show success message
                showSuccessMessage();
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }

    // Form Validation Function
    function validateForm(data) {
        let isValid = true;
        
        // Clear previous error messages
        clearErrorMessages();
        
        // Name validation
        if (!data.name || data.name.trim().length < 2) {
            showFieldError('name', 'Please enter your full name (at least 2 characters)');
            isValid = false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email || !emailRegex.test(data.email)) {
            showFieldError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Phone validation (optional but if provided should be valid)
        if (data.phone && data.phone.trim() !== '') {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            const cleanPhone = data.phone.replace(/[\s\-\(\)]/g, '');
            if (cleanPhone.length < 10) {
                showFieldError('phone', 'Please enter a valid phone number');
                isValid = false;
            }
        }
        
        // Project details validation  
        if (!data.details || data.details.trim().length < 10) {
            showFieldError('details', 'Please provide more details about your project (at least 10 characters)');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Show field error
    function showFieldError(fieldName, message) {
        const field = document.getElementById(fieldName);
        if (!field) return;
        
        const formGroup = field.closest('.form-group');
        if (!formGroup) return;
        
        // Remove existing error
        const existingError = formGroup.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error class to field
        field.classList.add('error');
        
        // Create and append error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: var(--color-error);
            font-size: var(--font-size-sm);
            margin-top: var(--space-4);
            font-weight: var(--font-weight-medium);
        `;
        
        formGroup.appendChild(errorDiv);
    }
    
    // Clear error messages
    function clearErrorMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());
        
        const errorFields = document.querySelectorAll('.form-control.error');
        errorFields.forEach(field => field.classList.remove('error'));
    }
    
    // Show success message
    function showSuccessMessage() {
        // Remove any existing success message
        const existingSuccess = document.querySelector('.success-message');
        if (existingSuccess) {
            existingSuccess.remove();
        }
        
        // Create success message
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.style.cssText = `
            background: rgba(var(--color-success-rgb), 0.1);
            color: var(--color-success);
            padding: var(--space-16);
            border-radius: var(--radius-base);
            border: 1px solid rgba(var(--color-success-rgb), 0.25);
            margin-bottom: var(--space-16);
            text-align: center;
            font-weight: var(--font-weight-medium);
        `;
        successDiv.innerHTML = `
            <strong>Thank you!</strong> Your inquiry has been sent successfully. We'll get back to you within 24 hours to discuss your woodworking project.
        `;
        
        // Insert success message at top of form
        const formWrapper = document.querySelector('.contact-form-wrapper');
        if (formWrapper) {
            formWrapper.insertBefore(successDiv, contactForm);
            
            // Scroll to success message
            successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        
        // Remove success message after 8 seconds
        setTimeout(() => {
            if (successDiv && successDiv.parentNode) {
                successDiv.remove();
            }
        }, 8000);
    }

    // Active Navigation Link Highlighting
    function highlightActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        const scrollPosition = window.scrollY + 120; // Offset for navbar
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    // Add scroll event listener for active nav highlighting
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(highlightActiveNavLink, 10);
    });

    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length >= 6) {
                value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            } else if (value.length >= 3) {
                value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
            }
            
            e.target.value = value;
        });
    }

    // Featured card click to category navigation
    const featuredCards = document.querySelectorAll('.featured-card');
    featuredCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if the button was clicked
            if (e.target.classList.contains('view-category-btn') || e.target.closest('.view-category-btn')) {
                return;
            }
            
            const category = this.getAttribute('data-category');
            console.log('Featured card clicked:', category);

            // Navigate to categories section and filter
            if (smoothScrollTo('#categories')) {
                // Filter to show only the selected category
                setTimeout(() => {
                    const filterBtn = document.querySelector(`[data-filter="${category}"]`);
                    if (filterBtn) {
                        filterBtn.click();
                    }
                }, 500);
            }
        });
    });

    // Intersection Observer for Animation on Scroll
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.featured-card, .product-card, .stat-item, .service-item');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });
    }

    // Enhanced hover effects for cards
    const allCards = document.querySelectorAll('.product-card, .featured-card');
    allCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.style.transform.includes('translateY')) {
                this.style.transform = 'translateY(-8px) scale(1.02)';
                this.style.transition = 'all 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Initialize components
    highlightActiveNavLink();
    
    console.log('All event listeners and functionality initialized');
});

// Add CSS for dynamic styles
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    .nav-link.active {
        color: var(--color-primary) !important;
        background: var(--color-secondary) !important;
    }
    
    .form-control.error {
        border-color: var(--color-error) !important;
        box-shadow: 0 0 0 3px rgba(var(--color-error-rgb), 0.1) !important;
    }
    
    .form-control.error:focus {
        border-color: var(--color-error) !important;
        outline: 2px solid var(--color-error) !important;
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex !important;
        }
    }
    
    /* Smooth animations for category filtering */
    .category-section {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    .category-section.hidden {
        opacity: 0;
        transform: translateY(-10px);
        pointer-events: none;
    }
    
    /* Loading state for buttons */
    .btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        pointer-events: none;
    }

    /* Prevent dropdown interference */
    .form-control:focus {
        z-index: 1;
    }

    .btn[type="submit"] {
        position: relative;
        z-index: 2;
    }
`;
document.head.appendChild(dynamicStyles);

// Utility function to handle external links
function handleExternalLinks() {
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
    externalLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
}

document.addEventListener('DOMContentLoaded', handleExternalLinks);

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Global error caught:', e.error);
});

// Performance monitoring (simple implementation)
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
});