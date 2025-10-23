// ========================================
// BUTTON INTERACTIONS
// ========================================

class ButtonRipple {
    constructor() {
        this.buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        this.init();
    }
    
    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.5);
                    left: ${x}px;
                    top: ${y}px;
                    pointer-events: none;
                    animation: ripple-animation 0.6s ease-out;
                `;
                
                button.style.position = 'relative';
                button.style.overflow = 'hidden';
                button.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
        
        // Add ripple animation
        if (!document.getElementById('ripple-style')) {
            const style = document.createElement('style');
            style.id = 'ripple-style';
            style.textContent = `
                @keyframes ripple-animation {
                    from {
                        transform: scale(0);
                        opacity: 1;
                    }
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Initialize button ripple effect
document.addEventListener('DOMContentLoaded', () => {
    new ButtonRipple();
});

// ========================================
// CARD HOVER EFFECTS
// ========================================

class CardInteractions {
    constructor() {
        this.cards = document.querySelectorAll('.feature-card, .stat-item, .flow-step');
        this.init();
    }
    
    init() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.handleCardEnter(e.currentTarget);
            });
            
            card.addEventListener('mouseleave', (e) => {
                this.handleCardLeave(e.currentTarget);
            });
            
            card.addEventListener('mousemove', (e) => {
                this.handleCardMove(e);
            });
        });
    }
    
    handleCardEnter(card) {
        card.style.transition = 'transform 0.3s ease';
    }
    
    handleCardLeave(card) {
        card.style.transform = '';
    }
    
    handleCardMove(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    }
}

// Initialize card interactions on desktop only
if (window.innerWidth > 768) {
    document.addEventListener('DOMContentLoaded', () => {
        new CardInteractions();
    });
}

// ========================================
// INPUT FOCUS EFFECTS
// ========================================

class InputEffects {
    constructor() {
        this.inputs = document.querySelectorAll('input, textarea');
        this.init();
    }
    
    init() {
        this.inputs.forEach(input => {
            input.addEventListener('focus', () => {
                const parent = input.closest('.form-group');
                if (parent) {
                    parent.classList.add('focused');
                }
            });
            
            input.addEventListener('blur', () => {
                const parent = input.closest('.form-group');
                if (parent) {
                    parent.classList.remove('focused');
                }
            });
        });
    }
}

// Initialize input effects
document.addEventListener('DOMContentLoaded', () => {
    new InputEffects();
});

// ========================================
// SCROLL TO TOP BUTTON
// ========================================

class ScrollToTop {
    constructor() {
        this.button = this.createButton();
        this.init();
    }
    
    createButton() {
        const button = document.createElement('button');
        button.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
        `;
        button.className = 'scroll-to-top';
        button.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #00e4b8, #7419e1);
            border: none;
            border-radius: 50%;
            color: white;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 16px rgba(0, 228, 184, 0.4);
        `;
        
        button.querySelector('svg').style.cssText = `
            width: 24px;
            height: 24px;
        `;
        
        document.body.appendChild(button);
        return button;
    }
    
    init() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.button.style.opacity = '1';
                this.button.style.visibility = 'visible';
            } else {
                this.button.style.opacity = '0';
                this.button.style.visibility = 'hidden';
            }
        });
        
        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        this.button.addEventListener('mouseenter', () => {
            this.button.style.transform = 'translateY(-5px)';
            this.button.style.boxShadow = '0 8px 24px rgba(0, 228, 184, 0.6)';
        });
        
        this.button.addEventListener('mouseleave', () => {
            this.button.style.transform = '';
            this.button.style.boxShadow = '0 4px 16px rgba(0, 228, 184, 0.4)';
        });
    }
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', () => {
    new ScrollToTop();
});

// ========================================
// COPY TO CLIPBOARD
// ========================================

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Copié dans le presse-papiers !');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            showToast('Copié dans le presse-papiers !');
        } catch (err) {
            console.error('Failed to copy:', err);
        }
        
        document.body.removeChild(textArea);
    }
}

// ========================================
// TOAST NOTIFICATIONS
// ========================================

function showToast(message, duration = 3000) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: rgba(0, 228, 184, 0.95);
        color: white;
        padding: 1rem 2rem;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        z-index: 10001;
        font-weight: 500;
        backdrop-filter: blur(10px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(0)';
    }, 10);
    
    setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(100px)';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

class KeyboardShortcuts {
    constructor() {
        this.init();
    }
    
