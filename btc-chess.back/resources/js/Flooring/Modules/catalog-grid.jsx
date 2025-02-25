import Breadcrumbs from "../Components/Breadcrumbs";
import product1Img from "../../../img/content/catalog/product1.png"
import product2Img from "../../../img/content/catalog/product2.png"
import product3Img from "../../../img/content/catalog/product3.png"
import product4Img from "../../../img/content/catalog/product4.png"
import product5Img from "../../../img/content/catalog/product5.png"
import product6Img from "../../../img/content/catalog/product6.png"
import product7Img from "../../../img/content/catalog/product7.png"
import product8Img from "../../../img/content/catalog/product8.png"
import product9Img from "../../../img/content/catalog/product9.png"
import product10Img from "../../../img/content/catalog/product10.png"
import product11Img from "../../../img/content/catalog/product11.png"
import product12Img from "../../../img/content/catalog/product12.png"
import product13Img from "../../../img/content/catalog/product13.png"
import product14Img from "../../../img/content/catalog/product14.png"
import product15Img from "../../../img/content/catalog/product15.png"
import Pagination from "../Components/Pagination";
import SortTrigger from "../Components/Sort";
import FiltersSidebar from "@/Pages/Partials/Filters";
import SvgIcon from "../Components/SvgIcon";
import { useState } from "react";

