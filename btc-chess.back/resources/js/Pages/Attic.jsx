import { Head } from '@inertiajs/react'
import Header from './Partials/Header'
import Footer from './Partials/Footer'

import AppointmentSection from '@/PapaCarlo/Modules/appointment'
import ChooseSection from '@/PapaCarlo/Modules/choose'
import AtticSection from '@/PapaCarlo/Modules/attic'
import NeedSection from '@/PapaCarlo/Modules/need'
import PartnersSection from '@/PapaCarlo/Modules/partners'
import ReviewsSection from '@/PapaCarlo/Modules/reviews'
import ServicesSection from '@/PapaCarlo/Modules/services'
import WorksSection from '@/PapaCarlo/Modules/works'

export default function Home() {
  return (
    <>
      <Head title="PAPACARLO handyman" />
      <Header />

      <div className="content pt-header-height">
        <AtticSection/>
        <ServicesSection/>
      </div>
      <Footer />
    </>
  )
}
