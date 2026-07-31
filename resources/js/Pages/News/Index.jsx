import Navbar from "@/Components/Common/Navbar";
import Footer from "@/Components/Common/Footer";

import NewsHero from "@/Components/News/NewsHero";
import FeaturedNews from "@/Components/News/FeaturedNews";
import NewsGrid from "@/Components/News/NewsGrid";
import NewsPagination from "@/Components/News/NewsPagination";
import NewsletterCTA from "@/Components/News/NewsletterCTA";
import { Head } from "@inertiajs/react";

export default function Index({ news }) {

    const featured = news.data[0];
    const others = news.data.slice(1);

    return (
        <>
            <Head title="Berita" />
            <Navbar />

            <NewsHero />

            <FeaturedNews news={featured} />

            <NewsGrid news={others} />

            <NewsPagination links={news.links} />

            <NewsletterCTA />

            <Footer />
        </>
    );
}