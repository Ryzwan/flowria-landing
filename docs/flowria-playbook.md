# Flowria Playbook — Lead Dev Senior

> **Document de référence permanent**  
> À consulter AVANT toute implémentation ou modification de code.

## 🎯 Philosophie du projet

Flowria est une landing page one-page premium, moderne et performante. Chaque décision technique doit servir trois objectifs :
1. **Performance** : Lighthouse ≥ 95 sur tous les axes
2. **Maintenabilité** : Code propre, modulaire, réutilisable
3. **Accessibilité** : AA/AAA, navigation clavier, états focus visibles

## 📚 Source d'inspiration

**"Après 1" (Landingfolio)** est notre référence visuelle et structurelle :
- Structure claire et aérée
- Rythme visuel équilibré (sections denses ↔ respirations)
- Hiérarchie typographique nette (titres courts + sous-textes concis)
- Density control : éviter la surcharge, privilégier l'essentiel
- Visuels sobres, animations discrètes mais impactantes

## 🔄 Workflow obligatoire

### Avant toute implémentation

1. **Lire la documentation** :
   - `docs/design-system.md` : tokens, patterns, règles visuelles
   - `docs/component-catalog.md` : composants existants
   
2. **Auditer l'existant** :
   - Vérifier si un composant similaire existe déjà
   - Ne PAS recréer une variante sans justification forte
   - Réutiliser et étendre plutôt que dupliquer

3. **Planifier** :
   - Découper en atoms → molecules → organisms
   - Identifier les props nécessaires (typage strict)
   - Penser composition et réutilisabilité

### Pendant l'implémentation

4. **Code propre** :
   - TypeScript strict : pas de `any`, typer toutes les props
   - Props claires et documentées (JSDoc si complexe)
   - Pas de logique métier dans les composants de vue
   - Découpage : un composant = une responsabilité
   
5. **Suivre le design system** :
   - Utiliser les tokens CSS (couleurs, spacing, radius...)
   - Respecter la hiérarchie typographique
   - Appliquer les patterns définis (glass, hover states, animations)

6. **Accessibilité** :
   - Focus states toujours visibles (`focus-visible-ring`)
   - Contrastes AA minimum (AAA préféré)
   - Labels ARIA si nécessaire
   - Navigation clavier fluide
   - Respecter `prefers-reduced-motion`

7. **Performance** :
   - `next/image` pour toutes les images
   - Lazy loading des sections lourdes
   - Animations légères (Framer Motion avec `reducedMotion`)
   - Pas d'imports inutiles

### Après l'implémentation

8. **Vérifications** :
   - `npm run lint` : pas d'erreurs
   - `npm run build` : compilation réussie
   - Test manuel : navigation clavier, responsive, animations
   - Lighthouse audit (≥95 sur tous les axes)

9. **Documentation** :
   - Mettre à jour `docs/component-catalog.md` si nouveau composant
   - Commenter le code si logique non-évidente

## 🎨 Standards de code

### Structure des composants

```tsx
// 1. Imports (libs externes → internes → relatifs)
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

// 2. Types & Interfaces
interface MyComponentProps {
  children: ReactNode
  variant?: 'default' | 'accent'
  className?: string
}

// 3. Composant
export function MyComponent({ 
  children, 
  variant = 'default',
  className 
}: MyComponentProps) {
  return (
    <div className={cn('base-classes', variantClasses[variant], className)}>
      {children}
    </div>
  )
}

// 4. Variants/Configs en bas du fichier
const variantClasses = {
  default: 'bg-card',
  accent: 'bg-accent',
}
```

### Naming conventions

- **Composants** : PascalCase (`Button`, `HeroSection`)
- **Fichiers composants** : PascalCase (`Button.tsx`, `HeroSection.tsx`)
- **Utilitaires** : camelCase (`cn`, `formatDate`)
- **Constantes** : UPPER_SNAKE_CASE (`MAX_WIDTH`, `API_URL`)
- **Types/Interfaces** : PascalCase avec suffixe (`ButtonProps`, `UserData`)

### Props conventions

- Toujours typer les props (interface ou type)
- Valeurs par défaut : utiliser les paramètres ES6
- `className` toujours optionnel (pour override Tailwind)
- `children` : typer comme `ReactNode`
- Props booléennes : préfixe `is`, `has`, `should` (`isActive`, `hasError`)

## 📝 Gestion du contenu

### Règle d'or : ZERO contenu fictif

- **Jamais** de chiffres/métriques inventés
- **Jamais** de témoignages/logos fictifs
- **Toujours** des placeholders explicites : `"TODO Ryzwan : [description précise du contenu attendu]"`

### Organisation du contenu

```
content/
  ├── features.ts       // Capacités & cas d'usage
  ├── faq.ts            // Questions fréquentes
  ├── process.ts        // Étapes du process
  ├── cases.ts          // Études de cas
  └── logos.ts          // Logos clients (placeholders)
```

Chaque fichier exporte des arrays d'objets typés. Exemple :

```typescript
export const features: Feature[] = [
  {
    id: 'automation',
    title: 'TODO Ryzwan : Titre de la feature',
    description: 'TODO Ryzwan : Description courte (1-2 lignes)',
    icon: 'Zap', // lucide-react icon name
  },
  // ...
]
```

## 🧪 Testing & Quality

### Pre-commit hooks

- `lint-staged` + `husky` configurés
- Auto-lint et auto-format avant chaque commit
- Build check automatique

### Checklist PR (si applicable)

- [ ] Code linted sans erreurs
- [ ] Build réussie (`npm run build`)
- [ ] Test manuel responsive (mobile, tablet, desktop)
- [ ] Test navigation clavier
- [ ] Lighthouse ≥ 95 (perf, a11y, SEO, best practices)
- [ ] Pas de contenu fictif (uniquement placeholders)
- [ ] Documentation mise à jour si nouveau composant

## 🚀 Commandes npm

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linter ESLint
npm run format       # Prettier sur tous les fichiers
npm run sitemap      # Générer sitemap.xml (après
