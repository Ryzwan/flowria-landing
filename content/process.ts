export interface ProcessStep {
  id: string
  number: number
  title: string
  description: string
  icon: string
}

export const processSteps: ProcessStep[] = [
  {
    id: 'diagnostic',
    number: 1,
    title: 'Diagnostic',
    description:
      'Échange approfondi pour comprendre vos processus actuels, identifier les points de friction, et définir les gains attendus (temps, coûts, qualité).',
    icon: 'Search',
  },
  {
    id: 'design',
    number: 2,
    title: 'Design & Prototypage',
    description:
      "Conception des workflows et agents IA. Maquettes et prototypes rapides pour valider l'approche avant développement complet.",
    icon: 'Pencil',
  },
  {
    id: 'build',
    number: 3,
    title: 'Build & Intégration',
    description:
      'Développement et configuration des automatisations, agents IA, et intégrations. Tests rigoureux et validation en environnement de staging.',
    icon: 'Code',
  },
  {
    id: 'deploy',
    number: 4,
    title: 'Déploiement & Itérations',
    description:
      'Mise en production progressive, formation de vos équipes, suivi des performances. Ajustements et optimisations basés sur les retours terrain.',
    icon: 'Rocket',
  },
]
