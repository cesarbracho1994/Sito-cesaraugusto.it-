import { Mail, Phone, Instagram } from 'lucide-react'

export function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-xs tracking-luxe uppercase text-muted">Contatti</p>
      <h1 className="mt-2 font-serif text-4xl font-semibold">Parliamo del tuo viaggio</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Scrivimi su WhatsApp o via mail. Se mi dici data, numero persone, lingue e interessi, ti mando una proposta chiara.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <a className="rounded-sm bg-ivory p-6 shadow-soft hover:shadow-elevated transition-shadow card-luxury" href="mailto:info@cesaraugusto.it">
          <div className="flex items-center gap-2 text-accent">
            <Mail className="h-5 w-5" />
            <p className="text-sm tracking-luxe uppercase text-muted">Email</p>
          </div>
          <p className="mt-3 font-semibold text-charcoal">info@cesaraugusto.it</p>
        </a>

        <a className="rounded-sm bg-ivory p-6 shadow-soft hover:shadow-elevated transition-shadow card-luxury" href="https://wa.me/393000000000" target="_blank" rel="noreferrer">
          <div className="flex items-center gap-2 text-accent">
            <Phone className="h-5 w-5" />
            <p className="text-sm tracking-luxe uppercase text-muted">WhatsApp</p>
          </div>
          <p className="mt-3 font-semibold text-charcoal">Scrivimi qui</p>
        </a>

        <a className="rounded-sm bg-ivory p-6 shadow-soft hover:shadow-elevated transition-shadow card-luxury" href="https://instagram.com/cesaraugusto.bb" target="_blank" rel="noreferrer">
          <div className="flex items-center gap-2 text-accent">
            <Instagram className="h-5 w-5" />
            <p className="text-sm tracking-luxe uppercase text-muted">Instagram</p>
          </div>
          <p className="mt-3 font-semibold text-charcoal">@cesaraugusto.bb</p>
        </a>
      </div>
    </div>
  )
}
