import FilterAccordeon from "@/Flooring/Components/FilterAccordeon";
import SvgIcon from "@/Flooring/Components/SvgIcon";
import color1Img from "../../../img/content/catalog/color1.png"
import color2Img from "../../../img/content/catalog/color2.png"
import color3Img from "../../../img/content/catalog/color3.png"
import color4Img from "../../../img/content/catalog/color4.png"
import color5Img from "../../../img/content/catalog/color5.png"
import color6Img from "../../../img/content/catalog/color6.png"
import color7Img from "../../../img/content/catalog/color7.png"


export default function FiltersSidebar({isOpen, closeFilters, openFilters}) {
  return(
    <>
      <button type="button" aria-label="filters-float-btn" className="filters-float-btn" onClick={openFilters}><SvgIcon name={"filter"}/></button>
      <div className={`filters-box ${isOpen ? "active_filters" : ""}`}>
        <div className="filters-inner">
          <div className="filters-heading">
            <div className="filters-title">Filter</div>
            <button type="button" className="filters-close" aria-label="filters close btn" onClick={closeFilters}>
              <SvgIcon name="close" />
            </button>
          </div>
          <div className="filters-listbox">
            <div className="filters-listbox__col">
              <div className="filters-listbox__checks">
                <label className="filters-checkbox">
                  <input type="radio" name="category-check" className="filters-checkbox__input" defaultChecked="checked" />
                  <span className="circle"></span>
                  <span className="holder">ALL CATEGORIES</span>
                </label>
                <label className="filters-checkbox">
                  <input type="radio" name="category-check" className="filters-checkbox__input" />
                  <span className="circle"></span>
                  <span className="holder">Flooring Panels and Wood Flooring Design </span>
                </label>
                <label className="filters-checkbox">
                  <input type="radio" name="category-check" className="filters-checkbox__input" />
                  <span className="circle"></span>
                  <span className="holder">Stone and Quarts Tile for Bathroom</span>
                </label>
                <label className="filters-checkbox">
                  <input type="radio" name="category-check" className="filters-checkbox__input" />
                  <span className="circle"></span>
                  <span className="holder">Quarts Countertops</span>
                </label>
              </div>
            </div>

            <div className="filters-listbox__col">
              <FilterAccordeon title={"Colors"} open={true}>
                <div className="filters-colors">
                  <label className="filters-checkbox-color">
                    <input type="checkbox" name="color" className="filters-checkbox-color__input" />
                    <span className="circle"></span>
                    <span className="holder">
                      <img src={color1Img} alt="img" width="40" height="40" className="filters-checkbox-img"/>
                    </span>

                    <span className="label-hover">Vienna Oak</span>
                  </label>

                  <label className="filters-checkbox-color">
                    <input type="checkbox" name="color" className="filters-checkbox-color__input" defaultChecked="checked" />
                    <span className="circle"></span>
                    <span className="holder">
                      <img src={color2Img} alt="img" width="40" height="40" className="filters-checkbox-img"/>
                    </span>

                    <span className="label-hover">Vienna Oak</span>
                  </label>

                  <label className="filters-checkbox-color">
                    <input type="checkbox" name="color" className="filters-checkbox-color__input" />
                    <span className="circle"></span>
                    <span className="holder">
                      <img src={color3Img} alt="img" width="40" height="40" className="filters-checkbox-img"/>
                    </span>

                    <span className="label-hover">Vienna Oak</span>
                  </label>

                  <label className="filters-checkbox-color">
                    <input type="checkbox" name="color" className="filters-checkbox-color__input" />
                    <span className="circle"></span>
                    <span className="holder">
                      <img src={color4Img} alt="img" width="40" height="40" className="filters-checkbox-img"/>
                    </span>

                    <span className="label-hover">Vienna Oak</span>
                  </label>

                  <label className="filters-checkbox-color">
                    <input type="checkbox" name="color" className="filters-checkbox-color__input" />
                    <span className="circle"></span>
                    <span className="holder">
                      <img src={color5Img} alt="img" width="40" height="40" className="filters-checkbox-img"/>
                    </span>

                    <span className="label-hover">Vienna Oak</span>
                  </label>

                  <label className="filters-checkbox-color">
                    <input type="checkbox" name="color" className="filters-checkbox-color__input" />
                    <span className="circle"></span>
                    <span className="holder">
                      <img src={color6Img} alt="img" width="40" height="40" className="filters-checkbox-img"/>
                    </span>

                    <span className="label-hover">Vienna Oak</span>
                  </label>

                  <label className="filters-checkbox-color">
                    <input type="checkbox" name="color" className="filters-checkbox-color__input" />
                    <span className="circle"></span>
                    <span className="holder">
                      <img src={color7Img} alt="img" width="40" height="40" className="filters-checkbox-img"/>
                    </span>

                    <span className="label-hover">Vienna Oak</span>
                  </label>
                </div>
              </FilterAccordeon>
            </div>

            <div className="filters-listbox__col">
              <FilterAccordeon title={"Size"} open={true}>
                <div className="filters-list-box">
                  <label className="filters-checkbox">
                    <input type="checkbox" name="size" className="filters-checkbox__input" />
                    <span className="circle"></span>
                    <span className="holder">1215x235x12mm</span>
                    <span className="result">(5)</span>
                  </label>
                  <label className="filters-checkbox">
                    <input type="checkbox" name="size" className="filters-checkbox__input" defaultChecked="checked" />
                    <span className="circle"></span>
                    <span className="holder">1215x195x12mm</span>
                    <span className="result">(9)</span>
                  </label>
                  <label className="filters-checkbox">
                    <input type="checkbox" name="size" className="filters-checkbox__input" />
                    <span className="circle"></span>
                    <span className="holder">7x48x12mm</span>
                    <span className="result">(3)</span>
                  </label>
                </div>
              </FilterAccordeon>
            </div>

            <div className="filters-listbox__col">
              <FilterAccordeon title={"Intendent for"} open={true}>
                <div className="filters-list-box">
                  <label className="filters-checkbox">
                    <input type="checkbox" name="intendent" className="filters-checkbox__input" />
                    <span className="circle"></span>
                    <span className="holder">kitchen</span>
                    <span className="result">(35)</span>
                  </label>
                  <label className="filters-checkbox">
                    <input type="checkbox" name="intendent" className="filters-checkbox__input"/>
                    <span className="circle"></span>
                    <span className="holder">bathroom</span>
                    <span className="result">(27)</span>
                  </label>
                  <label className="filters-checkbox">
                    <input type="checkbox" name="intendent" className="filters-checkbox__input" />
                    <span className="circle"></span>
                    <span className="holder">living room</span>
                    <span className="result">(16)</span>
                  </label>
                </div>
              </FilterAccordeon>
            </div>

            <div className="filters-listbox__col">
              <FilterAccordeon title={"In stock"} open={true}>
                <div className="filters-list-box">
                  <label className="filters-checkbox">
                    <input type="checkbox" name="stock" className="filters-checkbox__input" />
                    <span className="circle"></span>
                    <span className="holder">in Washington</span>
                    <span className="result">(48)</span>
                  </label>
                  <label className="filters-checkbox">
                    <input type="checkbox" name="stock" className="filters-checkbox__input"/>
                    <span className="circle"></span>
                    <span className="holder">in California</span>
                    <span className="result">(39)</span>
                  </label>
                </div>
              </FilterAccordeon>
            </div>


            <div className="filters-listbox__col">
              <FilterAccordeon title={"Waterproof"}>
                <div className="filters-list-box">
                  <label className="filters-checkbox">
                    <input type="checkbox" name="waterproof" className="filters-checkbox__input" />
                    <span className="circle"></span>
                    <span className="holder">Waterproof 1</span>
                    <span className="result">(11)</span>
                  </label>
                  <label className="filters-checkbox">
                    <input type="checkbox" name="waterproof" className="filters-checkbox__input"/>
                    <span className="circle"></span>
                    <span className="holder">Waterproof 2</span>
                    <span className="result">(11)</span>
                  </label>
                </div>
              </FilterAccordeon>
            </div>


            <div className="filters-listbox__col">
              <FilterAccordeon title={"Brand"}>
                <div className="filters-list-box">
                  <label className="filters-checkbox">
                    <input type="checkbox" name="brand" className="filters-checkbox__input" />
                    <span className="circle"></span>
                    <span className="holder">Brand 1</span>
                    <span className="result">(11)</span>
                  </label>
                  <label className="filters-checkbox">
                    <input type="checkbox" name="brand" className="filters-checkbox__input"/>
                    <span className="circle"></span>
                    <span className="holder">Brand 2</span>
                    <span className="result">(11)</span>
                  </label>
                </div>
              </FilterAccordeon>
            </div>

            <div className="filters-listbox__col">
              <div className="filters-listbox__checks">
                <label className="filters-checkbox">
                  <input type="checkbox" name="arrivals" className="filters-checkbox__input" />
                  <span className="circle"></span>
                  <span className="holder">New arrivals</span>
                </label>
              </div>
            </div>
          </div>
          <div className="filters-control">
            <button type="button" className="filters-clear" aria-label="clear btn" onClick={closeFilters}>
              <span className="value">Clear</span>
              <span className="symbol"><SvgIcon name={"clear"} /></span>
            </button>
            <button type="button" className="filters-apply" aria-label="apply btn" onClick={closeFilters}>Apply filter</button>
          </div>
        </div>
      </div>
    </>
  )
}
