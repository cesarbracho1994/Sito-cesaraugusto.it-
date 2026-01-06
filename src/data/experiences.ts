export type WalkingLevel = 'easy' | 'moderate' | 'active'
export type BadgeKey = 'luxury' | 'private' | 'tailorMade' | 'small'

export type Experience = {
  slug: string
 image: 'https://source.unsplash.com/VUxns-GMKkg/1600x1000',
  title: { it: string; en: string; es: string }
  shortDescription: { it: string; en: string; es: string }
  duration: string
  walkingLevel: WalkingLevel
  priceFrom: number
  badges: BadgeKey[]
}

export const experiences: Experience[] = [
  {
    slug: 'venezia-essenziale-lusso',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80',
    title: { it: 'Venezia Essenziale — Private Luxury Walk', en: 'Venice Essentials — Private Luxury Walk', es: 'Venecia Esencial — Paseo Privado' },
    shortDescription: {
      it: 'Un primo incontro elegante con la città: scorci iconici, calli segrete e ritmo perfetto.',
      en: 'An elegant first meeting with the city: iconic views, hidden alleys, and perfect pacing.',
      es: 'Un primer encuentro elegante con la ciudad: vistas icónicas, callejones secretos y ritmo perfecto.',
    },
    duration: '2h 30m',
    walkingLevel: 'moderate',
    priceFrom: 220,
    badges: ['private', 'luxury'],
  },
  {
    slug: 'padova-arte-eleggante',
    image: 'https://images.unsplash.com/photo-1602524815759-bf03a94bdc24?auto=format&fit=crop&w=1600&q=80',
    title: { it: 'Padova — Arte, Caffè & Storia', en: 'Padua — Art, Coffee & History', es: 'Padua — Arte, Café e Historia' },
    shortDescription: {
      it: 'Un percorso piacevole tra centro storico e atmosfere universitarie, con soste “wow”.',
      en: 'A pleasant route through the historic center and university vibes, with “wow” stops.',
      es: 'Una ruta agradable por el centro histórico y el ambiente universitario, con paradas “wow”.',
    },
    duration: '2h',
    walkingLevel: 'easy',
    priceFrom: 180,
    badges: ['private', 'tailorMade'],
  },
]
