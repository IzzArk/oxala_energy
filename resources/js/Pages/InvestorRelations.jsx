import AnnualReports from "@/Components/InvestorRelation/AnnualReports";
import CompanyHighlights from "@/Components/InvestorRelation/CompanyHighlights";
import FinancialHighlights from "@/Components/InvestorRelation/FinancialHighlights";
import InvestorCalendar from "@/Components/InvestorRelation/InvestorCallendar";
import InvestorContact from "@/Components/InvestorRelation/InvestorContact";
import InvestorHero from "@/Components/InvestorRelation/InvestorHero";
import Footer from "@/Components/Common/Footer";
import Navbar from "@/Components/Common/Navbar";
import { Head } from "@inertiajs/react";

export default function InvestorRelations({
    reports, events
}) {
    return (
        <>
            <Head title="Hubungan Investor" />
            <Navbar />

            <InvestorHero />
            <CompanyHighlights />
            <FinancialHighlights />
            <section id="laporan-tahunan">
                <AnnualReports reports={reports} />
            </section>
            <section id="kalender-investor">
                <InvestorCalendar events={events} />
            </section>
            <InvestorContact />

            <Footer />
        </>
    );
}