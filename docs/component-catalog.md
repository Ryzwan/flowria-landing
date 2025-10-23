# Flowria Component Catalog

> **Catalogue de tous les composants disponibles**  
> Consulter avant de créer un nouveau composant.

## 🧩 Atoms

### Button

**Fichier** : `components/atoms/Button.tsx`

**Description** : Bouton avec variants (primary, secondary, ghost, link) et tailles.

**Props** :
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}
```

**Exemples** :
```tsx
<Button variant="primary" size="lg">Parler de votre besoin</Button>
<Button variant="secondary">Voir mes cas</Button>
<Button variant="ghost">En savoir plus</Button>
```

---

### Heading

**Fichier** : `components/atoms/Heading.tsx`

**Description** : Titres typographiques avec niveaux (h1-h6, display).

**Props** :
```typescript
interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'
  size?: 'display-xl' | 'display-lg' | 'display-md' | 'h1' | 'h2' | 'h3'
  children: ReactNode
  className?: string
  gradient?: boolean  // Applique gradient teal-purple
}
```

**Exemples** :
```tsx
<Heading as="h1" size="display-xl" gradient>
  L'IA qui délivre
</Heading>
<Heading as="h2" size="h2">Mes expertises</Heading>
```

---

### Text

**Fichier** : `components/atoms/Text.tsx`

**Description** : Texte body avec variants (default, subtle, large).

**Props** :
```typescript
interface TextProps {
  variant?: 'default' | 'subtle' | 'large' | 'small'
  children: ReactNode
  className?: string
  as?: 'p' | 'span' | 'div'
}
```

**Exemples** :
```tsx
<Text variant="large">Introduction importante</Text>
<Text variant="subtle">Métadonnée ou label</Text>
```

---

### Badge

**Fichier** : `components/atoms/Badge.tsx`

**Description** : Badge pour tags, statuts, catégories.

**Props** :
```typescript
interface BadgeProps {
  variant?: 'default' | 'teal' | 'purple' | 'outline'
  children: ReactNode
  className?: string
}
```

**Exemples** :
```tsx
<Badge variant="teal">Automatisation</Badge>
<Badge variant="purple">IA</Badge>
```

---

## 🧱 Molecules

### Card

**Fichier** : `components/molecules/Card.tsx`

**Description** : Carte glass avec hover effects.

**Props** :
```typescript
interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'accent'
  hoverable?: boolean  // Active scale + shadow on hover
}
```

**Exemples** :
```tsx
<Card hoverable>
  <Heading as="h3" size="h3">Titre</Heading>
  <Text>Description</Text>
</Card>
```

---

### FormField

**Fichier** : `components/molecules/FormField.tsx`

**Description** : Wrapper pour Input/Textarea avec label et erreur.

**Props** :
```typescript
interface FormFieldProps {
  label: string
  error?: string
  required?: boolean
  children: ReactNode
  htmlFor?: string
}
```

**Exemples** :
```tsx
<FormField label="Email" required error={errors.email}>
  <Input type="email" {...register('email')} />
</FormField>
```

---

### Metric

**Fichier** : `components/molecules/Metric.tsx`

**Description** : Affichage de métrique (nombre + label). **Pas de données fictives**.

**Props** :
```typescript
interface MetricProps {
  value: string  // Placeholder: "TODO Ryzwan : ..."
  label: string
  className?: string
}
```

**Exemples** :
```tsx
<Metric 
  value="TODO Ryzwan : Nombre de projets livrés" 
  label="Projets" 
/>
```

---

### LogoItem

**Fichier** : `components/molecules/LogoItem.tsx`

**Description** : Item de logo avec hover et tooltip optionnel.

**Props** :
```typescript
interface LogoItemProps {
  src: string  // Path vers l'image
  alt: string
  tooltip?: string
  className?: string
}
```

---

## 🏛️ Organisms

### Section

**Fichier** : `components/organisms/Section.tsx`

**Description** : Section wrapper avec variants et spacing.

**Props** :
```typescript
interface SectionProps {
  children: ReactNode
  variant?: 'default' | 'card' | 'accent'
  className?: string
  id?: string  // Pour ancres navigation
}
```

**Variants** :
- `default` : fond transparent, py-20 md:py-32
- `card` : fond card (bg-card)
- `accent` : gradient subtle purple-teal

**Exemples** :
```tsx
<Section id="expertise">
  <Container>
    {/* Contenu */}
  </Container>
</Section>

<Section variant="card">
  {/* Section avec fond contrasté */}
</Section>
```

---

### Container

**Fichier** : `components/organisms/Container.tsx`

**Description** : Container max-width avec padding responsive.

**Props** :
```typescript
interface ContainerProps {
  children: ReactNode
  className?: string
}
```

**Usage** :
```tsx
<Container>
  <Heading>Titre</Heading>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Contenu */}
  </div>
