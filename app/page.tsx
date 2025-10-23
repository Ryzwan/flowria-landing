import { HeroSection } from '@/components/organisms/HeroSection'
import { Section } from '@/components/organisms/Section'
import { Container } from '@/components/organisms/Container'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { Card } from '@/components/molecules/Card'
import { Badge } from '@/components/atoms/Badge'
import { features } from '@/content/features'
import { processSteps } from '@/content/process'
import * as Icons from 'lucide-react'

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <HeroSection
        title="L'IA qui délivre"
        subtitle="Automatisez, optimisez, gagnez du temps. Product Manager expert en IA, automatisation et agents intelligents. +8 ans d'expérience, +22 produits digitaux."
        primaryCTA={{ label: 'Parler de votre besoin', href: '#contact' }}
        secondaryCTA={{ label: 'Voir mes cas', href: '#expertise' }}
      />

      {/* Expertise / Capacités */}
      <Section id="expertise" variant="card">
        <Container>
          <div className="text-center mb-16">
            <Heading as="h2" size="h1" className="mb-4">
              Mes expertises
            </Heading>
            <Text variant="large" className="text-muted-foreground max-w-2xl mx-auto">
              Des solutions concrètes pour automatiser vos processus et libérer du temps
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = Icons[feature.icon as keyof typeof Icons] as any
              return (
                <Card key={feature.id} hoverable>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-flowria-teal/10 text-flowria-teal">
                      {Icon && <Icon className="w-6 h-6" />}
                    </div>
                    <div className="flex-1">
                      <Badge variant="teal" className="mb-3">
                        {feature.category}
                      </Badge>
                      <Heading as="h3" size="h3" className="mb-2">
                        {feature.title}
                      </Heading>
                      <Text variant="default" className="text-muted-foreground">
                        {feature.description}
                      </Text>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section id="process">
        <Container>
          <div className="text-center mb-16">
            <Heading as="h2" size="h1" className="mb-4">
              Comment on travaille ensemble
            </Heading>
            <Text variant="large" className="text-muted-foreground max-w-2xl mx-auto">
              Un processus clair et itératif pour des résultats rapides
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => {
              const Icon = Icons[step.icon as keyof typeof Icons] as any
              return (
                <Card key={step.id} variant="accent">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-flowria-purple/20 text-flowria-purple flex items-center justify-center font-bold text-xl mb-4">
                      {step.number}
                    </div>
                    {Icon && (
                      <div className="w-12 h-12 mb-4 text-flowria-teal">
                        <Icon className="w-full h-full" />
                      </div>
                    )}
                    <Heading as="h3" size="h3" className="mb-3">
                      {step.title}
                    </Heading>
                    <Text variant="default" className="text-muted-foreground">
                      {step.description}
                    </Text>
                  </div>
                </Card>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* About / Qui suis-je */}
      <Section id="about" variant="card">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading as="h2" size="h1" className="mb-6">
              Qui suis-je ?
            </Heading>
            <Text variant="large" className="mb-8">
              Serial entrepreneur, j'ai lancé et accompagné +22 produits digitaux en reliant
              stratégie, technologie et besoins utilisateurs. Aujourd'hui, je capitalise sur cette
              expérience pour aider les entreprises à gagner du temps et réduire leurs coûts grâce
              à l'automatisation IA et aux agents intelligents.
            </Text>
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <div>
                <Heading as="h3" size="h3" className="mb-2">
                  🔵 Mes expertises
                </Heading>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Automatisation IA & No-Code : Zapier, Make, n8n, Airtable, Chatbots GPT</li>
                  <li>• Product Management : SaaS, roadmap, go-to-market, delivery agile</li>
                  <li>• Data & IA : intégration de modèles prédictifs et IA générative</li>
                </ul>
              </div>
              <div>
                <Heading as="h3" size="h3" className="mb-2">
                  🔵 Exemples concrets
                </Heading>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Automatisation Brevo ↔ Stripe pour upsell et relance panier</li>
                  <li>• CRM ↔ Email ↔ Agenda pour suivi Sales</li>
                  <li>• Tâches Notion / Trello / Jira mises à jour automatiquement</li>
                  <li>• Création de contenu : veille et automatisation publication</li>
                  <li>• Chatbot GPT pour leads entrants</li>
                  <li>• Produit de détection de futures stars YouTube : 500+ créateurs signés</li>
                  <li>• Modèle de prédiction des revenus créateurs (corrélation R=0.8)</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact CTA */}
      <Section id="contact" variant="accent">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Heading as="h2" size="h1" gradient className="mb-6">
              Prêt à automatiser vos processus ?
            </Heading>
            <Text variant="large" className="mb-8 text-muted-foreground">
              Discutons de votre projet et trouvons ensemble les solutions adaptées à vos besoins
            </Text>
            <div className="text-center">
              <Text variant="default" className="text-muted-foreground">
                TODO Ryzwan : Intégrer le formulaire de contact ici avec validation Zod
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
