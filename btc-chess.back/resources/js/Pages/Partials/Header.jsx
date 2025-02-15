import logoPng from '../../../img/content/logo.png'
import SvgIcon from '@/Flooring/Components/SvgIcon'
import NavMenu from './NavMenu'
import { useEffect, useRef, useState } from 'react'

import { scrollToAnchor } from '@/Flooring/Libs/anchor-scroll'

export default function Header() {
  const headerRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    if(!window.document.body.classList.contains("menu-lock")){
      window.document.body.classList.add("menu-lock")
    }else{
      window.document.body.classList.remove("menu-lock")
    }
    setIsOpen((prev) => !prev)
  }

  const anchorClick = (event, id) => {
    event.preventDefault();
    scrollToAnchor(id)
  }

  useEffect(() => {
    const windowResizeHandle = () => {
      if (!headerRef.current) {
        return
      }

      document.documentElement.style.setProperty(
        "--header-height",
        headerRef.current.offsetHeight + "px",
      )
    }

    const windowScrollHandle = () => {
      if (!headerRef.current) {
        return
      }

      if(window.scrollY > 0){
        headerRef.current.classList.add("_scrolled")
      }else{
        headerRef.current.classList.remove("_scrolled")
      }
    }

    window.addEventListener("resize", windowResizeHandle)
    window.addEventListener("scroll", windowScrollHandle)
    windowResizeHandle()
    windowScrollHandle()

    return () => {
      window.removeEventListener("resize", windowResizeHandle)
      window.removeEventListener("scroll", windowScrollHandle)
    }
  }, [headerRef])

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="header-row">
          <a href="/" className="header-logo" aria-label="home link">
            <img src={logoPng} alt="img" className="footer-logo__img" width="100" height="110" />
          </a>
          <div className={`header-menu ${ isOpen ? "_active": ""}`}>
            <div className="header-menu__inner">
              <NavMenu/>
              <ul className="header__contacts">
                <li>
                  <a href="tel:+2064688097" className="header-contacts__link" aria-label="contact link">206-468-8097</a>
                </li>
                <li>
                  <a href="mailto:elitehousewa@gmail.com" className="header-contacts__link" aria-label="contact link">elitehousewa@gmail.com</a>
                </li>
              </ul>
              <ul className="header__socials">
                <li>
                  <a href="#" className="header-socials__link" target="_blank" aria-label="social link">Linkedin</a>
                </li>
                <li>
                  <a href="#" className="header-socials__link" target="_blank" aria-label="social link">Facebook</a>
                </li>
                <li>
                  <a href="#" className="header-socials__link" target="_blank" aria-label="social link">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
          <a href="#" className="default-link header-contact__link" onClick={(event) => anchorClick(event, "appointment")}>
            <span className="value">Let’s talk</span>
            <span className="symbol">
              <SvgIcon name="arrow"/>
            </span>
          </a>

          <button
            type="button"
            className={`header-burger ${ isOpen ? "_active": ""}`}
            aria-label="burger"
            onClick={toggleMenu}
          >
            <SvgIcon name={"menu"}/>
            <SvgIcon name={"close"}/>
          </button>
        </div>
      </div>
    </header>
  )
}
