import Navbar from "@/Components/Common/Navbar";
import Footer from "@/Components/Common/Footer";
import AboutHero from "@/Components/About/AboutHero";
import CompanyOverview from "@/Components/About/CompanyOverview";
import CoreValues from "@/Components/About/CoreValues";
import CompanyTimeline from "@/Components/About/CompanyTimeline";
import LeadershipSection from "@/Components/About/LeadershipSection";
import AboutCTA from "@/Components/About/AboutCTA";
import VisionMissionSection from "@/Components/About/VisionMision";
import { Head } from "@inertiajs/react";


export default function About() {
    return (
        <>
            <Head title="Tentang Kami" />
            <Navbar />

            <AboutHero />
            <section id="profil">
                <CompanyOverview />
            </section>
            <section id="visi-misi">
                <VisionMissionSection />
            </section>
            <CoreValues />
            <CompanyTimeline />
            <section id="direksi-komisaris">
                <LeadershipSection />
            </section>
            <section id="kontak">
                <AboutCTA />
            </section>

            <Footer />
        </>
    );
}