import Hero from "../sections/Hero";
import Navbar from "../components/Navbar";
import Stack from "../sections/Stack";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Footer from "../components/Footer";
import Services from "../sections/Services";
import CTA from "../sections/CTA";
import WhatsAppButton from "../components/WhatsappButton";

export default function HomePage() {
    return (
        <main className="relative bg-zinc-950 text-white overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_35%)]" />

            <div className="relative z-10">
                <Navbar />
                <Hero />
                <Stack />
                <About />
                <Services />
                <Projects />
                <CTA />
                <Footer />
                <WhatsAppButton />
            </div>

        </main>
    )
}