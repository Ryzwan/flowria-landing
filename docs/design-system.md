# Flowria Design System

> **Document de référence pour tous les tokens, patterns et règles visuelles**

## 🎨 Couleurs

### Couleurs de marque

```css
--flowria-teal: #00E5B9     /* CTA principal, accents, liens */
--flowria-purple: #7419E2   /* Surfaces en avant, accents secondaires */
```

### Échelle complète

**Flowria Teal** (primary)
- 50: `#E6FFF9` (backgrounds très légers)
- 100: `#B3FFF0`
- 200: `#80FFE7`
- 300: `#4DFFDE`
- 400: `#1AFFD5`
- 500: `#00E5B9` ← **Base**
- 600: `#00B28F`
- 700: `#008066`
- 800: `#004D3D`
- 900: `#001A14`

**Flowria Purple** (secondary)
- 50: `#F3E8FF`
- 100: `#E4CBFF`
- 200: `#D4AEFF`
- 300: `#B57AFF`
- 400: `#9646FF`
- 500: `#7419E2` ← **Base**
- 600: `#5D14B5`
- 700: `#460F88`
- 800: `#2F0A5B`
- 900: `#18052E`

### Couleurs de base (dark theme)

```css
Background: hsl(0, 0%, 3%)      /* Noir très sombre */
Foreground: hsl(0, 0%, 98%)     /* Blanc cassé */
Card: hsl(0, 0%, 6%)            /* Cartes/surfaces */
Muted: hsl(0, 0%, 15%)          /* États désactivés */
Muted-foreground: hsl(0, 0%, 64%) /* Textes subtils */
Border: hsl(0, 0%, 15%)         /* Bordures */
```

### Utilisation

