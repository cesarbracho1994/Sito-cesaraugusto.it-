import { useParams, Link } from 'react-router-dom'
import { experiences } from '../data/experiences'
import { ArrowLeft, Phone } from 'lucide-react'

export function ExperienceDetail() {
  const { slug } = useParams()
  const exp = experiences.find((e) => e.slug === slug)

  if (!exp) {
    return (
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-muted">Esperienza non trovata.</p>
        <Link className="mt-4 inline-flex items-center gap-2 text-burgundy hover:text-accent" to="/esperienze">
          <ArrowLeft className="h-4 w-4" /> Torna alle esperienze
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="relative h-[46vh] min-h-[320px]">
        <img src={exp.image} alt={exp.title.it} className="h-full w-full object-cover" />
       <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0">
          <div className="mx-auto max-w-6xl px-5 py-14 text-ivory">
            <Link className="inline-flex items-center gap-2 text-ivory/80 hover:text-ivory" to="/esperienze">
              <ArrowLeft className="h-4 w-4" /> Tutte le esperienze
            </Link>
            <h1 className="mt-6 font-serif text-4xl md:text-5xl font-semibold">{exp.title.it}</h1>
            <p className="mt-4 max-w-2xl text-ivory/85">{exp.shortDescription.it}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="font-serif text-2xl font-semibold">Cosa aspettarsi</h2>
          <p className="mt-3 text-muted leading-relaxed">
            Qui inseriremo descrizione completa, punti di interesse, logistica e varianti (famiglie, foto-stop, orari).
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold">Dettagli</h3>
          <ul className="mt-3 space-y-2 text-muted">
            <li>• Durata: {exp.duration}</li>
            <li>• Livello camminata: {exp.walkingLevel}</li>
            <li>• Da: €{exp.priceFrom}</li>
          </ul>
        </div>

        <aside className="rounded-sm bg-ivory p-6 shadow-soft card-luxury">
          <p className="text-xs tracking-luxe uppercase text-muted">Prenota</p>
          <p className="mt-2 font-serif text-2xl font-semibold">Richiedi un preventivo</p>
          <p className="mt-3 text-sm text-muted">
            Mi dici data, numero persone, lingue, interessi e tempi. Ti rispondo con una proposta chiara.
          </p>

          <a
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-burgundy text-ivory px-5 py-3 text-sm font-semibold shadow-soft hover:shadow-elevated transition-shadow"
            href="https://wa.me/393000000000"
            target="_blank"
            rel="noreferrer"
          >
            <Phone className="h-4 w-4 text-accent" /> Scrivimi su WhatsApp
          </a>

          <p className="mt-4 text-xs text-muted">
            Suggerimento: sostituisci il numero WhatsApp e la mail con i tuoi veri contatti.
          </p>
        </aside>
      </div>
    </div>
  )
}
