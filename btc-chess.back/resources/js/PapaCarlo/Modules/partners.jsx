import partnerImg1 from "../../../img/content/home/partners/partner-1.png"
import partnerImg2 from "../../../img/content/home/partners/partner-2.png"

export default function PartnersSection() {
  return(
    <div className="global-section s-py-75 partners-section">
      <div className="container">
        <h3 className="global-section-title partners-title">Our partners</h3>
        <div className="partners-list">
          <div className="partners-item">
            <img src={partnerImg1} alt="img" className="partners-item__img" width="200" height="105" />
          </div>
          <div className="partners-item">
            <img src={partnerImg2} alt="img" className="partners-item__img" width="200" height="105" />
          </div>
          <div className="partners-item">
            <img src={partnerImg1} alt="img" className="partners-item__img" width="200" height="105" />
          </div>
          <div className="partners-item">
            <img src={partnerImg2} alt="img" className="partners-item__img" width="200" height="105" />
          </div>
          <div className="partners-item">
            <img src={partnerImg1} alt="img" className="partners-item__img" width="200" height="105" />
          </div>
          <div className="partners-item">
            <img src={partnerImg2} alt="img" className="partners-item__img" width="200" height="105" />
          </div>
        </div>
      </div>
    </div>
  )
}