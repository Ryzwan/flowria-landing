function renderListing(articles) {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Automatisation IA Marseille | Conseils TPE/PME - Flowria</title>
    <meta name="description" content="Conseils et actualités sur l'automatisation d'entreprise, les chatbots et l'IA pour TPE/PME à Marseille. Guides pratiques, cas d'usage et bonnes pratiques.">
    <link rel="canonical" href="https://flowria.com/blog/">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://flowria.com/blog/">
    <meta property="og:title" content="Blog Automatisation IA Marseille | Flowria">
    <meta property="og:description" content="Conseils pratiques sur l'automatisation, les chatbots et l'IA pour TPE/PME à Marseille">
    <meta property="og:image" content="https://flowria.com/assets/logos/flowria-logo.png">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://flowria.com/blog/">
    <meta name="twitter:title" content="Blog Automatisation IA Marseille | Flowria">
    <meta name="twitter:description" content="Conseils pratiques sur l'automatisation, les chatbots et l'IA pour TPE/PME à Marseille">
    <meta name="twitter:image" content="https://flowria.com/assets/logos/flowria-logo.png">
    
    <!-- Favicons -->
    <link rel="icon" type="image/x-icon" href="../assets/favicon/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="../assets/favicon/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../assets/favicon/favicon-32x32.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../assets/favicon/apple-touch-icon.png">
    
    <!-- RSS Feed -->
    <link rel="alternate" type="application/rss+xml" title="Blog Flowria" href="/blog/feed.xml">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/sections.css">
    <link rel="stylesheet" href="../css/animations.css">
    <link rel="stylesheet" href="blog.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <div class="nav-content">
                <div class="logo">
                    <a href="../index.html">
                        <img src="../assets/logos/flowria-logo.png" alt="Flowria - Agence automatisation IA chatbot Marseille TPE PME" width="40" height="40">
                        <span>Flowria</span>
                    </a>
                </div>
                <div class="nav-links">
                    <a href="../index.html#services">Services</a>
                    <a href="../index.html#use-cases">Cas d'usage</a>
                    <a href="../index.html#about">À propos</a>
                    <a href="../index.html#faq">FAQ</a>
                    <a href="./index.html" class="active">Blog</a>
                    <a href="../index.html#contact" class="btn-primary">Contact</a>
                </div>
                <button class="mobile-menu-toggle" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </nav>

    <!-- Blog Listing -->
    <section class="blog-listing">
        <div class="container">
            <header class="section-header">
                <p class="section-label">Blog</p>
                <h1 class="section-title">
                    Fonctions critiques & performance <span class="gradient-text">business</span>
                </h1>
                <p class="section-description">
                    Analyses, cas réels et décisions produit autour des systèmes qui impactent directement le chiffre d'affaires.
                </p>
            </header>
            
            <!-- Filters -->
            <div class="blog-filters">
                <button class="filter-btn active" data-filter="all">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 16v-4"/>
                        <path d="M12 8h.01"/>
                    </svg>
                    Tous les articles
                </button>
                <button class="filter-btn" data-filter="marseille">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    Marseille & alentours
                </button>
            </div>
            
            <!-- Articles Grid -->
            <div class="blog-grid">
                ${articles.map(article => `
                <article class="blog-card" data-city="${article.city.toLowerCase()}">
                    ${article.cover ? `
                    <div class="blog-card-image">
                        <img src="${article.cover}" alt="${article.title}">
                    </div>
                    ` : ''}
                    <div class="blog-card-content">
                        <div class="blog-card-meta">
                            <time datetime="${article.date}">${article.formattedDate}</time>
                            <span class="separator">•</span>
                            <span>${article.readingTime} min</span>
                            ${article.city ? `
                            <span class="separator">•</span>
                            <span class="city-tag">${article.city}</span>
                            ` : ''}
                        </div>
                        <h2><a href="${article.slug}/index.html">${article.title}</a></h2>
                        <p>${article.description}</p>
                        ${article.keywords.length > 0 ? `
                        <div class="blog-card-tags">
                            ${article.keywords.slice(0, 4).map(kw => `<span class="tag">${kw}</span>`).join('')}
                        </div>
                        ` : ''}
                        <a href="${article.slug}/index.html" class="blog-card-link">
                            Lire l'article
                            <svg viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
                            </svg>
                        </a>
                    </div>
                </article>
                `).join('')}
            </div>
            
            ${articles.length === 0 ? `
            <div class="blog-empty">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="48" height="48">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <h3>Aucun article pour le moment</h3>
                <p>Les premiers articles arrivent bientôt !</p>
            </div>
            ` : ''}
        </div>
    </section>

    <!-- CTA Section -->
    <section class="blog-cta-section">
        <div class="container">
            <div class="cta-card-large">
                <h2>Automatisez votre entreprise dès maintenant</h2>
                <p>Parlons de votre projet d'automatisation. Réponse sous 24h.</p>
                <a href="../index.html#contact" class="btn-primary btn-large">
                    Discutons de votre projet
                    <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <div class="footer-logo">
                        <img src="../assets/logos/flowria-logo-white.svg" alt="Flowria - Automatisation IA & Chatbot TPE PME Marseille" width="40" height="40">
                        <span>Flowria</span>
                    </div>
                    <p class="footer-tagline">
                        Automatisez votre business avec l'IA. Respirez, on va faire travailler l'IA pour vous.
                    </p>
                </div>
                <div class="footer-links">
                    <div class="footer-column">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="../index.html#services">Automatisation</a></li>
                            <li><a href="../index.html#services">Agents IA</a></li>
                            <li><a href="../index.html#services">Intégration</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4>Entreprise</h4>
                        <ul>
                            <li><a href="../index.html#process">Process</a></li>
                            <li><a href="../index.html#stats">Chiffres clés</a></li>
                            <li><a href="../index.html#faq">FAQ</a></li>
                            <li><a href="./index.html">Blog</a></li>
                            <li><a href="../index.html#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4>Légal</h4>
                        <ul>
                            <li><a href="../mentions-legales.html">Mentions légales</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Flowria. Tous droits réservés.</p>
                <p>Basée à Marseille • Automatisation IA & Chatbot pour TPE/PME • Intervention France entière</p>
            </div>
        </div>
    </footer>

    <script src="../js/main.js"></script>
    <script src="../js/animations.js"></script>
    <script src="../js/interactions.js"></script>
    <script src="blog-filters.js"></script>
</body>
</html>`;
}

module.exports = renderListing;
