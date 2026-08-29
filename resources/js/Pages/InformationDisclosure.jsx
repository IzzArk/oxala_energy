import Navbar from "@/Components/Common/Navbar";
import Footer from "@/Components/Common/Footer";
import InformationHero from "@/Components/InformationDisclosure/InformationHero";
import InformationOverview from "@/Components/InformationDisclosure/InformationOverview";
import InformationServices from "@/Components/InformationDisclosure/InformationServices";
import InformationDocuments from "@/Components/InformationDisclosure/InformationDocuments";
import InformationCTA from "@/Components/InformationDisclosure/InformationCTA";
import { Head } from "@inertiajs/react";


export default function InformationDisclosure({ documents }) {
    return (
        <>
            <Head title="Keterbukaan Informasi" />
            <Navbar />

            <InformationHero />
            <InformationOverview />
            <InformationServices />

            <section id="dokumen-informasi">
                <InformationDocuments documents={documents} />
            </section>
            <InformationCTA />

            <Footer />
        </>
    );
}