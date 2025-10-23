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
        // Empêcher la soumission du formulaire
        e.preventDefault();
        
        // Afficher le message d'erreur avec l'email de contact
        this.showErrorMessage();
    }
    
    showErrorMessage() {
        // Créer un message d'erreur personnalisé
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, rgba(26, 26, 36, 0.98), rgba(10, 10, 15, 0.98));
            color: white;
            padding: 2.5rem;
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            z-index: 10002;
            max-width: 500px;
            width: 90%;
            border: 1px solid rgba(0, 228, 184, 0.2);
            animation: fadeIn 0.3s ease;
        `;
        
        errorDiv.innerHTML = `
            <div style="text-align: center;">
                <div style="width: 60px; height: 60px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, rgba(255, 59, 48, 0.2), rgba(255, 149, 0, 0.2)); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ff3b30" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                </div>
                <h3 style="margin: 0 0 1rem 0; font-size: 1.5rem; background: linear-gradient(135deg, #ff3b30, #ff9500); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Service temporairement indisponible</h3>
                <p style="margin: 0 0 1.5rem 0; color: rgba(255, 255, 255, 0.8); line-height: 1.6;">
                    Veuillez nous contacter directement par email à :
                </p>
                <a href="mailto:contact@flowria.io" style="display: inline-block; background: linear-gradient(135deg, #00e4b8, #7419e1); color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 1rem; transition: transform 0.2s ease;">
                    contact@flowria.io
                </a>
                <br>
                <button id="close-error-msg" style="background: transparent; border: 1px solid rgba(255, 255, 255, 0.2); color: white; padding: 0.75rem 2rem; border-radius: 8px; cursor: pointer; font-size: 0.9rem; margin-top: 1rem; transition: all 0.2s ease;">
                    Fermer
                </button>
            </div>
        `;
        
        // Ajouter l'animation fadeIn
        if (!document.getElementById('fadeIn-animation')) {
            const style = document.createElement('style');
            style.id = 'fadeIn-animation';
            style.textContent = `
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1);
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Créer un overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 10001;
            backdrop-filter: blur(5px);
        `;
        
        document.body.appendChild(overlay);
        document.body.appendChild(errorDiv);
        
        // Empêcher le scroll
        document.body.style.overflow = 'hidden';
        
        // Fermer le message
        const closeButton = document.getElementById('close-error-msg');
        const closeMessage = () => {
            errorDiv.remove();
            overlay.remove();
            document.body.style.overflow = '';
        };
        
        closeButton.addEventListener('click', closeMessage);
        overlay.addEventListener('click', closeMessage);
    }
}

// Initialize contact form handler
document.addEventListener('DOMContentLoaded', () => {
    new ContactFormHandler();
});
