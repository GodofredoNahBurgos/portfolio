type Props = {
    title: string
    description: string
    stack: string[]
}

export default function ProjectCard({
    title,
    description,
    stack,
}: Props) {
    return (
        <article className="hover:-translate-y-1 in-last:group bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition duration-300">

            <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl">
                    ✦
                </div>

                <span className="text-zinc-500 text-sm">
                    Proyecto
                </span>
            </div>

            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">
                {title}
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-8">
                {description}
            </p>

            <div className="flex flex-wrap gap-3">
                {stack.map((item) => (
                    <span
                        key={item}
                        className="px-4 py-2 rounded-xl bg-zinc-800 text-sm text-zinc-300"
                    >
                        {item}
                    </span>
                ))}
            </div>

        </article>
    )
}