export default function CatalogGrid() {
  const [isOpenFilters, setIsOpenFilters] = useState(false)

  const closeFiltersHandle = () => {
    setIsOpenFilters(false)
    window.document.body.classList.remove("menu-lock")
  }
  const opneFiltersHandle = () => {
    window.document.body.classList.add("menu-lock")
    setIsOpenFilters(true)
  }

  const breadcrumbsData = [
    {
      "label": "Main",
      "href": "/"
    },
    {
      "label": "Catalog",
      "href": "/catalog"
    }
  ]

  const paginationData = [
    {
      "label": "1",
      "href": "/",
      "isActive": true
    },
    {
      "label": "2",
      "href": "/",
      "isActive": false
    },
    {
      "label": "3",
      "href": "/",
      "isActive": false
    },
    {
      "label": "...",
      "href": "/",
      "isActive": false
    },
    {
      "label": "23",
      "href": "/",
      "isActive": false
    }
  ]

  return(
    <div className="global-section catalog-grid-section">
      <div className="container">
        <Breadcrumbs data={breadcrumbsData} />
        <div className="catalog-grid">
          <div className="catalog-grid__heading">
            <h3 className="global-section-title catalog-title text-align-left"><b>Our</b> catalog</h3>
            <div className="catalog-search-result">(245)</div>
          </div>

          <div className="catalog-grid__controls">
            <button type="button" aria-label="filters btn" className="catalog-filters-trigger" onClick={opneFiltersHandle}>
              <span className="symbol"><SvgIcon name={"filter-set"} /></span>
              <span className="value">Filter</span>
            </button>
            <SortTrigger/>
          </div>

          <div className="catalog-grid__row">
            <div className="catalog-grid__sidebar">
              <FiltersSidebar isOpen={isOpenFilters} closeFilters={closeFiltersHandle} openFilters={opneFiltersHandle}/>
            </div>
            <div className="catalog-grid__content">
              <div className="catalog-list">
                <div className="product-card">
                  <div className="product-card__photo">
                    <img src={product1Img} alt="img" width="310" height="370" className="product-card__photo-img"/>
                    <a href="#" aria-label="details product link" className="product-card__link">details</a>
                  </div>
                  <div className="product-card__info">
                    <a href="#" aria-label="details product link" className="product-card__name">German flooring</a>
                    <div className="product-card__detail">Laminate 9061 Vienna Oak</div>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card__photo">
                    <img src={product2Img} alt="img" width="310" height="370" className="product-card__photo-img"/>
                    <a href="#" aria-label="details product link" className="product-card__link">details</a>
                  </div>
                  <div className="product-card__info">
                    <a href="#" aria-label="details product link" className="product-card__name">German flooring</a>
                    <div className="product-card__detail">Laminate 88169-3 platinum</div>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card__photo">
                    <img src={product3Img} alt="img" width="310" height="370" className="product-card__photo-img"/>
                    <a href="#" aria-label="details product link" className="product-card__link">details</a>
                  </div>
                  <div className="product-card__info">
                    <a href="#" aria-label="details product link" className="product-card__name">German flooring</a>
                    <div className="product-card__detail">Laminate 9013  Capri island</div>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card__photo">
                    <img src={product4Img} alt="img" width="310" height="370" className="product-card__photo-img"/>
                    <a href="#" aria-label="details product link" className="product-card__link">details</a>
                  </div>
                  <div className="product-card__info">
                    <a href="#" aria-label="details product link" className="product-card__name">German flooring</a>
                    <div className="product-card__detail">Laminate GF9006  Oak Wilmington</div>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card__photo">
                    <img src={product5Img} alt="img" width="310" height="370" className="product-card__photo-img"/>
                    <a href="#" aria-label="details product link" className="product-card__link">details</a>
                  </div>
                  <div className="product-card__info">
                    <a href="#" aria-label="details product link" className="product-card__name">German flooring</a>
                    <div className="product-card__detail">Laminate Gf7009  Oak seine</div>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card__photo">
                    <img src={product6Img} alt="img" width="310" height="370" className="product-card__photo-img"/>
                    <a href="#" aria-label="details product link" className="product-card__link">details</a>
                  </div>
                  <div className="product-card__info">
                    <a href="#" aria-label="details product link" className="product-card__name">German flooring</a>
                    <div className="product-card__detail">Quarts Countertops</div>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card__photo">
                    <img src={product7Img} alt="img" width="310" height="370" className="product-card__photo-img"/>
                    <a href="#" aria-label="details product link" className="product-card__link">details</a>
                  </div>
                  <div className="product-card__info">
                    <a href="#" aria-label="details product link" className="product-card__name">German flooring</a>
                    <div className="product-card__detail">Laminate 9013  Capri island</div>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card__photo">
                    <img src={product8Img} alt="img" width="310" height="370" className="product-card__photo-img"/>
                    <a href="#" aria-label="details product link" className="product-card__link">details</a>
                  </div>
                  <div className="product-card__info">
                    <a href="#" aria-label="details product link" className="product-card__name">German flooring</a>
                    <div className="product-card__detail">Laminate 9061 Vienna Oak </div>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card__photo">
                    <img src={product9Img} alt="img" width="310" height="370" className="product-card__photo-img"/>
                    <a href="#" aria-label="details product link" className="product-card__link">details</a>
                  </div>
                  <div className="product-card__info">
                    <a href="#" aria-label="details product link" className="product-card__name">German flooring</a>
                    <div className="product-card__detail">Laminate 88169-3 platinum </div>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card__photo">
                    <img src={product10Img} alt="img" width="310" height="370" className="product-card__photo-img"/>
                    <a href="#" aria-label="details product link" className="product-card__link">details</a>
                  </div>
                  <div className="product-card__info">
                    <a href="#" aria-label="details product link" className="product-card__name">German flooring</a>
                    <div className="product-card__detail">Laminate 88169-3 platinum </div>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card__photo">
                    <img src={product11Img} alt="img" width="310" height="370" className="product-card__photo-img"/>
                    <a href="#" aria-label="details product link" className="product-card__link">details</a>
                  </div>
                  <div className="product-card__info">
                    <a href="#" aria-label="details product link" className="product-card__name">German flooring</a>
                    <div className="product-card__detail">Laminate 9013  Capri island</div>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card__photo">
                    <img src={product12Img} alt="img" width="310" height="370" className="product-card__photo-img"/>
                    <a href="#" aria-label="details product link" className="product-card__link">details</a>
                  </div>
                  <div className="product-card__info">
                    <a href="#" aria-label="details product link" className="product-card__name">German flooring</a>
                    <div className="product-card__detail">Laminate 9061 Vienna Oak </div>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card__photo">
                    <img src={product13Img} alt="img" width="310" height="370" className="product-card__photo-img"/>
                    <a href="#" aria-label="details product link" className="product-card__link">details</a>
                  </div>
                  <div className="product-card__info">
                    <a href="#" aria-label="details product link" className="product-card__name">German flooring</a>
                    <div className="product-card__detail">Laminate 9061 Vienna Oak </div>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card__photo">
                    <img src={product14Img} alt="img" width="310" height="370" className="product-card__photo-img"/>
                    <a href="#" aria-label="details product link" className="product-card__link">details</a>
                  </div>
                  <div className="product-card__info">
                    <a href="#" aria-label="details product link" className="product-card__name">German flooring</a>
                    <div className="product-card__detail">Laminate 9013  Capri island</div>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card__photo">
                    <img src={product15Img} alt="img" width="310" height="370" className="product-card__photo-img"/>
                    <a href="#" aria-label="details product link" className="product-card__link">details</a>
                  </div>
                  <div className="product-card__info">
                    <a href="#" aria-label="details product link" className="product-card__name">German flooring</a>
                    <div className="product-card__detail">Laminate 88169-3 platinum </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Pagination data={paginationData}/>
        </div>
      </div>
    </div>
  )
}
