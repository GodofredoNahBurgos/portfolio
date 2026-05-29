import { services } from '../data/services'

export default function Services() {
    return (
        <section className="py-28 border-t border-zinc-900">

            <div className="max-w-6xl mx-auto px-6">

                <p className="text-blue-400 font-medium mb-4">
                    Servicios
                </p>

                <h2 className="text-4xl font-bold mb-14 max-w-2xl">
                    Soluciones digitales enfocadas en negocio y productividad.
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {services.map((service) => (
                        <article
                            key={service.title}
                            className="
                bg-zinc-900/50
                border border-zinc-800
                rounded-3xl
                p-8
                hover:border-blue-500/30
                transition
                duration-300
              "
                        >

                            <div className="
                w-14 h-14
                rounded-2xl
                bg-blue-500/10
                flex items-center justify-center
                text-blue-400
                text-xl
                mb-8
              ">
                                ✦
                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                {service.title}
                            </h3>

                            <p className="text-zinc-400 leading-relaxed">
                                {service.description}
                            </p>

                        </article>
                    ))}

                </div>

            </div>

        </section>
    )
}