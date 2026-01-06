import { Link } from 'react-router-dom'
import { Clock, Footprints } from 'lucide-react'
import type { Experience } from '../data/experiences'

const walkingLevelLabels: Record<string, string> = {
  easy: 'Facile',
  moderate: 'Moderato',
  active: 'Attivo',
}

export function ExperienceCardSimple({ experience }: { experience: Experience }) {
  return (
    <Link
      to={`/esperienze/${experience.slug}`}
      className="group block bg-ivory rounded-sm overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 card-luxury"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={experience.image}
          alt={experience.title.it}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
       <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute bottom-4 right-4">
          <span className="px-3 py-1.5 bg-ivory/95 backdrop-blur-sm rounded-sm text-sm font-semibold text-charcoal border border-accent/20">
            Da €{experience.priceFrom}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-xl md:text-2xl font-semibold text-charcoal group-hover:text-accent transition-colors">
          {experience.title.it}
        </h3>
        <p className="mt-3 text-muted leading-relaxed line-clamp-2">
          {experience.shortDescription.it}
        </p>

        <div className="mt-4 flex items-center gap-4 text-sm text-muted">
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-accent" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Footprints className="h-4 w-4 text-accent" />
            <span>{walkingLevelLabels[experience.walkingLevel]}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
