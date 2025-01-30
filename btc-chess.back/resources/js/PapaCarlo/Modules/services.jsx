import PrimaryLink from "../Components/PrimaryLink";
import service1Img from "../../../img/content/home/services/service-1.png"
import service2Img from "../../../img/content/home/services/service-2.png"
import service3Img from "../../../img/content/home/services/service-3.png"
import service4Img from "../../../img/content/home/services/service-4.png"
import service5Img from "../../../img/content/home/services/service-5.png"
import service6Img from "../../../img/content/home/services/service-6.png"
import wrenchImg from "../../../img/content/home/services/wrench.png"

export default function ServicesSection() {
  return(
    <div className="global-section services-section">
      <div className="container">
        <div className="section-heading">
          <div className="section-heading-title__box">
            <img src={wrenchImg} alt="img" className="services-wrench__img" width="217" height="231" />
            <h3 className="global-section-title services-title">Our <b>Services</b></h3>
          </div>
          <div className="section-heading__info">
            <div className="section-heading__description">Our services include:
               <p>• Plumbing: Repairs and installations.</p>
                <p>• Electrical Work: Fixes and upgrades.</p>
                <p>• Furniture Assembly: Quick and hassle-free.</p>
                <p>• Outdoor Services: Deck repairs, landscaping, and more.</p>

                We’re here to handle all your handyman needs with care and expertise. Contact us today!</div>
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

          <div className="services-list">


              <div className="services-item">
                  <a href={"/rooms/Bathroom"}>
                      <div className="services-item__photo">
                          <img src={service2Img} alt="img" className="services-item__img" width="420" height="365"/>
                      </div>
                  </a>
                  <div className="services-item__name">Bathroom</div>
              </div>

              <div className="services-item">
                  <a href={"/rooms/Attic"}>
                      <div className="services-item__photo">
                          <img src={service1Img} alt="img" className="services-item__img" width="420" height="365"/>
                      </div>
                  </a>
                      <div className="services-item__name">Attic</div>
              </div>

              <div className="services-item">
                  <a href={"/rooms/Kitchen"}>
                      <div className="services-item__photo">
                          <img src={service3Img} alt="img" className="services-item__img" width="420" height="365"/>
                      </div>
                  </a>
                      <div className="services-item__name">Kitchen</div>
              </div>

              <div className="services-item">
                  <a href={"/rooms/Hall"}>
                      <div className="services-item__photo">
                          <img src={service4Img} alt="img" className="services-item__img" width="420" height="365"/>
                      </div>
                  </a>
                      <div className="services-item__name">Hall and Resting Area</div>
              </div>

              <div className="services-item">
                  <a href={"/rooms/Garage"}>
                      <div className="services-item__photo">
                          <img src={service5Img} alt="img" className="services-item__img" width="420" height="365"/>
                      </div>
                  </a>
                      <div className="services-item__name">Garage</div>
              </div>

              <div className="services-item">
                  <a href={"/rooms/Stairs"}>
                      <div className="services-item__photo">
                          <img src={service6Img} alt="img" className="services-item__img" width="420" height="365"/>
                      </div>
                  </a>
                      <div className="services-item__name">Stairs</div>
              </div>
          </div>
      </div>
    </div>
  )
}
