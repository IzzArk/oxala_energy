import Navbar from "@/Components/Common/Navbar";
import Hero from "@/Components/Landing/Hero";
import Services from "@/Components/Landing/Service";
import Advantages from "@/Components/Landing/Adventages";
import CTASection from "@/Components/Landing/CTASection";
import Footer from "@/Components/Common/Footer";
import { Head } from "@inertiajs/react";
import CarbonCredit from "@/Components/Landing/CarbonCredit";


export default function Home({ banners }) {
    return (
        <>
            <Head title="Home" />
            <div className="min-h-screen bg-[#f5f7fb]">
                <Navbar />
                <Hero banners={banners} />
                <CarbonCredit />
                <Services />
                <Advantages />
                <CTASection />
                <Footer />
            </div>
        </>
    );
}