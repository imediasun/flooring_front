import SvgIcon from "./SvgIcon";

export default function FilterAccordeon({title, open = false, changeState, children, className = ""}) {

  const change = () => {
    changeState((state) => !state );
  }

  return (
    <div className={`filters-accordeon ${className} ${open ? "active_accordeon opened" : ""}`}>
      <button type="button" aria-label="filters accordeon trigger" className="filters-accordeon__trigger" onClick={change}>
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
