import Navbar from "@/Components/Common/Navbar";
import Footer from "@/Components/Common/Footer";
import ContactHero from "@/Components/Contact/ContactHero";
import ContactInfo from "@/Components/Contact/ContactInfo";
import ContactForm from "@/Components/Contact/ContactForm";
import OfficeLocation from "@/Components/Contact/OfficeLocation";
import ContactCTA from "@/Components/Contact/ContactCTA";
import { Head } from "@inertiajs/react";




export default function Contact() {
    return (
        <>
            <Head title="Hubungi Kami" />
            <Navbar />

            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <OfficeLocation />
            <ContactCTA />

            <Footer />
        </>
    );
}