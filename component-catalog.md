# Component Catalog - Flowria

## 📚 Vue d'ensemble

Ce catalogue documente chaque section de la landing page avec :
- Structure HTML
- Slots de contenu modifiables
- Exemples de texte business-oriented
- Rappels : **Ne jamais modifier les layouts pour du contenu**

---

## 🏠 HERO Section

### Structure
```
<section id="hero" class="hero">
  └─ <div class="hero-content">
      ├─ <h1> (Titre principal)
      ├─ <p> (Sous-titre)
      ├─ <div class="hero-cta"> (2 boutons)
      └─ <p> (Micro-mention localisation)
```

### Slots de contenu

| Slot | Type | Longueur recommandée | Exemple actuel |
|------|------|----------------------|----------------|
| H1 | Titre | 5-8 mots | "Vos équipes perdent du temps. On automatise." |
| Sous-titre | Paragraphe | 20-30 mots | "Flowria, agence basée à Marseille..." |
| CTA primaire | Bouton | 3-5 mots | "Parler de votre besoin" |
| CTA secondaire | Bouton | 3-5 mots | "Voir des cas concrets" |
| Micro-mention | Texte court | 5-10 mots | "Basée à Marseille • Intervention partout en France" |

### Règles spécifiques
- H1 doit contenir un **problème** ou **transformation**
- Sous-titre inclut obligatoirement **"Marseille"**
- CTA orientés **action** (pas "En savoir plus")
- Micro-mention = ancrage géographique

### Exemples alternatifs

**H1 variantes :**
- "Trop de tâches. On automatise."
- "Vos process ralentissent. On accélère."
- "Support débordé. On automatise les réponses."

**Sous-titres variantes :**
- "Agence marseillaise qui automatise vos tâches répétitives : moins d'erreurs, plus de temps pour vendre."
- "Basée à Marseille, Flowria connecte vos outils et déploie des chatbots pour libérer votre équipe."

---

## 📊 STATS Section

### Structure
```
<section id="stats" class="stats-section">
  └─ <div class="stats-grid">
      └─ 4x <div class="stat-item">
          ├─ Icône SVG
          ├─ <div class="stat-number"> (Chiffre)
          ├─ <div class="stat-suffix"> (+ ou %)
          └─ <p class="stat-label"> (Label)
```

### Slots de contenu

| Stat | Valeur actuelle | Label | Note |
|------|-----------------|-------|------|
| Stat 1 | 22+ | Produits optimisés | Vérifiée ✓ |
| Stat 2 | 8+ | Ans d'expérience | Vérifiée ✓ |
| Stat 3 | 100+ | Tâches automatisées | Vérifiée ✓ |
| Stat 4 | 30% | Temps économisé | Vérifiée ✓ |

### Règles spécifiques
- **Uniquement des données vérifiables**
- Si doute : retirer la stat
- Labels en 2-3 mots max

---

## 💼 SERVICES Section

### Structure
```
<section id="services" class="features-section">
  ├─ <div class="section-header">
  │   ├─ <p class="section-label"> (Label)
  │   ├─ <h2> (Titre principal)
  │   └─ <p class="section-description"> (Description)
  └─ 4x <div class="feature-card">
      ├─ <h3> (Titre service)
      └─ <p> (Description service)
```

### Slots de contenu

| Élément | Longueur | Exemple actuel |
|---------|----------|----------------|
| Label | 2-4 mots | "Ce qu'on met en place" |
| H2 | 4-6 mots | "Automatiser pour gagner du temps" |
| Description | 15-25 mots | "Des solutions concrètes qui libèrent..." |

**4 Services :**

