import ChooseSection from '@/PapaCarlo/Modules/choose'
import HeroSection from '@/PapaCarlo/Modules/hero'
import NeedSection from '@/PapaCarlo/Modules/need'
import PartnersSection from '@/PapaCarlo/Modules/partners'
import ServicesSection from '@/PapaCarlo/Modules/services'
import WorksSection from '@/PapaCarlo/Modules/works'
import { Head } from '@inertiajs/react'

// import Header from './Partials/Header'
// import Footer from './Partials/Footer'

export default function Home() {
  return (
    <>
      <Head title="PAPACARLO handyman" />
      {/* <Header /> */}

      <div className="content pt-header-height">
        <HeroSection/>
        <ServicesSection/>
        <ChooseSection/>
        <WorksSection/>
        <PartnersSection/>
        <NeedSection/>
      </div>
      {/* <Footer /> */}
    </>
  )
}
