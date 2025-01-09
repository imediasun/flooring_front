export default function SliderBtnPrev({className = "", ...props }) {
  return (
    <button
      type="button"
      aria-label="slider prev btn"
      className={"global-slider-btn global-slider-btn-prev " + className}
      {...props}
    >
      <svg viewBox="0 0 12 22"xmlns="http://www.w3.org/2000/svg">
        <path d="M11 1L1 11L11 21"/>
      </svg>
    </button>
  )
}
