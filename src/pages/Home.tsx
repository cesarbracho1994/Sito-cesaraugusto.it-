import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, ShieldCheck, MapPin } from 'lucide-react'
import { experiences } from '../data/experiences'
import { ExperienceCardSimple } from '../components/ExperienceCardSimple'

export function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=2000&q=80"
            alt="Venezia"
            className="h-full w-full object-cover"
          />
         <div className="absolute inset-0 bg-black/35" />

        </div>

        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28 text-ivory">
          <p className="inline-flex items-center gap-2 rounded-sm bg-ivory/10 px-3 py-2 text-xs tracking-luxe uppercase">
            <Sparkles className="h-4 w-4 text-accent" />
            Esperienze private • su misura • premium
          </p>

          <h1 className="mt-6 font-serif text-4xl md:text-6xl font-semibold leading-tight">
            Venezia e Padova,
            <span className="text-accent"> senza stress</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-ivory/85 leading-relaxed">
            Tour eleganti e autentici per viaggiatori esigenti. Ritmo perfetto, logistica chiara,
            attenzione ai dettagli.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              to="/esperienze"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent text-charcoal px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-elevated transition-shadow"
            >
              Scopri le esperienze <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/393000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-ivory text-burgundy px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-elevated transition-shadow"
            >
              Richiedi un preventivo
            </a>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="rounded-sm bg-ivory/10 p-5 card-luxury">
              <div className="flex items-center gap-2 text-accent">
                <ShieldCheck className="h-5 w-5" />
                <p className="text-sm tracking-luxe uppercase">Affidabile</p>
              </div>
              <p className="mt-2 text-sm text-ivory/80">
                Assistenza chiara e presenza discreta: tu ti godi la città, io gestisco ritmo e dettagli.
              </p>
            </div>
            <div className="rounded-sm bg-ivory/10 p-5 card-luxury">
              <div className="flex items-center gap-2 text-accent">
                <MapPin className="h-5 w-5" />
                <p className="text-sm tracking-luxe uppercase">Su misura</p>
              </div>
              <p className="mt-2 text-sm text-ivory/80">
                Itinerari personalizzati: interessi, tempi, mobilità, transfer, ristoranti.
              </p>
            </div>
            <div className="rounded-sm bg-ivory/10 p-5 card-luxury">
              <div className="flex items-center gap-2 text-accent">
                <Sparkles className="h-5 w-5" />
                <p className="text-sm tracking-luxe uppercase">Premium</p>
              </div>
              <p className="mt-2 text-sm text-ivory/80">
                Piccoli gruppi e clienti esigenti: un servizio elegante, umano, preciso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-luxe uppercase text-muted">Selezione</p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl font-semibold">Esperienze in evidenza</h2>
          </div>
          <Link to="/esperienze" className="text-sm font-semibold text-burgundy hover:text-accent">
            Vedi tutte →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {experiences.map((e) => (
            <ExperienceCardSimple key={e.slug} experience={e} />
          ))}
        </div>
      </section>
    </div>
  )
}
