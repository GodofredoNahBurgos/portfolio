export default function About() {
    return (
        <section className="py-28 border-t border-zinc-900">
            <div className="max-w-6xl mx-auto px-6">

                <p className="text-blue-400 font-medium mb-4">
                    Sobre mí
                </p>

                <div className="grid md:grid-cols-2 gap-16">

                    <div>
                        <h2 className="text-4xl font-bold leading-tight mb-6">
                            Desarrollo software enfocado en negocio y productividad.
                        </h2>
                    </div>

                    <div>
                        <p className="text-zinc-400 leading-relaxed text-lg mb-6">
                            Soy desarrollador full stack con experiencia construyendo
                            sistemas administrativos, agendas, APIs y aplicaciones web
                            modernas utilizando Laravel, React y TypeScript.
                        </p>

                        <p className="text-zinc-400 leading-relaxed text-lg">
                            Mi enfoque principal es crear soluciones útiles, escalables
                            y mantenibles que ayuden a resolver problemas reales de negocio.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}