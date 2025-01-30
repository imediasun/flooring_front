import PrimaryLink from "../Components/PrimaryLink";
import service1Img from "../../../img/content/home/services/bathroom_service-1.jpeg"
import service2Img from "../../../img/content/home/services/bathroom_service-2.jpeg"
import service3Img from "../../../img/content/home/services/bathroom_service-3.jpeg"
import service4Img from "../../../img/content/home/services/bathroom_service-4.jpeg"
import service5Img from "../../../img/content/home/services/bathroom_service-5.jpeg"
import service6Img from "../../../img/content/home/services/bathroom_service-6.jpeg"
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
            <div className="section-heading__description">At PapaCarlo Company we specialize in providing top-notch carpentry and handyman services in Seattle. Whether you need custom woodworking, furniture assembly, home repairs, or full-scale renovations, we deliver exceptional craftsmanship and reliable solutions tailored to your needs.
                Give us a Phone Call or Get a Qoute to astimate your future order</div>
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
                      <div className="services-item__photo">
                          <img src={service2Img} alt="img" className="services-item__img" width="420" height="365"/>
                      </div>
                  <div className="services-item__name">Toilet</div>
              </div>

              <div className="services-item">
                      <div className="services-item__photo">
                          <img src={service1Img} alt="img" className="services-item__img" width="420" height="365"/>
                      </div>
                      <div className="services-item__name">Shower</div>
              </div>

              <div className="services-item">
                      <div className="services-item__photo">
                          <img src={service3Img} alt="img" className="services-item__img" width="420" height="365"/>
                      </div>
                      <div className="services-item__name">Furniture</div>
              </div>

              <div className="services-item">
                      <div className="services-item__photo">
                          <img src={service4Img} alt="img" className="services-item__img" width="420" height="365"/>
                      </div>
                      <div className="services-item__name">Shower</div>
              </div>

              <div className="services-item">
                      <div className="services-item__photo">
                          <img src={service5Img} alt="img" className="services-item__img" width="420" height="365"/>
                      </div>
                      <div className="services-item__name">Mirror</div>
              </div>

              <div className="services-item">
                      <div className="services-item__photo">
                          <img src={service6Img} alt="img" className="services-item__img" width="420" height="365"/>
                      </div>
                      <div className="services-item__name">Bath</div>
              </div>
          </div>
      </div>
    </div>
  )
}
