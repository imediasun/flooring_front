import PrimaryLink from "../Components/PrimaryLink";
import heroImgPng from "../../../img/content/home/hero.png"
import heroImgPngWithStairs from "../../../img/content/home/hero_with_stairs.jpeg"
import review_papacarlo from "../../../img/content/home/review_papacarlo.png";
import wrenchImg from "../../../img/content/home/services/wrench.png";

export default function HeroSection() {
  return(
    <div className="global-section hero-section">
        <div className="container">

            <div className="section-heading">


                <div className="section-heading-title__box">

                    <div className="section-heading-title__box">
                        <img src={wrenchImg} alt="img" className="services-wrench__img" width="217" height="231"/>
                        <h3 className="global-section-title services-title">About <b>Us</b></h3><br></br>
                    </div>

                    <h1 className="hero-title">Handyman</h1>
                </div>

                <div className="section-heading__info">
                    <div className="section-heading__description">"Founded in 2022 in California, our handyman company relocated to Washington and now serves Seattle, Renton, Kent, Bellevue, and beyond. With over 700 completed projects and 300 reviews (97% positive), we’ve earned a reputation for reliability and quality."
                    </div>
                    <div className="section-heading__btns">
                        <PrimaryLink
                            isTelLink={true}
                            href={"tel:19169381545"}
                            className={"section-heading-btn"}
                        >+1(916)938-15-45</PrimaryLink>

                        <PrimaryLink
                            href={"/"}
                            className={"section-heading-btn"}
                        >Get a quote</PrimaryLink>
                    </div>
                </div>
            </div>

            <div className="hero-banner">
                <img src={heroImgPng} alt="img" className="hero-banner__img" width="1440" height="570"/>
            </div>

            <div className="hero-advantages">
                <div className="hero-advantage">
                    <div className="hero-advantage__title">Getting the best value</div>
                    <div className="hero-advantage-description"> In Seattle, we pride ourselves on offering exceptional
                        carpentry services at fair prices. Let’s create something amazing together—contact us today!
                    </div>
                </div>
                <div className="hero-advantage">
                    <div className="hero-advantage__title">Finding the perfect carpentry services</div>
                    <div className="hero-advantage-description">Whether you need custom furniture, home repairs, or
                        creative woodwork designs, choosing the right carpenter is key to bringing your vision to life.
                    </div>
                </div>
                <div className="hero-advantage">
                    <div className="hero-advantage__title">Our common projects</div>
                    <div className="hero-advantage-description">At PapaCarlo Handyman Company, we specialize in crafting
                        solutions for your home and business needs. Custom Furniture – Tables, shelves, cabinets, and
                        more designed to match your style.
                        Home Repairs – Door replacements, trim work, and structural fixes done with precision.

                        Contact us today for a free estimate!
                    </div>
                </div>
            </div>

            <div className="hero-banner-with-stairs">
                <img src={heroImgPngWithStairs} alt="img" width="100%" height="100%"/>
            </div>

        </div>
    </div>
  )
}
