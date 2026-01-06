import { Outlet, NavLink } from 'react-router-dom'
import { Instagram, Mail, Phone } from 'lucide-react'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'text-sm tracking-luxe uppercase',
    'transition-colors',
    isActive ? 'text-accent' : 'text-ivory/85 hover:text-ivory',
  ].join(' ')

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-burgundy text-ivory">
        <div className="mx-auto max-w-6xl px-5 py-5 flex items-center justify-between">
          <a href="/" className="flex items-baseline gap-3">
            <span className="font-serif text-2xl md:text-3xl font-semibold">Cesar Augusto</span>
            <span className="hidden sm:inline text-xs tracking-luxe uppercase text-ivory/80">
              Private Tours
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/esperienze" className={navLinkClass}>
              Esperienze
            </NavLink>
            <NavLink to="/chi-sono" className={navLinkClass}>
              Chi sono
            </NavLink>
            <NavLink to="/contatti" className={navLinkClass}>
              Contatti
            </NavLink>
          </nav>

          <a
            href="https://wa.me/393000000000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-ivory text-burgundy px-4 py-2 text-sm font-semibold shadow-soft hover:shadow-elevated transition-shadow"
          >
            <Phone className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-6xl px-5 py-10 grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl font-semibold">Cesar Augusto Bracho Bracho</p>
            <p className="mt-2 text-sm text-ivory/75">
              Accompagnatore turistico — Venezia • Padova • dintorni
            </p>
            <p className="mt-4 text-xs text-ivory/60">
              P.IVA: INSERISCI-LA-TUA • REA/PEC (se serve) • © {new Date().getFullYear()}
            </p>
          </div>

          <div>
            <p className="text-sm tracking-luxe uppercase text-ivory/85">Contatti</p>
            <div className="mt-3 grid gap-2 text-sm">
              <a className="inline-flex items-center gap-2 text-ivory/80 hover:text-ivory" href="mailto:info@cesaraugusto.it">
                <Mail className="h-4 w-4 text-accent" /> info@cesaraugusto.it
              </a>
              <a className="inline-flex items-center gap-2 text-ivory/80 hover:text-ivory" href="https://wa.me/393000000000" target="_blank" rel="noreferrer">
                <Phone className="h-4 w-4 text-accent" /> WhatsApp
              </a>
              <a className="inline-flex items-center gap-2 text-ivory/80 hover:text-ivory" href="https://instagram.com/cesaraugusto.bb" target="_blank" rel="noreferrer">
                <Instagram className="h-4 w-4 text-accent" /> @cesaraugusto.bb
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm tracking-luxe uppercase text-ivory/85">Servizi</p>
            <ul className="mt-3 space-y-2 text-sm text-ivory/80">
              <li>• Tour privati e su misura</li>
              <li>• Itinerari “senza stress” per gruppi premium</li>
              <li>• Consigli ristoranti e logistica (transfer/park)</li>
              <li>• Lingue: IT / ES / EN</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
