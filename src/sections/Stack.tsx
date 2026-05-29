import { stack } from "../data/stack";

export default function Stack() {
    return (
        <section id="stack" className="py-10 border-r border-zinc-900">
            <div className="max-w-6xl mx-auto px-6">
                <p className="text-blue-400 mb-3 font-medium">Stack</p>
                <h1 className="text-4xl font-bold mb-10">Tecnologías con las que trabajo</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                    {stack.map((tech) => (
                        <div key={tech} className="group bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/40 hover:bg-zinc-900 transition duration-300" >
                            <p className="font-medium group-hover:text-blue-400 transition">
                                {tech}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}