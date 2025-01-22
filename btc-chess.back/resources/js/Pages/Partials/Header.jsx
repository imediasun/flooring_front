import { Link } from '@inertiajs/react'

import logoPng from '../../../img/content/logo.png'
import SvgIcon from '@/PapaCarlo/Components/SvgIcon'
import NavMenu from './NavMenu'
import { useEffect, useRef, useState } from 'react'

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

    window.addEventListener("resize", windowResizeHandle)
    windowResizeHandle()

    return () => {
      window.removeEventListener("resize", windowResizeHandle)
    }
  }, [headerRef])

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="header-row">
          <Link href="/" className="header-logo">
            <img src={logoPng} alt="img" className="footer-logo__img" width="88" height="94" />
          </Link>
          <div className={`header-menu ${ isOpen ? "_active": ""}`}>
            <div className="header-menu__inner">
              <NavMenu/>
              <ul className="header__socials">
                <li>
                  <Link href="/" className="header-socials__link" target="_blank">
                    <SvgIcon name={"facebook"}/>
                  </Link>
                </li>
                <li>
                  <Link href="/" className="header-socials__link" target="_blank">
                    <SvgIcon name={"google"}/>
                  </Link>
                </li>
                <li>
                  <Link href="/" className="header-socials__link" target="_blank">
                    <SvgIcon name={"micro"}/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <a href="tel:+19169381545" className="header-contact__link">
            <span className="symbol">
              <SvgIcon name="phone"/>
            </span>
            <span className="holder">+1(916)938-15-45</span>
          </a>

          <button
            type="button"
            className={`header-burger ${ isOpen ? "_active": ""}`}
            aria-label="burger"
            onClick={toggleMenu}
          >
            <SvgIcon name={"burger"}/>
            <SvgIcon name={"close"}/>
          </button>
        </div>
      </div>
    </header>
  )
}
