import PrimaryLink from "../Components/PrimaryLink";
import heroImgPng from "../../../img/content/home/hero.png"

export default function HeroSection() {
  return(
    <div className="global-section hero-section">
      <div className="container">
        <div className="section-heading">
          <div className="section-heading-title__box">
            <h1 className="hero-title">Carpentry</h1>
          </div>
          <div className="section-heading__info">
            <div className="section-heading__description">"Crafting quality solutions for your home! 🛠️ From custom carpentry to repairs, we bring precision, reliability, and expert craftsmanship to every project. Serving Seattle with pride—let’s build something great together!"</div>
            <div className="section-heading__btns">
              <PrimaryLink
                isTelLink={true}
                href={"tel:4402586136"}
                className={"section-heading-btn"}
              >(440) 258-6136</PrimaryLink>

              <PrimaryLink
                href={"/"}
                className={"section-heading-btn"}
              >Get a quote</PrimaryLink>
            </div>
          </div>
        </div>

        <div className="hero-banner">
          <img src={heroImgPng} alt="img" className="hero-banner__img" width="1440" height="570" />
        </div>

        <div className="hero-advantages">
          <div className="hero-advantage">
            <div className="hero-advantage__title">Getting the best value</div>
            <div className="hero-advantage-description"> In Seattle, we pride ourselves on offering exceptional carpentry services at fair prices. Let’s create something amazing together—contact us today!</div>
          </div>
          <div className="hero-advantage">
            <div className="hero-advantage__title">Finding the perfect carpentry services</div>
            <div className="hero-advantage-description">Whether you need custom furniture, home repairs, or creative woodwork designs, choosing the right carpenter is key to bringing your vision to life.</div>
          </div>
          <div className="hero-advantage">
            <div className="hero-advantage__title">Our common projects</div>
            <div className="hero-advantage-description">At PapaCarlo Handyman Company, we specialize in crafting solutions for your home and business needs.           Custom Furniture – Tables, shelves, cabinets, and more designed to match your style.
                Home Repairs – Door replacements, trim work, and structural fixes done with precision.

                Contact us today for a free estimate!</div>
          </div>
        </div>
      </div>
    </div>
  )
}
