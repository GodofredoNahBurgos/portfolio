import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-28 border-t border-zinc-900"
        >
            <div className="max-w-6xl mx-auto px-6">

                <p className="text-blue-400 font-medium mb-4">
                    Proyectos
                </p>

                <h2 className="text-4xl font-bold mb-14">
                    Algunos proyectos recientes
                </h2>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            stack={project.stack}
                        />
                    ))}

                </div>

            </div>
        </section>
    )
}