</Container>
```

---

### Navbar

**Fichier** : `components/organisms/Navbar.tsx`

**Description** : Navigation sticky translucide avec logo et liens.

**Props** : Aucune (statique)

**Features** :
- Sticky top avec glass effect
- Logo cliquable (scroll vers top)
- Navigation desktop + mobile menu
- CTA "Contact" en highlight

---

### Footer

**Fichier** : `components/organisms/Footer.tsx`

**Description** : Footer avec liens, mentions légales, copyright.

**Props** : Aucune (statique)

**Sections** :
- Logo + tagline
- Liens (Mentions légales, Politique de confidentialité)
- Réseaux sociaux
- Copyright

---

### HeroSection

**Fichier** : `components/organisms/HeroSection.tsx`

**Description** : Hero principal avec gradient mesh animé, titre impact, CTAs.

**Props** :
```typescript
interface HeroSectionProps {
  title: string
  subtitle?: string
  primaryCTA: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
}
```

**Features** :
- Gradient mesh animé en background
- Titre display-xl avec gradient optionnel
- 2 CTAs (primary + secondary)
- Responsive (mobile: stack vertical)

---

### LogoCloud

**Fichier** : `components/organisms/LogoCloud.tsx`

**Description** : Grille de logos clients avec titre.

**Props** :
```typescript
interface LogoCloudProps {
  title?: string
  logos: Array<{ src: string; alt: string; tooltip?: string }>
}
```

---

### FaqSection

**Fichier** : `components/organisms/FaqSection.tsx`

**Description** : Section FAQ avec Accordion shadcn.

**Props** :
```typescript
interface FaqSectionProps {
  faqs: Array<{ question: string; answer: string }>
}
```

**Features** :
- Accordion shadcn (Radix primitives)
- Animations smooth
- Navigation clavier

---

### ContactForm

**Fichier** : `components/organisms/ContactForm.tsx`

**Description** : Formulaire de contact avec validation Zod et anti-bot.

**Props** : Aucune (Server Action intégrée)

**Features** :
- Validation Zod côté serveur
- Honeypot anti-spam
- Délai minimal avant submit
- Consentement RGPD
- Redirection vers `/success` après envoi

**Champs** :
- Nom (required)
- Email (required)
- Société (optional)
- Message (required)
- Consentement RGPD (required checkbox)

---

### AnimatedArrow

**Fichier** : `components/organisms/AnimatedArrow.tsx`

**Description** : Flèche animée pour section "Problème → Résultat".

**Props** :
```typescript
interface AnimatedArrowProps {
  direction?: 'right' | 'down'
  className?: string
}
```

**Features** :
- Animation pulse/float
- Icône lucide-react (ArrowRight ou ArrowDown)

---

## 📦 shadcn/ui Components

Ces composants sont générés via `npx shadcn-ui@latest add <component>` et se trouvent dans `components/ui/`.

### Disponibles :

- `Accordion` : pour FAQ
- `Button` : base du Button atom (étendu)
- `Input` : inputs formulaire
- `Textarea` : textarea formulaire
- `Label` : labels accessibles
- `Form` : wrapper React Hook Form
- `Dialog` : modales
- `Sheet` : menu mobile

**Usage** :
```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question ?</AccordionTrigger>
    <AccordionContent>Réponse</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

## 🎨 Guidelines de composition

### Principe de composition

Privilégier la composition de petits composants plutôt que des composants monolithiques :

```tsx
// ✅ BON
<Section variant="card">
  <Container>
    <Heading as="h2" size="h1">Mes expertises</Heading>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {features.map(feature => (
        <Card key={feature.id} hoverable>
          <Badge variant="teal">{feature.category}</Badge>
          <Heading as="h3" size="h3" className="mt-4">{feature.title}</Heading>
          <Text className="mt-2">{feature.description}</Text>
        </Card>
      ))}
    </div>
  </Container>
</Section>

// ❌ MAUVAIS : composant monolithique
<ExpertiseSection /> // Tout hardcodé dedans
```

### Réutilisabilité

Avant de créer un nouveau composant, se demander :
1. Est-ce qu'un composant existant peut faire le job ?
2. Est-ce qu'une composition de composants existants suffit ?
3. Est-ce vraiment nécessaire de créer un nouveau composant ?

Si oui → créer le composant + documenter ici.

---

## 📝 Ajouter un nouveau composant

1. Créer le fichier dans `components/atoms|molecules|organisms/`
2. Suivre la structure de code du playbook
3. Typer strictement les props
4. Ajouter la doc ici (props, exemples, usage)
5. Tester accessibilité + responsive
6. Commit

---

## 🔄 Prochaines étapes

Ce catalogue sera enrichi au fur et à mesure de l'ajout de composants. Toujours le consulter avant d'implémenter une nouvelle feature.
