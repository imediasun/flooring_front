import PrimaryLink from "../Components/PrimaryLink";
import wrenchImg from "../../../img/content/home/services/wrench-2.png"
import BookBtn from "../Components/BookBtn";

export default function NeedSection() {
  return(
    <div className="global-section need-section">
      <div className="container">
        <div className="need-box">
          <img src={wrenchImg} alt="img" className="need-wrench__img" width="216" height="249" />
          <div className="need-box__container">
            <h3 className="global-section-title need-title text-align-center">Need your Home Repair Services?</h3>
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
          <BookBtn
            className="need-book__btn"
            number={6136}
          />
        </div>
      </div>
    </div>
  )
}