| Service | Titre (3-5 mots) | Description (10-15 mots) |
|---------|------------------|--------------------------|
| 1 | Automatisations utiles | Les tâches répétitives partent en pilote automatique. Votre équipe se concentre sur l'essentiel. |
| 2 | Chatbot qui répond vraiment | Questions fréquentes, prise de RDV, qualification simple—24/7 sur votre site ou WhatsApp. |
| 3 | Outils qui se parlent | CRM, emails, fichiers… on connecte pour éviter la double saisie et les oublis. |
| 4 | Tableaux clairs | Un suivi simple qui se met à jour tout seul. Vous décidez plus vite. |

### Règles spécifiques
- Titres : **Bénéfice direct** (pas "Automatisation Process")
- Descriptions : **Résultat concret** (pas méthode technique)
- Éviter : no-code, stack, workflow dans les titres

### Exemples alternatifs

**Service 1 alternatives :**
- Titre : "Tâches en pilote auto"
- Description : "Copier-coller, ressaisies, suivis manuels… automatisés."

**Service 2 alternatives :**
- Titre : "Support 24/7 intelligent"
- Description : "Réponses instantanées aux questions courantes, même à 3h du matin."

---

## 🎯 USE-CASES Section

### Structure
```
<section id="use-cases" class="use-cases-section">
  └─ 6x <div class="use-case-card">
      ├─ Problème
      ├─ Solution
      └─ Résultat
```

### Format de cas d'usage

Chaque cas suit **Problème → Solution → Résultat**

**Exemple - Cas "Support"**

| Bloc | Contenu |
|------|---------|
| **Problème** | "Votre équipe passe 15h/semaine à répondre aux mêmes questions clients" |
| **Solution** | "Chatbot GPT + Base de connaissances connecté à votre site web et WhatsApp" |
| **Outils** | Chatbot GPT, WhatsApp, Zapier |
| **Résultat** | "-70% de demandes manuelles • Disponibilité 24/7" |

### Slots de contenu (6 cas)

| Cas | Problème (10-15 mots) | Solution (10-15 mots) | Résultat (5-10 mots) |
|-----|----------------------|----------------------|---------------------|
| Support | Questions répétitives 15h/sem | Chatbot + base connaissances | -70% demandes • 24/7 |
| Leads | Leads non qualifiés | Formulaire + scoring auto | +50% conversion • 20h/mois |
| Commercial | Relances oubliées | CRM + relances auto | +35% deals • 0 oubli |
| Admin | Devis manuels 5h/sem | Formulaire → PDF → Email | -80% temps • 0 erreur |
| Standard | Standard saturé | Assistant vocal IA | 0 appel manqué • +40% satisfaction |
| Reporting | Données 5 outils | Dashboard auto | -10h/mois • Temps réel |

### Règles spécifiques
- **Problème** : Quantifier si possible (heures, %, nombre)
- **Solution** : Mentionner les outils mais pas en vedette
- **Résultat** : Chiffres + bénéfice (ex: "-70% de X • Y amélioré")
- Ton dirigeant (pas technique)

---

## 👤 ABOUT Section

### Structure
```
<section id="about" class="about-section">
  ├─ Visual (image + badges)
  └─ <div class="about-info">
      ├─ <p class="section-label">
      ├─ <h2>
      ├─ <p class="about-description">
      └─ 3x <div class="highlight-item">
```

### Slots de contenu

| Élément | Type | Exemple actuel |
|---------|------|----------------|
| Label | 2-3 mots | "À propos" |
| H2 | 5-8 mots | "Agence marseillaise qui rend l'IA utile" |
| Description | 30-40 mots | "Flowria est une agence marseillaise..." |
| Highlight 1 | Titre + texte | Ex-PM Jellysmack |
| Highlight 2 | Titre + texte | +22 Produits Digitaux |
| Highlight 3 | Titre + texte | Vision 360° |

### Règles spécifiques
- **Voix "agence"** (jamais "je")
- H2 doit contenir **"Marseille"**
- Description inclut : promesse + ancrage local + zone intervention
- Highlights = preuves de crédibilité (XP, chiffres, différenciation)

### Exemples alternatifs

**H2 variantes :**
- "Agence marseillaise spécialiste TPE/PME"
- "Basée à Marseille, focus automatisation"

