function renderArticle(article) {
  const {
    title,
    description,
    slug,
    date,
    formattedDate,
    readingTime,
    keywords = [],
    city,
    author,
    sources = [],
    cover,
    ctaText,
    ctaHref,
    rawContent
  } = article;

  // Convert MDX content to HTML (simplified for now)
  const htmlContent = rawContent
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^\* (.+)$/gm, '<li>$1</li>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, '<p>$1</p>')
    .replace(/<p><h/g, '<h')
    .replace(/<\/h([2-6])><\/p>/g, '</h$1>')
    .replace(/<p><li>/g, '<ul><li>')
    .replace(/<\/li><\/p>/g, '</li></ul>');

  const keywordsString = keywords.join(', ');
  const coverImage = cover || '/assets/logos/flowria-logo.png';
  const canonicalUrl = `https://flowria.com/blog/${slug}/`;

  return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Blog Flowria</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="${canonicalUrl}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="https://flowria.com${coverImage}">
    <meta property="article:published_time" content="${date}">
    <meta property="article:author" content="${author}">
    ${keywords.map(kw => `<meta property="article:tag" content="${kw}">`).join('\n    ')}
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${canonicalUrl}">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="https://flowria.com${coverImage}">
    
    <!-- JSON-LD Article -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${title}",
      "description": "${description}",
      "image": "https://flowria.com${coverImage}",
      "datePublished": "${date}",
      "dateModified": "${date}",
      "author": {
        "@type": "Organization",
        "name": "${author}",
        "url": "https://flowria.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Flowria",
        "logo": {
          "@type": "ImageObject",
          "url": "https://flowria.com/assets/logos/flowria-logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${canonicalUrl}"
      }
    }
    </script>
    
    <!-- Favicons -->
    <link rel="icon" type="image/x-icon" href="../../assets/favicon/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="../../assets/favicon/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../../assets/favicon/favicon-32x32.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../../assets/favicon/apple-touch-icon.png">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../css/main.css">
    <link rel="stylesheet" href="../../css/sections.css">
    <link rel="stylesheet" href="../../css/animations.css">
    <link rel="stylesheet" href="../blog.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <div class="nav-content">
                <div class="logo">
                    <a href="../../index.html">
                        <img src="../../assets/logos/flowria-logo.png" alt="Flowria - Agence automatisation IA chatbot Marseille TPE PME" width="40" height="40">
                        <span>Flowria</span>
                    </a>
                </div>
                <div class="nav-links">
                    <a href="../../index.html#services">Services</a>
                    <a href="../../index.html#use-cases">Cas d'usage</a>
                    <a href="../../index.html#about">À propos</a>
                    <a href="../../index.html#faq">FAQ</a>
                    <a href="../index.html">Blog</a>
                    <a href="../../index.html#contact" class="btn-primary">Contact</a>
                </div>
                <button class="mobile-menu-toggle" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </nav>

    <!-- Article -->
    <article class="blog-article">
        <header class="article-header">
            <div class="container">
                <a href="../index.html" class="back-link">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                        <path d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"/>
                    </svg>
                    Retour au blog
                </a>
                <div class="article-meta">
                    <time datetime="${date}">${formattedDate}</time>
                    <span class="separator">•</span>
                    <span>${readingTime} min de lecture</span>
                    <span class="separator">•</span>
                    <span class="article-city">${city}</span>
                </div>
                <h1>${title}</h1>
                <p class="article-chapo">${description}</p>
                
                <!-- CTA inline -->
                <div class="article-cta-inline">
                    <a href="${ctaHref}" class="btn-primary">
                        ${ctaText}
                        <svg viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </header>
        
        <div class="article-body">
            <div class="container">
                <div class="article-content">
                    ${htmlContent}
                </div>
                
                ${sources.length > 0 ? `
                <aside class="article-sources">
                    <h3>Sources</h3>
                    <ul>
                        ${sources.map(url => `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a></li>`).join('\n                        ')}
                    </ul>
                </aside>
                ` : ''}
                
                <!-- CTA final -->
                <div class="article-cta-final">
                    <div class="cta-card">
                        <h3>Prêt à automatiser votre entreprise ?</h3>
                        <p>Discutons de votre projet d'automatisation. Réponse sous 24h.</p>
                        <a href="${ctaHref}" class="btn-primary btn-large">
                            ${ctaText}
                            <svg viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </article>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <div class="footer-logo">
                        <img src="../../assets/logos/flowria-logo-white.svg" alt="Flowria - Automatisation IA & Chatbot TPE PME Marseille" width="40" height="40">
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
                            <li><a href="../../index.html#services">Automatisation</a></li>
                            <li><a href="../../index.html#services">Agents IA</a></li>
                            <li><a href="../../index.html#services">Intégration</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4>Entreprise</h4>
                        <ul>
                            <li><a href="../../index.html#process">Process</a></li>
                            <li><a href="../../index.html#stats">Chiffres clés</a></li>
                            <li><a href="../../index.html#faq">FAQ</a></li>
                            <li><a href="../index.html">Blog</a></li>
                            <li><a href="../../index.html#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4>Légal</h4>
                        <ul>
                            <li><a href="../../mentions-legales.html">Mentions légales</a></li>
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

    <script src="../../js/main.js"></script>
    <script src="../../js/animations.js"></script>
    <script src="../../js/interactions.js"></script>
</body>
</html>`;
}

module.exports = renderArticle;
