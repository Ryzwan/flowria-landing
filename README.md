# Flowria — Landing Page

Landing page one-page moderne pour Flowria, expert en automatisation IA et agents intelligents.

## 🚀 Stack Technique

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS 4** (Design system custom)
- **Framer Motion** (Animations)
- **Lucide React** (Icônes)
- **Zod** (Validation formulaire - à venir)

## 📁 Structure du Projet

```
flowria/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Layout racine avec metadata SEO
│   └── page.tsx             # Page d'accueil
├── components/
│   ├── atoms/               # Composants de base
│   │   ├── Button.tsx
│   │   ├── Heading.tsx
│   │   ├── Text.tsx
│   │   └── Badge.tsx
│   ├── molecules/           # Composants composés
│   │   └── Card.tsx
│   └── organisms/           # Composants complexes
│       ├── Section.tsx
│       ├── Container.tsx
│       └── HeroSection.tsx
├── content/                 # Contenu statique
│   ├── features.ts         # Expertises/capacités
│   ├── faq.ts              # Questions fréquentes
│   └── process.ts          # Étapes du process
├── docs/                    # Documentation projet
│   ├── flowria-playbook.md      # Guidelines Lead Dev
│   ├── design-system.md         # Tokens et patterns
│   └── component-catalog.md     # Catalogue composants
├── lib/
│   └── utils.ts            # Utilitaires (cn)
└── styles/
    ├── globals.css         # Styles globaux
    └── tokens.css          # Variables CSS (couleurs, spacing...)
```

## 🎨 Design System

### Couleurs

- **Primary (Teal)** : `#00E5B9` — CTA principal, accents
- **Secondary (Purple)** : `#7419E2` — Surfaces, accents secondaires
- **Background** : Noir très sombre (`hsl(0, 0%, 3%)`)

### Typographie

- **Police** : Inter (Google Fonts)
- **Hiérarchie** : Display XL → H1 → H2 → H3 → Body

### Animations

- Gradient mesh animé (hero)
- Reveal on scroll (Framer Motion)
- Hover states avec micro-mouvements
- Respect de `prefers-reduced-motion`

## 🛠️ Développement

### Installation

```bash
npm install
```

### Commandes

```bash
npm run dev      # Serveur de développement (localhost:3000)
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Linter ESLint
npm run format   # Formatter Prettier
```

### Développement Local

1. Lancer le serveur :
   ```bash
   npm run dev
   ```

2. Ouvrir [http://localhost:3000](http://localhost:3000)

3. Modifier les fichiers :
   - **Contenu** : `content/*.ts`
   - **Composants** : `components/`
   - **Styles** : `styles/`

## 📝 Éditer le Contenu

### Features / Expertises

Fichier : `content/features.ts`

```typescript
export const features: Feature[] = [
  {
    id: 'unique-id',
    title: 'Titre',
    description: 'Description courte',
    icon: 'Zap', // Nom de l'icône lucide-react
    category: 'Catégorie',
  },
]
```

### FAQ

Fichier : `content/faq.ts`

```typescript
export const faqs: Faq[] = [
  {
    question: 'Question ?',
    answer: 'Réponse détaillée...',
  },
]
```

### Process

Fichier : `content/process.ts`

```typescript
export const processSteps: ProcessStep[] = [
  {
    id: 'step-id',
    number: 1,
    title: 'Titre',
    description: 'Description',
    icon: 'Search', // Nom de l'icône lucide-react
  },
]
```

## 🎯 Bonnes Pratiques

### Avant de coder

1. **Lire la documentation** :
   - `docs/flowria-playbook.md` — Workflow et guidelines
   - `docs/design-system.md` — Tokens et patterns
   - `docs/component-catalog.md` — Composants disponibles

2. **Vérifier l'existant** :
   - Un composant similaire existe-t-il déjà ?
   - Puis-je composer des composants existants ?

3. **Respecter le design system** :
   - Utiliser les tokens CSS (`--flowria-teal`, `--spacing-xl`...)
   - Suivre la hiérarchie typographique
   - Appliquer les patterns définis (glass, hover...)

### Qualité du code

- **TypeScript strict** : Pas de `any`, typer toutes les props
- **Accessibilité** : Focus states, contrastes AA/AAA, keyboard navigation
- **Performance** : `next/image`, lazy loading, animations légères
- **Pas de contenu fictif** : Uniquement des placeholders explicites

## 🚧 À Compléter

### Phase actuelle : MVP de base

✅ **Fait** :
- Setup Next.js + Tailwind + Framer Motion
- Documentation (Playbook, Design System, Catalog)
- Design tokens et styles globaux
- Composants de base (Button, Heading, Text, Badge, Card)
- Sections principales (Hero, Expertise, Process, About)

🔄 **En cours / À faire** :
- [ ] Section Logo Cloud (logos clients — placeholders)
- [ ] Section "Problème → Effet" (barre avec flèche animée)
- [ ] Section Études de cas (carousel)
- [ ] Section FAQ (Accordion shadcn)
- [ ] Formulaire de contact (validation Zod + Server Action)
- [ ] Page `/success` après envoi formulaire
- [ ] Navbar sticky translucide
- [ ] Footer complet
- [ ] next-sitemap (sitemap.xml + robots.txt)
- [ ] OG image générative
- [ ] Husky hooks (pre-commit)

## 📚 Ressources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Inspiration : "Après 1" (Landingfolio)](https://landingfolio.com/)

## 📄 License

Propriétaire — Flowria © 2025

---

**Contact** : Pour toute question, contactez Ryzwan
