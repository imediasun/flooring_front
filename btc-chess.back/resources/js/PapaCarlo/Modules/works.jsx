import work1Img from "../../../img/content/home/works/work-1.png"
import work2Img from "../../../img/content/home/works/work-2.png"
import work3Img from "../../../img/content/home/works/work-3.png"
import work4Img from "../../../img/content/home/works/work-4.png"
import DefaultLink from "../Components/DefaultLink"

export default function WorksSection() {
  return(
    <div className="global-section works-section">
      <div className="container">
        <div className="works-heading">
          <h3 className="global-section-title works-title">Our <b>Works</b></h3>
          <DefaultLink
            className="link-underline works-all__link"
          >All our works</DefaultLink>
        </div>

        <div className="works-list">
          <div className="works-item">
            <div className="works-item__photo">
              <img src={work1Img} alt="img" className="works-item__img" width="420" height="365" />
            </div>
            <div className="works-item__name">Craftsmanship</div>
            <div className="works-item__description">Precision, attention to detail, and a commitment to excellence in every project.</div>
            <DefaultLink
              className="link-red link-underline works-item__link"
            >View more</DefaultLink>
          </div>

          <div className="works-item">
            <div className="works-item__photo">
              <img src={work2Img} alt="img" className="works-item__img" width="420" height="365" />
            </div>
            <div className="works-item__name">Durability</div>
            <div className="works-item__description">Built to last with high-quality materials and expert techniques.</div>
            <DefaultLink
              className="link-red link-underline works-item__link"
            >View more</DefaultLink>
          </div>

          <div className="works-item">
            <div className="works-item__photo">
              <img src={work3Img} alt="img" className="works-item__img" width="420" height="365" />
            </div>
            <div className="works-item__name">Creativity</div>
            <div className="works-item__description"> Custom designs tailored to your unique style and needs.</div>
            <DefaultLink
              className="link-red link-underline works-item__link"
            >View more</DefaultLink>
          </div>

          <div className="works-item">
            <div className="works-item__photo">
              <img src={work4Img} alt="img" className="works-item__img" width="420" height="365" />
            </div>
            <div className="works-item__name">Functionality</div>
            <div className="works-item__description">Practical solutions that add value and enhance your space.</div>
            <DefaultLink
              className="link-red link-underline works-item__link"
            >View more</DefaultLink>
          </div>
        </div>
        <DefaultLink
          className="link-underline works-all__link"
        >All our works</DefaultLink>
      </div>
    </div>
  )
}
