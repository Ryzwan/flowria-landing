# Flowria - Landing Page

Landing page moderne et futuriste pour Flowria, expert en automatisation IA & No-Code.

## 🚀 Fonctionnalités

- ✅ Design ultra moderne et futuriste inspiré d'Apres AI
- ✅ Hero section avec fond animé (particules canvas) et scroll indicator
- ✅ Logo cloud avec défilement infini
- ✅ Stats counter avec animations au scroll
- ✅ Feature showcase (4 capacités avec visualisations)
- ✅ Flow diagram (process en 4 étapes)
- ✅ FAQ avec accordéons animés
- ✅ Formulaire de contact avec validation
- ✅ Footer complet
- ✅ 100% responsive
- ✅ Animations fluides et effet WOW
- ✅ Code organisé en composants/sections

## 📁 Structure du Projet

```
flowria-landing/
├── index.html              # Page HTML principale
├── css/
│   ├── main.css           # Styles globaux et variables
│   ├── hero.css           # Styles de la section Hero
│   ├── sections.css       # Styles des sections
│   └── animations.css     # Keyframes et animations
├── js/
│   ├── main.js            # JavaScript principal
│   ├── animations.js      # Animations canvas et effets
│   └── interactions.js    # Interactions utilisateur
├── assets/
│   ├── logos/             # Logos (placeholder à ajouter)
│   └── images/            # Images features (placeholder à ajouter)
└── README.md
```

## 🎨 Placeholders Images à Créer

### Logos Clients (assets/logos/)
Créer 6 logos clients en PNG (200x80px) :
- `client-1.png` à `client-6.png`
- Format : PNG avec fond transparent
- Style : Grayscale pour l'effet hover

### Logo Flowria (assets/logos/)
- `flowria-logo.png` (40x40px)
- Style : Gradient violet/rose avec icône abstraite

### Images Features (assets/images/)
Créer 4 mockups pour les features (800x600px) :
- `feature-automation.png` - Dashboard d'automatisation
- `feature-ai.png` - Interface chatbot IA
- `feature-integration.png` - Connexions entre outils
- `feature-data.png` - Graphiques et analytics

**Alternative rapide** : Utiliser des placeholders SVG inline ou des services comme:
- https://placeholder.com/
- https://via.placeholder.com/
- Ou créer des SVG avec dégradés

## 🚀 Installation et Lancement

### Option 1 : Ouvrir directement
```bash
# Ouvrir le fichier index.html dans votre navigateur
open index.html
```

### Option 2 : Serveur local (recommandé)
```bash
# Avec Python 3
python3 -m http.server 8000

# Avec Node.js (npx)
npx serve

# Avec PHP
php -S localhost:8000
```

Puis ouvrir : `http://localhost:8000`

## ⚙️ Personnalisation

### Couleurs
Modifier les variables CSS dans `css/main.css` :
```css
:root {
    --color-primary: #6366f1;
    --color-secondary: #ec4899;
    --color-accent: #8b5cf6;
}
```

### Contenu
- Textes : Modifier directement dans `index.html`
- Stats : Modifier les attributs `data-target` dans la section stats
- FAQ : Ajouter/modifier les questions dans la section FAQ

### Animations
- Vitesse : Modifier les durées dans `css/animations.css`
- Particules : Ajuster `particleCount` dans `js/animations.js`

## 📱 Responsive

Le site est entièrement responsive avec breakpoints :
- Mobile : < 640px
- Tablet : 640px - 1024px
- Desktop : > 1024px

## 🎯 Performance

- Code vanille (pas de framework)
- Animations GPU-accelerated
- Lazy loading des images
- Intersection Observer pour animations au scroll
- Optimisé pour Core Web Vitals

## 🧪 Tests

### Checklist avant déploiement
- [ ] Remplacer tous les placeholders d'images
- [ ] Tester sur Chrome, Firefox, Safari
- [ ] Tester sur mobile (responsive)
- [ ] Vérifier formulaire de contact
- [ ] Tester toutes les animations
- [ ] Valider HTML/CSS (W3C)
- [ ] Tester accessibilité (WAVE, Lighthouse)
- [ ] Optimiser images (compression)

### Tests Navigation
- [ ] Menu mobile fonctionne
- [ ] Liens d'ancrage smooth scroll
- [ ] Scroll to top button apparaît

### Tests Interactions
- [ ] Compteurs stats s'animent au scroll
- [ ] FAQ accordéons s'ouvrent/ferment
- [ ] Formulaire valide les champs
- [ ] Hover effects sur cards
- [ ] Particules canvas interactives

## 📧 Configuration Formulaire

Le formulaire est actuellement en mode démo (console.log).

Pour le rendre fonctionnel, modifier `js/main.js` :

```javascript
// Remplacer la simulation par un vrai appel API
const response = await fetch('https://votre-api.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

Options d'intégration :
- **Formspree** : https://formspree.io/
- **EmailJS** : https://www.emailjs.com/
- **Netlify Forms** : Built-in si hébergé sur Netlify
- **Custom Backend** : Node.js, PHP, etc.

## 🌐 Déploiement

### Netlify (recommandé)
```bash
# Drag & Drop le dossier sur netlify.com
# Ou via CLI
netlify deploy --prod
```

### Vercel
```bash
vercel --prod
```

### GitHub Pages
```bash
git add .
git commit -m "Deploy landing page"
git push origin main
# Activer GitHub Pages dans les settings du repo
```

### Serveur traditionnel
- Upload via FTP/SFTP
- Configurer domaine + HTTPS
- Pas de build nécessaire (HTML statique)

## 🔧 Améliorations Futures

- [ ] Mode sombre/clair
- [ ] Multi-langue (i18n)
- [ ] Blog section
- [ ] Témoignages clients
- [ ] Portfolio/Case studies
- [ ] Analytics (Google Analytics, Plausible)
- [ ] SEO meta tags optimisés
- [ ] Open Graph images
- [ ] Schema.org structured data

## 📄 Licence

© 2025 Flowria. Tous droits réservés.

## 👨‍💻 Support

Pour toute question :
- Email : contact@flowria.io
- Basé à Marseille, France
- Remote disponible partout

---

**Fait avec ❤️ à Marseille**