| Élément | Couleur | Usage |
|---------|---------|-------|
| CTA primaire | Teal (#00E5B9) | Boutons d'action principale |
| CTA secondaire | Purple (#7419E2) | Boutons secondaires, liens |
| Texte principal | Foreground (98%) | Titres, body |
| Texte subtil | Muted-foreground (64%) | Labels, métadonnées |
| Surfaces glass | rgba(255,255,255,0.03) | Cartes, panels |
| Hover glow | Teal + Purple mix | États hover sur CTA |

## 📝 Typographie

### Famille de polices

```css
--font-inter: 'Inter', system-ui, -apple-system, sans-serif
```

Inter est chargée via Google Fonts dans `app/layout.tsx`.

### Hiérarchie

| Niveau | Taille | Line-height | Usage |
|--------|--------|-------------|-------|
| Display XL | 4.5rem (72px) | 1.1 | Hero principal (mobile: 3rem) |
| Display LG | 3.75rem (60px) | 1.1 | Headers de sections majeures |
| Display MD | 3rem (48px) | 1.15 | Sous-sections importantes |
| H1 | 2.25rem (36px) | 1.2 | Titres de sections |
| H2 | 1.875rem (30px) | 1.3 | Sous-titres |
| H3 | 1.5rem (24px) | 1.4 | Titres de cards |
| Body Large | 1.125rem (18px) | 1.6 | Intro paragraphes |
| Body | 1rem (16px) | 1.6 | Texte standard |
| Body Small | 0.875rem (14px) | 1.5 | Labels, métadonnées |

### Règles typographiques

- **Titres** : courts, impactants, sans point final
- **Sous-textes** : 1-2 lignes max, complémentaires
- **Body** : paragraphes aérés, max 65-75 caractères par ligne
- **Letter-spacing** : Display (-0.02em), H1-H2 (-0.01em), reste normal

## 📏 Spacing & Layout

### Échelle de spacing

```css
--spacing-xs: 0.25rem   (4px)
--spacing-sm: 0.5rem    (8px)
--spacing-md: 1rem      (16px)
--spacing-lg: 1.5rem    (24px)
--spacing-xl: 2rem      (32px)
--spacing-2xl: 3rem     (48px)
--spacing-3xl: 4rem     (64px)
--spacing-4xl: 6rem     (96px)
--spacing-5xl: 8rem     (128px)
```

### Spacing inter-sections

- **Desktop** : `py-20` à `py-32` (80-128px)
- **Mobile** : `py-12` à `py-16` (48-64px)
- Entre sections à fort contraste visuel : divider fin avec gradient

### Container

```css
max-width: 1280px
padding: 1.5rem (mobile) → 3rem (desktop)
```

Utiliser la classe `.container-flowria` pour appliquer automatiquement.

### Grille

- **Mobile** : 1 colonne, full-width
- **Tablet** : 2 colonnes (grid-cols-2)
- **Desktop** : 3-4 colonnes selon contexte (grid-cols-3 ou grid-cols-4)

## 🔲 Border Radius

```css
--radius: 1rem (16px)    /* Base */
--radius-lg: 1rem
--radius-md: 0.75rem     (12px)
--radius-sm: 0.5rem      (8px)
--radius-xl: 1.5rem      (24px)
--radius-2xl: 2rem       (32px)
--radius-full: 9999px    (cercles/pills)
```

**Usage** :
- Cartes : `rounded-2xl` (32px)
- Boutons : `rounded-xl` (24px)
- Inputs : `rounded-lg` (16px)
- Badges : `rounded-full`

## 🌫️ Shadows & Effects

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25)
--shadow-glow-teal: 0 0 30px rgba(0, 229, 185, 0.3)
--shadow-glow-purple: 0 0 30px rgba(116, 25, 226, 0.3)
```

### Glass Effect

```css
/* Léger */
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Fort (modales, popovers) */
.glass-strong {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}
```

## 🎭 Animations

### Durées

```css
--transition-fast: 150ms
--transition-base: 250ms
--transition-slow: 350ms
```

### Easing

```css
cubic-bezier(0.4, 0, 0.2, 1)  /* ease-in-out naturel */
```

### Animations prédéfinies

**Gradient animé** (fond hero)
```tsx
<div className="animate-gradient-xy bg-gradient-to-br from-flowria-purple/20 via-transparent to-flowria-teal/20" />
```

**Float** (éléments décoratifs)
```tsx
<div className="animate-float" />
```

**Glow** (hover CTA)
```tsx
<button className="hover:animate-glow" />
```

**Reveal on scroll** (Framer Motion)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
/>
```

### Règles d'animation

- **Toujours** respecter `prefers-reduced-motion`
- Durées courtes (≤350ms) pour micro-interactions
- Durées longues (≥2s) pour ambiance (gradient mesh)
- Pas d'animations au-dessus de 60fps (utiliser `transform` et `opacity`)

## 🎯 Patterns UI

### Boutons

**Primary** (CTA principal)
```tsx
bg-flowria-teal text-black
hover:bg-flowria-teal-400 hover:shadow-glow-teal
rounded-xl px-8 py-4 font-semibold
```

**Secondary** (CTA secondaire)
```tsx
bg-flowria-purple text-white
hover:bg-flowria-purple-400 hover:shadow-glow-purple
rounded-xl px-8 py-4 font-semibold
```

**Ghost** (liens, actions tertiaires)
```tsx
bg-transparent text-flowria-teal border-2 border-flowria-teal
hover:bg-flowria-teal/10
rounded-xl px-6 py-3
```

### Cards

```tsx
<div className="glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
  {/* Contenu */}
</div>
```

### Sections

**Section standard**
```tsx
<section className="py-20 md:py-32">
  <div className="container-flowria">
    {/* Contenu */}
  </div>
</section>
```

**Section avec contraste** (fond card)
```tsx
<section className="bg-card py-20 md:py-32">
  <div className="container-flowria">
    {/* Contenu */}
  </div>
</section>
```

**Section accent** (mise en avant)
```tsx
<section className="bg-gradient-to-br from-flowria-purple/10 to-flowria-teal/10 py-20 md:py-32">
  <div className="container-flowria">
    {/* Contenu */}
  </div>
</section>
```

## 📐 Z-index Layers

```css
--z-base: 0
--z-dropdown: 1000
--z-sticky: 1100        /* Navbar */
--z-fixed: 1200
--z-modal-backdrop: 1300
--z-modal: 1400
--z-popover: 1500
--z-tooltip: 1600
```

## 📱 Breakpoints

```javascript
sm: '640px'   // Mobile large
md: '768px'   // Tablet
lg: '1024px'  // Desktop
xl: '1280px'  // Large desktop
2xl: '1536px' // Extra large
```

## ✅ Do / Don't

### ✅ DO

- Utiliser les tokens définis (couleurs, spacing, radius)
- Appliquer les glass effects sur les cartes
- Ajouter des hover states riches (scale, glow, translate)
- Respecter la hiérarchie typographique
- Laisser respirer les sections (spacing généreux)
- Privilégier les animations subtiles
- Tester avec `prefers-reduced-motion`

### ❌ DON'T

- Ne pas inventer de nouvelles couleurs
- Ne pas surcharger les sections (max 3-4 éléments visuels par card)
- Ne pas animer des propriétés coûteuses (width, height → utiliser transform)
- Ne pas oublier les focus states
- Ne pas utiliser des radius incohérents
- Ne pas casser la grille/container
- Ne pas mettre des animations partout

## 🎨 Inspiration "Après 1"

### Ce qu'on retient

1. **Density control** : sections aérées, respiration entre blocs
2. **Hiérarchie claire** : titre court → sous-texte concis → CTA
3. **Visuels sobres** : pas de décoration gratuite, chaque élément a un rôle
4. **Équilibre** : alterner sections denses et sections respirantes
5. **Micro-interactions** : hover subtils, pas de surenchère

### Adaptation Flowria

- Même rythme visuel, mais avec nos couleurs (Teal + Purple)
- Glass effects pour le côté "futuriste IA"
- Gradient mesh animé dans le hero (wow discret)
- Dividers en dégradé entre sections (guide visuel)
