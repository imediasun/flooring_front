import { useState } from "react";
import SvgIcon from "./SvgIcon";

export default function FilterAccordeon({title, open = false, children, className = ""}) {
  const [isOpen, setIsOpen] = useState(open)

  const toggleAccordeonHandle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={`filters-accordeon ${className} ${isOpen ? "active_accordeon opened" : ""}`}>
      <button type="button" aria-label="filters accordeon trigger" className="filters-accordeon__trigger" onClick={toggleAccordeonHandle}>
        <span className="title">{title}</span>
        <span className="arrow"><SvgIcon name="arrow-down"/></span>
      </button>
      <div className="filters-accordeon__content">
        <div className="filters-accordeon__content-inner">
          <div className="filters-accordeon__content-box">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
