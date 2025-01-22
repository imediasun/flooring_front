import DefaultLink from "@/PapaCarlo/Components/DefaultLink";
import { Link } from "@inertiajs/react";
import logoImg from "../../../img/content/logo-white.png"
import NavMenu from "./NavMenu";
import SvgIcon from "@/PapaCarlo/Components/SvgIcon";

export default function Footer() {
  return (

    <footer className="footer">
      <div className="container">
        <div className="footer-box">
          <div className="footer-content">
            <Link href="/" className="footer-logo">
              <img src={logoImg} alt="img" className="footer-logo__img" width="155" height="160" />
            </Link>
            <div className="footer-content__info">
              <NavMenu/>
              <div className="footer-content__navigation">
                <a href="/" className="footer-contact">
                  <span className="symbol">
                    <SvgIcon name={"location"}/>
                  </span>
                  <span className="holder">2117 E 28th <br />St, Lorain, <br />OH 44055</span>
                </a>

                <a href="tel:+19169381545" className="footer-contact">
                  <span className="symbol">
                    <SvgIcon name={"phone"}/>
                  </span>
                  <span className="holder">+1(916)938-15-45</span>
                </a>

                <ul className="footer-socials">
                  <li>
                    <Link href="/" className="footer-socials__link" target="_blank">
                      <SvgIcon name={"facebook"}/>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="footer-socials__link" target="_blank">
                      <SvgIcon name={"google"}/>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="footer-socials__link" target="_blank">
                      <SvgIcon name={"micro"}/>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copyright">© 2025 PapaCarlo | All Rights Reserved.</div>
            <ul className="footer-bottom__linklist">
              <li>
                <DefaultLink className="footer-bottom__link link-grey" href="/">Site map</DefaultLink>
              </li>
              <li>
                <DefaultLink className="footer-bottom__link link-grey" href="/">Privacy policy</DefaultLink>
              </li>
              <li>
                <DefaultLink className="footer-bottom__link link-grey" href="/">Accessibility</DefaultLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
