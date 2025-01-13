import bgChooce from "../../../img/content/home/choose/bg.png"
import bgMobileChooce from "../../../img/content/home/choose/bg-mobile.png"
import ChooceItem1 from "../../../img/content/home/choose/choose-1.png"
import ChooceItem2 from "../../../img/content/home/choose/choose-2.png"
import ChooceItem3 from "../../../img/content/home/choose/choose-3.png"


export default function ChooseSection() {
  return(
    <div className="global-section s-py-100 choose-section">
      <img src={bgChooce} alt="img" className="choose-bg__img" width="1440" height="950" />
      <img src={bgMobileChooce} alt="img" className="choose-bg-mobile__img" width="360" height="1312" />
      <div className="container">
        <div className="choose__box">
          <h3 className="global-section-title title-white choose-title">Why Customers <br /><b>Choose Us</b></h3>
          <div className="choose-list">
            <div className="choose-item_wrapp">
              <div className="choose-item">
                <div className="choose-item__photo">
                  <img src={ChooceItem1} alt="img" className="services-item__img" width="86" height="86" />
                </div>
                <div className="choose-item__name">Customer satisfaction</div>
                <div className="choose-item__description">We’re not happy until you are, which is why we have so many happy clients.</div>
              </div>
            </div>
            <div className="choose-item_wrapp">
              <div className="choose-item">
                <div className="choose-item__photo">
                  <img src={ChooceItem2} alt="img" className="services-item__img" width="86" height="86" />
                </div>
                <div className="choose-item__name">Quality Workmanship</div>
                <div className="choose-item__description">At Papa Carlo Company, we believe that every project deserves nothing less than excellence. Whether it’s a small repair or a custom build, we bring the same dedication to every project. </div>
              </div>
            </div>
            <div className="choose-item_wrapp">
              <div className="choose-item">
                <div className="choose-item__photo">
                  <img src={ChooceItem3} alt="img" className="services-item__img" width="86" height="86" />
                </div>
                <div className="choose-item__name">Honesty and Integrity</div>
                <div className="choose-item__description">We deliver on our promises, meeting deadlines and exceeding expectations. We never cut corners because your trust matters to us. When you choose us, you’re choosing a team that stands by its word and works with your best interests at heart.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
