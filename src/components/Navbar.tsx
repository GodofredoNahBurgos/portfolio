import { Code2 } from 'lucide-react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <div className="fixed top-0 left-0 w-full z-50 px-4 ">

            <header className="max-w-6xl mx-auto border border-zinc-800/60 bg-zinc-950/70 backdrop-blur-xl rounded-2xl">

                <div className="h-16 px-6 flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                            <Code2 className="text-blue-400 w-5 h-5" />
                        </div>

                        <h1 className="font-semibold tracking-wide">
                            Godofredo.dev
                        </h1>

                    </div>

                    <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">

                        <a href="#projects" className="hover:text-white transition" >
                            Proyectos
                        </a>

                        <a href="#stack" className="hover:text-white transition">
                            Stack
                        </a>

                        <a href="#contact" className="hover:text-white transition">
                            Contacto
                        </a>

                    </nav>

                    <button className="md:hidden" onClick={() => setOpen(!open)}>
                        {open ? <X /> : <Menu />}
                    </button>

                </div>

                {
                    open && (

                        <div className="md:hidden border-t border-zinc-800 p-6 flex flex-col gap-6">
                            <a href="#projects">Proyectos</a>
                            <a href="#stack">Stack</a>
                            <a href="#contact">Contacto</a>
                        </div>
                    )
                }

            </header>

        </div>

    )
}