import SvgIcon from "@/PapaCarlo/Components/SvgIcon";
import { useState, useEffect, useRef } from "react"; 

const menuData = [
  { label: "About", href: "/" },
  {
    label: "Services",
    submenu: [
      { label: "Lorem ipsum", href: "/" },
      { label: "Lorem ipsum amet", href: "/" },
      { label: "Lorem ipsum dolor sit", href: "/" },
      { label: "Lorem ipsum", href: "/" },
      { label: "Lorem ipsum dolor", href: "/" },
    ],
  },
  {
    label: "Blog",
    submenu: [
      { label: "Blog 1", href: "/" },
      { label: "Blog 2", href: "/" },
      { label: "Blog 3", href: "/" },
    ],
  },
  { label: "Reviews", href: "/" },
  { label: "Contact us", href: "/" },
]

export default function NavMenu() {
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const menuRef = useRef(null)

  const toggleSubmenu = (index) => {
    setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? null : index))
  };

  const handleClickOutside = (event) => {
    if (window.innerWidth > 1023 && menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenSubmenuIndex(null)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  }, [])

  return(
    <nav className="nav" ref={menuRef}>
      <ul className="nav_links">
        {menuData.map((item, index) => (
          <li
            className={`nav_item ${index === openSubmenuIndex ? "_active" : ""}`}
            key={index}
          >
            {item.href && !item.submenu ? (
              <a href={item.href} className="nav_link">
                {item.label}
              </a>
            ) : (
              <span
                className="nav_link"
                onClick={() => toggleSubmenu(index)}
              >
                {item.label}
                {item.submenu && <span className="nav_arrow">
                  <SvgIcon name={"arrow"}/>
                </span>}
              </span>
            )}
            {item.submenu && (
              <div className="nav_submenu">
                <div className="nav_submenu-inner">
                  {item.submenu.map((submenuItem, subIndex) => (
                    <div className="nav_submenu__item" key={subIndex}>
                      <a href={submenuItem.href} className="nav_submenu__link">
                        {submenuItem.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}