    init() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K: Focus search or contact form
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth' });
                    const firstInput = contactForm.querySelector('input');
                    if (firstInput) {
                        firstInput.focus();
                    }
                }
            }
            
            // Escape: Close mobile menu if open
            if (e.key === 'Escape') {
                const navLinks = document.querySelector('.nav-links');
                const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    }
}

// Initialize keyboard shortcuts
document.addEventListener('DOMContentLoaded', () => {
    new KeyboardShortcuts();
});

// ========================================
// LINK PREVIEW ON HOVER
// ========================================

class LinkPreview {
    constructor() {
        this.links = document.querySelectorAll('a[href^="http"]');
        this.init();
    }
    
    init() {
        this.links.forEach(link => {
            link.addEventListener('mouseenter', (e) => {
                link.style.position = 'relative';
            });
        });
    }
}

// ========================================
// PREVENT ORPHANS (Typography)
// ========================================

function preventOrphans() {
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    
    elements.forEach(element => {
        const text = element.innerHTML;
        const words = text.trim().split(' ');
        
        if (words.length > 2) {
            const lastTwo = words.slice(-2).join('&nbsp;');
            const rest = words.slice(0, -2).join(' ');
            element.innerHTML = rest + ' ' + lastTwo;
        }
    });
}

// Apply on load
document.addEventListener('DOMContentLoaded', preventOrphans);

// ========================================
// EXTERNAL LINKS
// ========================================

function handleExternalLinks() {
    const links = document.querySelectorAll('a[href^="http"]');
    
    links.forEach(link => {
        // Add external link icon if not already present
        if (!link.querySelector('.external-icon') && !link.href.includes(window.location.hostname)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
            
            const icon = document.createElement('span');
            icon.className = 'external-icon';
            icon.innerHTML = ' ↗';
            icon.style.fontSize = '0.875em';
            icon.style.opacity = '0.6';
            link.appendChild(icon);
        }
    });
}

// Apply on load
document.addEventListener('DOMContentLoaded', handleExternalLinks);

// ========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================

class AccessibilityEnhancements {
    constructor() {
        this.init();
    }
    
    init() {
        // Add skip to main content link
        this.addSkipLink();
        
        // Enhance focus visibility
        this.enhanceFocusVisibility();
        
        // Add ARIA labels where missing
        this.addAriaLabels();
    }
    
    addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#hero';
        skipLink.textContent = 'Aller au contenu principal';
        skipLink.style.cssText = `
            position: absolute;
            left: -9999px;
            z-index: 10001;
            padding: 1rem;
            background: var(--color-primary);
            color: white;
            text-decoration: none;
            border-radius: 4px;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.left = '1rem';
            skipLink.style.top = '1rem';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.left = '-9999px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
    
    enhanceFocusVisibility() {
        const style = document.createElement('style');
        style.textContent = `
            *:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 2px;
            }
        `;
        document.head.appendChild(style);
    }
    
    addAriaLabels() {
        // Add aria-labels to buttons without text
        const buttons = document.querySelectorAll('button:not([aria-label])');
        buttons.forEach(button => {
            if (!button.textContent.trim()) {
                button.setAttribute('aria-label', 'Button');
            }
        });
    }
}

// Initialize accessibility enhancements
document.addEventListener('DOMContentLoaded', () => {
    new AccessibilityEnhancements();
});

// ========================================
// CONTACT FORM HANDLING
// ========================================

class ContactFormHandler {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.submitBtn = document.getElementById('submit-btn');
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        });
    }
    
    handleSubmit(e) {
        // Validation basique
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            e.preventDefault();
            showToast('Veuillez remplir tous les champs obligatoires', 3000);
            return;
        }
        
        // Validation email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            e.preventDefault();
            showToast('Veuillez entrer une adresse email valide', 3000);
            return;
        }
        
        // Afficher l'état de chargement (sans bloquer la soumission)
        this.submitBtn.disabled = true;
        this.submitBtn.style.opacity = '0.7';
        this.submitBtn.style.cursor = 'not-allowed';
        
        this.submitBtn.innerHTML = `
            <svg style="width: 24px; height: 24px; animation: spin 1s linear infinite;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
                <path d="M12 2 A10 10 0 0 1 22 12" stroke-linecap="round"/>
            </svg>
            Envoi en cours...
        `;
        
        // Ajouter l'animation de rotation
        if (!document.getElementById('spin-animation')) {
            const style = document.createElement('style');
            style.id = 'spin-animation';
            style.textContent = `
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Laisser le formulaire se soumettre normalement à FormSubmit
        // FormSubmit redirigera vers sa page de confirmation
    }
}

// Initialize contact form handler
document.addEventListener('DOMContentLoaded', () => {
    new ContactFormHandler();
});
