import Footer from "@/Components/Common/Footer";
import Navbar from "@/Components/Common/Navbar";
import ProductHero from "../Components/Products/ProductHero";
import ProductCategories from "../Components/Products/ProductCatergory";
import ProductSolutions from "../Components/Products/ProductSolution";
import ProductAdvantages from "../Components/Products/ProductAdventages";
import ProductCTA from "../Components/Products/ProductCTA";
import { Head } from "@inertiajs/react";


export default function Products() {
    return (
        <>
            <Head title="Produk" />
            <Navbar />

            <ProductHero />
            <ProductCategories />
            <ProductSolutions />
            <ProductAdvantages />
            <ProductCTA />

            <Footer />
        </>
    );
}