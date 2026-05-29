export default function CTA() {
    return (
        <section className="py-32">

            <div className="max-w-4xl mx-auto px-6">

                <div className="
          relative
          overflow-hidden
          rounded-[2rem]
          border border-zinc-800
          bg-zinc-900/50
          p-12 md:p-16
        ">

                    <div className="
            absolute
            top-0
            right-0
            w-72
            h-72
            bg-blue-500/10
            blur-3xl
            rounded-full
          " />

                    <div className="relative">

                        <p className="text-blue-400 font-medium mb-4">
                            ¿Listo para trabajar juntos?
                        </p>

                        <h2 className="
              text-4xl
              md:text-5xl
              font-bold
              leading-tight
              mb-8
            ">
                            Puedo ayudarte a construir tu próxima solución web.
                        </h2>

                        <p className="
              text-zinc-400
              text-lg
              leading-relaxed
              max-w-2xl
              mb-10
            ">
                            Desarrollo landing pages modernas, sistemas administrativos
                            y aplicaciones web enfocadas en productividad y negocio.
                        </p>

                        <button className="
              bg-blue-500
              hover:bg-blue-600
              px-8
              py-4
              rounded-2xl
              font-medium
              transition
              duration-300
            ">
                            Contactarme
                        </button>

                    </div>

                </div>

            </div>

        </section>
    )
}