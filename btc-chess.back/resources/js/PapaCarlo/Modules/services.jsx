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
            <div className="section-heading__description">At PapaCarlo Company we specialize in providing top-notch carpentry and handyman services in Seattle. Whether you need custom woodworking, furniture assembly, home repairs, or full-scale renovations, we deliver exceptional craftsmanship and reliable solutions tailored to your needs.
                Give us a Phone Call or Get a Qoute to astimate your future order</div>
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

        <div className="services-list">
          <div className="services-item">
            <div className="services-item__photo">
              <img src={service1Img} alt="img" className="services-item__img" width="420" height="365" />
            </div>
            <div className="services-item__name">Electrical works</div>
          </div>

          <div className="services-item">
            <div className="services-item__photo">
              <img src={service2Img} alt="img" className="services-item__img" width="420" height="365" />
            </div>
            <div className="services-item__name">Bathroom</div>
          </div>

          <div className="services-item">
            <div className="services-item__photo">
              <img src={service3Img} alt="img" className="services-item__img" width="420" height="365" />
            </div>
            <div className="services-item__name">Assembly</div>
          </div>

          <div className="services-item">
            <div className="services-item__photo">
              <img src={service4Img} alt="img" className="services-item__img" width="420" height="365" />
            </div>
            <div className="services-item__name">Handyman jobs</div>
          </div>

          <div className="services-item">
            <div className="services-item__photo">
              <img src={service5Img} alt="img" className="services-item__img" width="420" height="365" />
            </div>
            <div className="services-item__name">Plumbing</div>
          </div>

          <div className="services-item">
            <div className="services-item__photo">
              <img src={service6Img} alt="img" className="services-item__img" width="420" height="365" />
            </div>
            <div className="services-item__name">Maintenance</div>
          </div>
        </div>
      </div>
    </div>
  )
}
