import profile from '../assets/profile.png'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">

            {/* Glow */}
            <div
                className="
    absolute
    top-[-120px]
    left-1/2
    -translate-x-1/2
    w-[700px]
    h-[700px]
    bg-blue-500/15
    blur-[120px]
    rounded-full
    pointer-events-none
  "
            />

            <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

                {/* Contenido */}
                <div>

                    <p className=" text-blue-400 font-medium mb-6 tracking-wide uppercase text-sm">
                        Full Stack Developer
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                        Desarrollo software moderno enfocado en soluciones reales.
                    </h1>

                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
                        Construyo sistemas administrativos, APIs y landing pages
                        modernas utilizando Laravel, React, TypeScript y herramientas
                        enfocadas en productividad y negocio.
                    </p>

                    {/* Botones */}
                    <div className="flex flex-wrap gap-5">
                        <a href="#projects" className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-2xl font-medium transition duration-300 shadow-lg shadow-blue-500/20 hover:scale-[1.02]">
                            Ver proyectos
                        </a>

                        <a href="#contact" className="border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 px-8 py-4 rounded-2xl font-medium transition duration-300">
                            Contactarme
                        </a>
                    </div>

                    {/* Redes */}
                    <div className="flex items-center gap-6 mt-10 text-zinc-400">
                        <a href="https://github.com/godofredonahburgos" target="_blank" className="hover:text-white transition">
                            GitHub
                        </a>

                        <a href="https://linkedin.com/in/godofredonah" target="_blank" className="hover:text-white transition">
                            LinkedIn
                        </a>
                    </div>

                </div>

                {/* Foto */}
                <div className="relative flex justify-center">

                    <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />

                    <div className="relative w-[340px] h-[460px] rounded-4xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl shadow-blue-500/10">

                        <img src={profile} alt="Profile" className="w-full h-full object-cover" />

                    </div>

                </div>

            </div>

        </section>
    )
}