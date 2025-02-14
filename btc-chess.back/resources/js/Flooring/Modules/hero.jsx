import logoWhitePng from "../../../img/content/logo-white.png"
import heroImgPng from "../../../img/content/home/hero.png"

export default function HeroSection() {
  return(
    <div className="global-section hero-section">
        <div className="container">
            <h1 className="global-section-bigtitle hero-title"><b>Flooring</b> Main</h1>
            <h2 className="hero-subtitle">We have a huge selection of high-quality materials with modern colors and with affordable prices in-stock.</h2>
            <div className="hero-banner">
                <button type="button" aria-label="book link" className="hero-button__anchor">Book <br/>appointment</button>
                <img src={logoWhitePng} alt="img" width="130" height="140" className="hero-banner__logo"/>
                <img src={heroImgPng} alt="img" width="100%" height="100%" className="hero-banner__img"/>
            </div>
        </div>
    </div>
  )
}
