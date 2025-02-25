import blog1 from "../../../img/content/home/blog-section/blog1.png"
import blog2 from "../../../img/content/home/blog-section/blog2.png"
import blog3 from "../../../img/content/home/blog-section/blog3.png"
import blog4 from "../../../img/content/home/blog-section/blog4.png"
import SvgIcon from "../Components/SvgIcon"

export default function BlogSection() {
  return(
    <div className="global-section blog-section">
      <div className="container">
        <div className="blog-section-wrapp">
          <h4 className="global-section-smalltitle blog-section-title">The blog <br /> that inspires</h4>
          <div className="blog-section__box">
            <div className="global-section-subtitle blog-section-subtitle">Begin your journey to the perfect floor with inspiring ideas! Explore flooring options, home design trends, and creative inspiration to transform your space.</div>
            <div className="blog-section-list">
              <div className="blog-section-item">
                <div className="blog-section-item__gallery">
                  <div className="blog-section-item__card">
                    <a href="#" aria-label="link" className="blog-section-item__photo">
                      <img src={blog1} alt="img" width="640" height="400" className="blog-section-item__img"/>
                    </a>
                    <a href="#" aria-label="link" className="blog-section-item__description">
                      Choosing the perfect flooring for a pet-friendly home
                    </a>
                  </div>
                  <div className="blog-section-item__card">
                    <a href="#" aria-label="link" className="blog-section-item__photo">
                      <img src={blog2} alt="img" width="310" height="270" className="blog-section-item__img"/>
                    </a>
                    <a href="#" aria-label="link" className="blog-section-item__description">
                      What's engineered hardwood flooring?
                    </a>
                  </div>
                </div>
                <div className="blog-section-item__info">
                  <a href="#" aria-label="link" className="blog-section-item__description">
                    Choosing the perfect flooring for a pet-friendly home
                  </a>
                  <a href="#" aria-label="link" className="blog-section-item__description">
                    What's engineered hardwood flooring?
                  </a>
                </div>
              </div>

              <div className="blog-section-item">
                <div className="blog-section-item__gallery">
                  <div className="blog-section-item__card">
                    <a href="#" aria-label="link" className="blog-section-item__photo">
                      <img src={blog3} alt="img" width="640" height="400" className="blog-section-item__img"/>
                    </a>
                    <a href="#" aria-label="link" className="blog-section-item__description">
                      What is backsplash tile?
                    </a>
                  </div>
                  <div className="blog-section-item__card">
                    <a href="#" aria-label="link" className="blog-section-item__photo">
                      <img src={blog4} alt="img" width="310" height="270" className="blog-section-item__img"/>
                    </a>
                    <a href="#" aria-label="link" className="blog-section-item__description">
                      Everything you need to know about laminate flooring
                    </a>
                  </div>
                </div>
                <div className="blog-section-item__info">
                  <a href="#" aria-label="link" className="blog-section-item__description">
                    What is backsplash tile?
                  </a>
                  <a href="#" aria-label="link" className="blog-section-item__description">
                    Everything you need to know about laminate flooring
                  </a>
                </div>
              </div>
            </div>

            <div className="blog-section__viewbox">
              <a href="#" aria-label="see all link" className="default-link blog-section__viewlink">
                <span className="value">Read all articles </span>
                <span className="symbol">
                  <SvgIcon name={"arrow"}/>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
