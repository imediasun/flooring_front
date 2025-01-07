import { Link } from '@inertiajs/react'

import logoWebp from '../../../img/content/logo.webp'
import logoPng from '../../../img/content/logo.png'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo-wrapper">
            <button className="burger-btn js-nav-trigger" type="button" aria-label="Navigation menu button">
              <i></i>
              <i></i>
              <i></i>
            </button>

            <Link href="./" className="logo" aria-label="logo">
              <picture className="logo__image">
                <source srcSet={logoWebp} type="image/webp" className="logo__img" />
                <img src={logoPng} alt="img" className="logo__img" width="146" height="143" />
              </picture>
            </Link>
          </div>

          <div className="nav__wrap">
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#" className="nav__link active">
                    {' '}
                    News{' '}
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#" className="nav__link active">
                    {' '}
                    Wallet{' '}
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#" className="nav__link active">
                    {' '}
                    Games{' '}
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#" className="nav__link active">
                    {' '}
                    Verse{' '}
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#" className="nav__link active">
                    {' '}
                    Learn{' '}
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#" className="nav__link active">
                    {' '}
                    Newsletters{' '}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <button className="btn ghost-btn header__button text-nowrap" type="button">
            Get bitcoin
          </button>
        </div>
      </div>
    </header>
  )
}
