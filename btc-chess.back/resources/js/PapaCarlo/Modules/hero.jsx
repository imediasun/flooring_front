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
            <div className="section-heading__description">Lorem ipsum dolor sit amet consectetur. Quis sit tortor vitae semper cras. Pharetra ac elementum dictumst interdum et dolor bibendum. Habitasse pellentesque neque amet et eros donec fermentum. Volutpat felis aenean eu ut auctor quis metus vel aliquam.</div>
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
            <div className="hero-advantage-description">Lorem ipsum dolor sit amet consectetur. Amet pellentesque eu convallis sodales tristique elit. Id rhoncus bibendum sagittis molestie nisl fames mi. Interdum arcu nunc porta tellus massa nunc.</div>
          </div>
          <div className="hero-advantage">
            <div className="hero-advantage__title">Finding the perfect carpentry services</div>
            <div className="hero-advantage-description">Lorem ipsum dolor sit amet consectetur. Amet pellentesque eu convallis sodales tristique elit. Id rhoncus bibendum sagittis molestie nisl fames mi. Interdum arcu nunc porta tellus massa nunc.</div>
          </div>
          <div className="hero-advantage">
            <div className="hero-advantage__title">Our common projects</div>
            <div className="hero-advantage-description">Lorem ipsum dolor sit amet consectetur. Amet pellentesque eu convallis sodales tristique elit. Id rhoncus bibendum sagittis molestie nisl fames mi. Interdum arcu nunc porta tellus massa nunc.</div>
          </div>
        </div>
      </div>
    </div>
  )
}