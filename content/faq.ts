export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'Quelles technologies et outils utilisez-vous ?',
    answer:
      "Je travaille principalement avec des plateformes no-code/low-code (Zapier, Make, n8n) pour l'automatisation, des bases de données (Airtable, Notion), et des API d'IA (OpenAI GPT, modèles custom). Pour le développement, j'utilise des stacks modernes (React, Next.js, TypeScript) selon les besoins.",
  },
  {
    question: 'Quel est le délai moyen pour mettre en place une automatisation ?',
    answer:
      "Cela dépend de la complexité : une automatisation simple (ex: CRM vers email) peut être prête en quelques jours. Un projet plus complexe avec agents IA et multiples intégrations peut prendre 2-4 semaines. Je m'adapte à vos urgences et contraintes.",
  },
  {
    question: 'Comment se passe la confidentialité et la sécurité des données ?',
    answer:
      "Toutes vos données restent dans vos systèmes. Les automatisations utilisent des connexions sécurisées (OAuth, API keys chiffrées). Je signe systématiquement un NDA si nécessaire et respecte les normes RGPD. Aucune donnée n'est stockée de mon côté sauf nécessité technique validée par vous.",
  },
  {
    question: 'Qui possède le code et les workflows créés ?',
    answer:
      "Vous êtes propriétaire à 100% de tout ce qui est créé. Je documente chaque workflow et automatisation pour que vous puissiez les modifier ou les maintenir en interne si besoin. Pas de dépendance, pas de lock-in.",
  },
  {
    question: 'Proposez-vous de la maintenance après livraison ?',
    answer:
      "Oui, je propose des contrats de maintenance flexibles (mensuel ou à la demande) pour surveiller vos automatisations, corriger d'éventuels bugs liés aux évolutions d'API tierces, et ajouter des améliorations. Vous pouvez aussi gérer en interne, la doc est complète.",
  },
  {
    question: 'Quel est le budget moyen pour un projet ?',
    answer:
      "Les budgets varient selon la complexité : de quelques centaines d'euros pour une automatisation simple à plusieurs milliers pour un système complet avec agents IA, intégrations multiples et formation. Je propose toujours un devis détaillé après un premier échange sur vos besoins.",
  },
]
