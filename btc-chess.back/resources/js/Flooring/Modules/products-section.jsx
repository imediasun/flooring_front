import prductMaterial1 from "../../../img/content/home/products-home/material1.png"
import prductPlace1 from "../../../img/content/home/products-home/place1.png"
import prductMaterial2 from "../../../img/content/home/products-home/material2.png"
import prductPlace2 from "../../../img/content/home/products-home/place2.png"
import prductMaterial3 from "../../../img/content/home/products-home/material3.png"
import prductPlace3 from "../../../img/content/home/products-home/place3.png"
import SvgIcon from "../Components/SvgIcon"

export default function ProductsHome({everythings}) {

  return(
    <div className="global-section products-home-section">
      <div className="container">
        <div className="products-home-wrapp">
          <h4 className="global-section-smalltitle products-home-title">Everything for <br /> Your Home</h4>
          <div className="products-home-list">
              {
                  everythings.map((item) => (
                      <div className="products-home-item">
                          <div className="products-home-item__gallery">
                              <div className="products-home-item__photo">
                                  <img src={`/storage/photos/everythings/${item.small_photo}`} alt="img" width="310" height="255"
                                       className="products-home-item__img"/>
                              </div>
                              <div className="products-home-item__photo">
                                  <img src={`/storage/photos/everythings/${item.big_photo}`} alt="img" width="640" height="600"
                                       className="products-home-item__img"/>
                                  <a href="/" aria-label="learm more link"
                                     className="products-home-item__link">Learn <br/> more</a>
                              </div>
                          </div>
                          <div className="products-home-item__info">
                              <div className="products-home-item__description">
                                  {item.small_caption}
                              </div>
                              <div className="products-home-item__description">
                                  {item.big_caption}
                              </div>
                          </div>
                      </div>
                  ))
              }
          </div>

            <div className="products-home__viewbox">
                <a href="/catalog" aria-label="see all link" className="default-link products-home__viewlink">
                    <span className="value">See all products</span>
                    <span className="symbol">
                <SvgIcon name={"arrow"}/>
              </span>
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}
