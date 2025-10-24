# Blog Flowria - Documentation

## 📝 Vue d'ensemble

Le blog Flowria utilise un système de build MDX → HTML statique. Les articles sont écrits en Markdown avec front-matter YAML, compilés en HTML, puis déployés automatiquement sur Vercel.

## 🚀 Démarrage rapide

### Ajouter un article

1. Créer un fichier `.mdx` dans `/content/blog/`
2. Remplir le front-matter avec tous les champs requis
3. Écrire le contenu en Markdown
4. Commit et push sur `main` → déploiement automatique

### Build local

```bash
# Build le blog
npm run build

# Preview local sur http://localhost:3000
npm run dev:blog
```

## 📋 Template d'article

Créer un nouveau fichier `/content/blog/mon-article.mdx` :

```yaml
---
title: "Titre de l'Article (60 caractères max recommandé)"
slug: mon-article-slug-kebab-case
description: Description SEO de l'article, 140-160 caractères max
date: 2025-01-24T09:00:00.000Z
readingTime: 8
keywords: [mot-clé-1, mot-clé-2, mot-clé-3]
city: Marseille
author: Flowria
sources:
  - https://source1.com
  - https://source2.com
  - https://source3.com
ctaText: Discutons de votre projet
ctaHref: ../../#contact
---

Votre contenu Markdown ici...

## Titre H2

Paragraphe avec **gras** et *italique*.

### Titre H3

* Liste à puces
* Point 2
* Point 3

Etc.
```

## 📊 Front-matter : Champs requis

### Obligatoires (le build échoue si manquants)

| Champ | Type | Description | Exemple |
|-------|------|-------------|---------|
| `title` | string | Titre de l'article | "Guide Automatisation Marseille" |
| `slug` | string | URL de l'article (kebab-case) | "guide-automatisation-marseille" |
| `description` | string | Meta description SEO (140-160c) | "Découvrez comment automatiser..." |
| `date` | ISO date | Date de publication | "2025-01-24T09:00:00.000Z" |
| `author` | string | Auteur (toujours "Flowria") | "Flowria" |
| `ctaText` | string | Texte du bouton CTA | "Parler de votre besoin" |
| `ctaHref` | string | Lien du CTA | "../../#contact" |

### Optionnels (valeurs par défaut)

| Champ | Type | Défaut | Description |
|-------|------|--------|-------------|
| `readingTime` | number | Auto-calculé | Temps de lecture en minutes |
| `keywords` | array | [] | Mots-clés SEO (max 8 recommandé) |
| `city` | string | "Marseille" | Ville pour le filtre |
| `sources` | array | [] | URLs des sources (min 3 pour auto-posts) |
| `cover` | string | null | Image de couverture (chemin relatif) |

## ✍️ Rédaction du contenu

### Structure recommandée

1. **Chapô** (1-2 paragraphes) : Problème + promesse de solution
2. **H2 principal** : Contexte / Pourquoi c'est important
3. **H2 avec sous-sections H3** : Détails, exemples, étapes
4. **Mention Marseille** : Au moins 1x dans le contenu si pertinent
5. **Conclusion** : Récap + ouverture

### Bonnes pratiques

✅ **Faire :**
- Phrases courtes (max 20 mots)
- Bénéfices avant technique
- Exemples concrets avec chiffres
- Structurer avec H2/H3
- Inclure des listes à puces
- Mentionner "Marseille" naturellement si pertinent

❌ **Éviter :**
- Jargon technique sans explication
- Phrases passives
- Chiffres non sourcés
- Promesses exagérées
- Bourrage de mots-clés

### Formatage Markdown

```markdown
## Titre H2

Paragraphe normal avec **texte en gras** et *texte en italique*.

### Titre H3

* Liste à puces
* Point 2
* Point 3

**Problème** : Description du problème.

**Solution** : Description de la solution.

**Résultat** : Résultat mesurable.
```

## 🔍 SEO automatique

Le build génère automatiquement :

- ✅ Meta title et description
- ✅ Balises Open Graph (Facebook)
- ✅ Twitter Cards
- ✅ JSON-LD Article (Schema.org)
- ✅ Canonical URL
- ✅ Sitemap.xml mis à jour
- ✅ RSS feed (feed.xml)

## 🎨 Design et DA

Le blog hérite automatiquement de la DA principale :
- Couleurs : `#00E5B9` → `#7419E2`
- Glass morphism
- Typographie Inter
- Animations cohérentes

**Aucune modification CSS nécessaire** pour les articles.

## 🛠️ Build process

### Ce qui se passe au build

1. Parser tous les `.mdx` de `/content/blog/`
2. Valider le front-matter (échoue si champs manquants)
3. Calculer le reading time si absent
4. Compiler MDX → HTML
5. Générer pages article (`/blog/[slug]/index.html`)
6. Générer page listing (`/blog/index.html`)
7. Mettre à jour `sitemap.xml`
8. Générer `feed.xml` (RSS)

### En cas d'erreur

Le build affiche l'erreur exacte :

```
❌ article-exemple.mdx: Champs requis manquants: description, date
```

Corriger le fichier et re-builder.

## 🚢 Déploiement Vercel

### Automatique

Chaque push sur `main` déclenche :
1. `npm install`
2. `npm run build` (= `node scripts/build-blog.js`)
3. Déploiement du site complet

### Webhook (pour automatisation future)

URL du webhook Vercel :
```
[À configurer dans Vercel Dashboard]
```

Trigger : Push sur `/content/blog/*.mdx`

## 📁 Structure des fichiers

```
flowria/
├── content/blog/              # Articles sources (.mdx)
│   ├── article-1.mdx
│   └── article-2.mdx
├── blog/                      # Généré au build (git-ignored)
│   ├── index.html            # Listing
│   ├── feed.xml              # RSS
│   ├── blog.css              # Styles
│   ├── blog-filters.js       # Script filtres
│   ├── article-1/
│   │   └── index.html
│   └── article-2/
│       └── index.html
├── scripts/
│   ├── build-blog.js         # Script principal
│   └── templates/
│       ├── article.js        # Template article
│       └── listing.js        # Template listing
└── public/blog/              # Assets articles (images)
```

## 🧪 Validation locale

Avant de pusher :

```bash
# Build
npm run build

# Vérifier les logs
# Doit afficher : ✅ pour chaque article

# Preview
npm run dev:blog
# Ouvrir http://localhost:3000/blog/
```

## ❓ FAQ

### Pourquoi 3 sources minimum ?

Pour les posts auto-générés, 3 sources garantissent des informations vérifiées. Le build affiche un warning si < 3.

### Puis-je utiliser des images ?

Oui. Placer les images dans `/public/blog/[slug]/` et référencer avec des chemins relatifs :

```markdown
![Alt text](../../public/blog/mon-article/image.jpg)
```

### Comment changer le CTA ?

Modifier `ctaText` et `ctaHref` dans le front-matter de chaque article.

### Le blog est-il indexable ?

Oui, 100% HTML statique. Google voit le contenu complet. Lighthouse SEO ≥ 95.

## 📞 Support

Questions ? Contact : contact@flowria.io

---

*Dernière mise à jour : 24 janvier 2025*
