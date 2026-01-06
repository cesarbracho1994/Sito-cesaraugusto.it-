export function About() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-xs tracking-luxe uppercase text-muted">Chi sono</p>
      <h1 className="mt-2 font-serif text-4xl font-semibold">Cesar Augusto</h1>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-muted leading-relaxed">
            Inseriamo qui una bio elegante e concreta (Padova/Venezia, approccio premium, lingue, cura del ritmo e della logistica).
            Possiamo aggiungere anche il tuo profilo “musicista professionista” come elemento distintivo.
          </p>

          <ul className="mt-6 space-y-2 text-muted">
            <li>• Lingue: IT / ES / EN</li>
            <li>• Specialità: Venezia, Padova e dintorni</li>
            <li>• Stile: privato, su misura, senza stress</li>
          </ul>
        </div>

        <div className="rounded-sm bg-ivory p-6 shadow-soft card-luxury">
          <p className="text-xs tracking-luxe uppercase text-muted">Valori</p>
          <h2 className="mt-2 font-serif text-2xl font-semibold">Dettagli che contano</h2>
          <p className="mt-3 text-muted leading-relaxed">
            Puntualità, chiarezza, eleganza, empatia. Il cliente deve sentirsi guidato e libero.
          </p>
        </div>
      </div>
    </div>
  )
}