**Description variante :**
- "Flowria automatise les TPE/PME marseillaises et françaises. On part de vos tâches, on implémente, on forme. Résultats rapides."

---

## ❓ FAQ Section

### Structure
```
<section id="faq" class="faq-section">
  └─ Nx <div class="faq-item">
      ├─ <button class="faq-question"> (Question)
      └─ <div class="faq-answer"> (Réponse)
```

### Format question/réponse

**Style approuvé :**
- Question : **Courte, directe** (5-8 mots)
- Réponse : **Ultra-courte** (1-3 phrases max, 10-20 mots total)

### 6 FAQ actuelles

| # | Question | Réponse |
|---|----------|---------|
| 1 | Faut-il comprendre l'IA ? | Non. Expliquez vos tâches, on s'occupe du reste. |
| 2 | Délai pour un premier résultat ? | Rapide. On commence par un levier simple, mesurable. |
| 3 | Et mes outils actuels ? | On s'intègre à l'existant. Pas de grand chantier inutile. |
| 4 | Un chatbot en TPE/PME, utile ? | Oui : questions répétitives, RDV, tri des demandes. |
| 5 | Qui garde la main ? | Vous. On documente et on forme. |
| 6 | Budget ? | Chiffrage clair avant d'agir. On vise le ROI le plus court. |

### Règles spécifiques
- **Questions = Langage naturel** (comme un client poserait la question)
- **Réponses = Ultra-directes** (zéro jargon)
- Intégrer naturellement : automatisation, chatbot, TPE/PME, Marseille
- Pas de formules de politesse ("Bien sûr !", "Absolument !")

### Exemples de nouvelles FAQ

**Question :** "Combien de temps ça prend ?"  
**Réponse :** "Premiers résultats en 1-2 semaines. On commence petit, on ajuste."

**Question :** "On peut tester avant ?"  
**Réponse :** "On fait un diagnostic gratuit. Vous validez l'approche, puis on lance."

---

## 📞 FOOTER

### Structure
```
<footer class="footer">
  ├─ Brand + tagline
  ├─ 3 colonnes de liens
  └─ <div class="footer-bottom">
      ├─ Copyright
      └─ Mention Marseille/TPE/PME
```

### Slots de contenu

| Élément | Contenu actuel |
|---------|----------------|
| Tagline | "Automatisez votre business avec l'IA" |
| Mention bas | "Basée à Marseille • Automatisation IA & Chatbot pour TPE/PME • Intervention France entière" |

### Règles spécifiques
- Mention bas de page **OBLIGATOIRE** avec "Marseille" + "TPE/PME" + "France"
- Tagline court (5-8 mots)

---

## 🎨 GENERAL GUIDELINES

### Principe absolu
**Le contenu s'adapte au design, jamais l'inverse.**

### Longueurs maximales par type

| Type | Longueur max |
|------|-------------|
| H1 | 10 mots |
| H2 | 8 mots |
| H3 | 6 mots |
| Sous-titre Hero | 30 mots |
| Description section | 30 mots |
| Description service | 20 mots |
| FAQ réponse | 25 mots |
| CTA bouton | 5 mots |

### Si le texte est trop long
1. **Réduire** (meilleure option)
2. Reformuler plus court
3. Diviser en 2 phrases courtes

❌ **NE JAMAIS** : Modifier le CSS pour accommoder un texte plus long

---

## 📋 Checklist par composant

Avant de modifier un composant :

- [ ] J'ai lu les règles spécifiques de ce composant
- [ ] Mon texte respecte les longueurs max
- [ ] Voix "agence" (pas "je")
- [ ] Bénéfice > Technique
- [ ] Mots-clés SEO intégrés naturellement
- [ ] Zéro jargon (sauf bloc "Tech & outils")
- [ ] "Marseille" présent si composant clé

---

*Dernière mise à jour : 24 janvier 2025*
