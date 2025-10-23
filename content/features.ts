export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  category: string
}

export const features: Feature[] = [
  {
    id: 'automation-nocode',
    title: 'Automatisation No-Code',
    description:
      'Connexion de vos outils (CRM, email, calendrier) via Zapier, Make ou n8n pour automatiser tâches répétitives et gagner du temps.',
    icon: 'Zap',
    category: 'Automatisation',
  },
  {
    id: 'ai-agents',
    title: 'Agents IA & Chatbots',
    description:
      'Création de chatbots GPT personnalisés pour qualifier leads, répondre aux clients 24/7, ou assister vos équipes internes.',
    icon: 'Bot',
    category: 'IA',
  },
  {
    id: 'crm-integration',
    title: 'Intégrations CRM & Sales',
    description:
      'Automatisation Brevo ↔ Stripe (upsell, relance panier), synchronisation CRM ↔ Email ↔ Agenda pour suivi commercial optimisé.',
    icon: 'Link',
    category: 'Intégration',
  },
  {
    id: 'task-management',
    title: 'Gestion de Tâches Automatisée',
    description:
      'Mise à jour automatique de vos tâches Notion, Trello ou Jira en fonction de vos workflows et événements métier.',
    icon: 'CheckSquare',
    category: 'Productivité',
  },
  {
    id: 'content-automation',
    title: 'Création de Contenu Automatisée',
    description:
      'Veille automatisée et publication de contenu planifiée sur vos canaux. Génération assistée par IA pour gagner en efficacité.',
    icon: 'FileText',
    category: 'Marketing',
  },
  {
    id: 'data-prediction',
    title: 'Data & Modèles Prédictifs',
    description:
      'Intégration de modèles IA prédictifs et génératifs pour analyser vos données et prendre des décisions éclairées.',
    icon: 'TrendingUp',
    category: 'Data',
  },
]
