import HeroSection from '@/PapaCarlo/Modules/hero'
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
      </div>
      {/* <Footer /> */}
    </>
  )
}
