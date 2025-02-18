import logoPng from "../../../img/content/logo.png"

export default function Footer() {
  return (

    <footer className="footer">
      <div className="container">
        <h1 className="global-section-bigtitle footer-title"><b>Contact</b> us</h1>
        <div className="footer-box">
          <div className="footer-box__col">
            <ul className="footer-menu">
              <li>
                <a href="/" aria-label="footer link" className="footer-menu__link">About us</a>
              </li>
              <li>
                <a href="/" aria-label="footer link" className="footer-menu__link">Catalog</a>
              </li>
              <li>
                <a href="/" aria-label="footer link" className="footer-menu__link">Inspiration</a>
              </li>
              <li>
                <a href="/" aria-label="footer link" className="footer-menu__link">FAQ</a>
              </li>
              <li>
                <a href="/" aria-label="footer link" className="footer-menu__link">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-box__col logo-col">
            <a href="/" className="footer-logo" aria-label="home link">
              <img src={logoPng} alt="img" className="footer-logo__img" width="155" height="170" />
            </a>
          </div>
          <div className="footer-box__col tablet-full-col">
            <ul className="footer__contacts">
              <li>
                <a href="tel:+2064688097" className="footer-contacts__link" aria-label="contact link">206-468-8097</a>
              </li>
              <li>
                <a href="mailto:elitehousewa@gmail.com" className="footer-contacts__link" aria-label="contact link">elitehousewa@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="footer-box__col copyright-col tablet-full-col">
            <div className="footer-copyright">©2025 Elite House | All Rights Reserved</div>
          </div>
          <div className="footer-box__col tablet-full-col">
            <ul className="footer__socials">
              <li>
                <a href="#" className="footer-socials__link" target="_blank" aria-label="social link">Instagram</a>
              </li>
              <li>
                <a href="#" className="footer-socials__link" target="_blank" aria-label="social link">Linkedin</a>
              </li>
              <li>
                <a href="#" className="footer-socials__link" target="_blank" aria-label="social link">Facebook</a>
              </li>
              <li>
                <a href="#" className="footer-socials__link" target="_blank" aria-label="social link">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
