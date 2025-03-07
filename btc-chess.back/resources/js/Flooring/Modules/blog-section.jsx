import blog1 from "../../../img/content/home/blog-section/blog1.png"
import blog2 from "../../../img/content/home/blog-section/blog2.png"
import blog3 from "../../../img/content/home/blog-section/blog3.png"
import blog4 from "../../../img/content/home/blog-section/blog4.png"
import SvgIcon from "../Components/SvgIcon"

export default function BlogSection({blogs}) {

  const firstItem = blogs[0];
  const secondItem = blogs[1];

  return(
    <div className="global-section blog-section">
      <div className="container">
        <div className="blog-section-wrapp">
          <h4 className="global-section-smalltitle blog-section-title">The blog <br /> that inspires</h4>
          <div className="blog-section__box">
            <div className="global-section-subtitle blog-section-subtitle">{firstItem.title}</div>
            <div className="blog-section-list">
              <div className="blog-section-item">
                <div className="blog-section-item__gallery">
                  <div className="blog-section-item__card">
                    <a href="#" aria-label="link" className="blog-section-item__photo">
                      <img src={`/storage/photos/blogs/${firstItem.big_photo}`} alt="img" width="640" height="400" className="blog-section-item__img"/>
                    </a>
                  </div>
                  <div className="blog-section-item__card">
                    <a href="#" aria-label="link" className="blog-section-item__photo">
                      <img src={`/storage/photos/blogs/${firstItem.small_photo}`} alt="img" width="310" height="270" className="blog-section-item__img"/>
                    </a>
                  </div>
                </div>
                <div className="blog-section-item__info">
                  <a href="#" aria-label="link" className="blog-section-item__description">
                      {firstItem.big_caption}
                  </a>
                  <a href="#" aria-label="link" className="blog-section-item__description">
                      {firstItem.small_caption}
                  </a>
                </div>
              </div>

              <div className="blog-section-item">
                <div className="blog-section-item__gallery">
                  <div className="blog-section-item__card">
                    <a href="#" aria-label="link" className="blog-section-item__photo">
                      <img src={`/storage/photos/blogs/${secondItem.small_photo}`} alt="img" width="640" height="400" className="blog-section-item__img"/>
                    </a>

                  </div>
                  <div className="blog-section-item__card">
                    <a href="#" aria-label="link" className="blog-section-item__photo">
                      <img src={`/storage/photos/blogs/${secondItem.big_photo}`} alt="img" width="310" height="270" className="blog-section-item__img"/>
                    </a>
                  </div>
                </div>
                <div className="blog-section-item__info">
                  <a href="#" aria-label="link" className="blog-section-item__description">
                      {secondItem.small_caption}
                  </a>
                  <a href="#" aria-label="link" className="blog-section-item__description">
                      {secondItem.big_caption}
                  </a>
                </div>
              </div>
            </div>

            <div className="blog-section__viewbox">
              <a href="/articles" aria-label="see all link" className="default-link blog-section__viewlink">
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
