import { Head } from '@inertiajs/react'
import Header from './Partials/Header'
import Footer from './Partials/Footer'
import bg from "../../img/content/bg.png";

import HeroSection from '@/Flooring/Modules/hero'
import AppointmentSection from '@/Flooring/Modules/appointment'
import AboutSection from '@/Flooring/Modules/about';
import ProductsHome from '@/Flooring/Modules/products-section';
import BlogSection from '@/Flooring/Modules/blog-section';
import BannerOverview from '@/Flooring/Modules/banner-overview';
import FAQSection from '@/Flooring/Modules/faq';

export default function Home({canLogin, canRegister, faqs, mainPage, contactPage, whoWePage, everythings, articles, blogs}) {

    return (
        <>
            <Head title="Flooring Main"/>
            <Header/>
            <img src={bg} alt="bg img" width="100%" height="100%" className="page_bg"/>
            <div className="content pt-header-height">
                <HeroSection mainPage={mainPage.settings}/>
                <AboutSection whoWePage={whoWePage.settings}/>
                <ProductsHome everythings={everythings}/>
                <BlogSection blogs={blogs}/>
                <BannerOverview mainPage={mainPage.settings}/>
                <FAQSection faqs={faqs}/>
                <AppointmentSection/>
            </div>
            <Footer contactPage={contactPage.settings}/>
        </>
    )
}

