import {
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
} from 'react-icons/fa'

import { Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer
            id="contact"
            className="border-t border-zinc-900 py-16"
        >
            <div className="max-w-6xl mx-auto px-6">

                <div className="
          flex
          flex-col
          md:flex-row
          items-start
          md:items-center
          justify-between
          gap-10
        ">

                    {/* Texto */}
                    <div>

                        <h3 className="text-3xl font-bold mb-4">
                            ¿Tienes un proyecto en mente?
                        </h3>

                        <p className="text-zinc-400 max-w-xl leading-relaxed">
                            Desarrollo landing pages modernas, sistemas web y soluciones
                            enfocadas en productividad y negocio.
                        </p>

                    </div>

                    {/* Redes */}
                    <div className="flex items-center gap-4">

                        <a
                            href="https://github.com/TUUSUARIO"
                            target="_blank"
                            className="
                w-12 h-12
                rounded-2xl
                border border-zinc-800
                flex items-center justify-center
                hover:bg-zinc-900
                hover:border-zinc-700
                transition
              "
                        >
                            <FaGithub className="text-lg" />
                        </a>

                        <a
                            href="https://linkedin.com/in/TUUSUARIO"
                            target="_blank"
                            className="
                w-12 h-12
                rounded-2xl
                border border-zinc-800
                flex items-center justify-center
                hover:bg-zinc-900
                hover:border-zinc-700
                transition
              "
                        >
                            <FaLinkedin className="text-lg" />
                        </a>

                        <a
                            href="mailto:correo@correo.com"
                            className="
                w-12 h-12
                rounded-2xl
                border border-zinc-800
                flex items-center justify-center
                hover:bg-zinc-900
                hover:border-zinc-700
                transition
              "
                        >
                            <Mail className="w-5 h-5" />
                        </a>

                        <a
                            href="https://wa.me/TUNUMERO"
                            target="_blank"
                            className="
                w-12 h-12
                rounded-2xl
                border border-zinc-800
                flex items-center justify-center
                hover:bg-zinc-900
                hover:border-zinc-700
                transition
              "
                        >
                            <FaWhatsapp className="text-lg" />
                        </a>

                    </div>

                </div>

                {/* Bottom */}
                <div className="
          mt-16
          pt-8
          border-t border-zinc-900
          flex
          flex-col
          md:flex-row
          justify-between
          gap-4
          text-sm
          text-zinc-500
        ">

                    <p>
                        © 2026 Godofredo.dev
                    </p>

                    <p>
                        Built with React + TypeScript + Tailwind
                    </p>

                </div>

            </div>
        </footer>
    )
}