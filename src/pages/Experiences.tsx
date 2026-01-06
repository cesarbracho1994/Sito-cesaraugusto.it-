import { experiences } from '../data/experiences'
import { ExperienceCardSimple } from '../components/ExperienceCardSimple'

export function Experiences() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-xs tracking-luxe uppercase text-muted">Catalogo</p>
      <h1 className="mt-2 font-serif text-4xl font-semibold">Esperienze</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Scegli un itinerario pronto o chiedimi un percorso su misura (orari, interessi, mobilità, transfer, ristoranti).
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {experiences.map((e) => (
          <ExperienceCardSimple key={e.slug} experience={e} />
        ))}
      </div>
    </div>
  )
}
