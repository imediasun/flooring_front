import {Head} from '@inertiajs/react'
import Header from './Partials/Header'
import Footer from './Partials/Footer'
import bg from "../../img/content/bg.png";

import HeroSection from '@/Flooring/Modules/hero'
import AppointmentSection from '@/Flooring/Modules/appointment'
import CatalogGrid from "@/Flooring/Modules/catalog-grid.jsx";

export default function Catalog() {
    return (
        <>
            <Head title="Flooring Main"/>
            <Header/>
            <img src={bg} alt="bg img" width="100%" height="100%" className="page_bg"/>
            <div className="content pt-header-height">
                <CatalogGrid/>
                <AppointmentSection/>
            </div>
            <Footer/>
        </>
    )
}
