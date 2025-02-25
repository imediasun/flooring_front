import logoWhitePng from "../../../img/content/logo-white.png"
import BannerImgPng from "../../../img/content/home/banner.png"

export default function BannerOverview() {
  return(
    <div className="global-section banner-overview-section">
      <div className="container">
        <div className="banner-overview-box">
          <img src={logoWhitePng} alt="img" width="130" height="140" className="banner-overview__logo"/>
          <img src={BannerImgPng} alt="img" width="100%" height="100%" className="banner-overview__img"/>
        </div>
      </div>
    </div>
  )
}
