export default function SliderBtnNext({className = "", ...props }) {
  return (
    <button
      type="button"
      aria-label="slider prev btn"
      className={"global-slider-btn global-slider-btn-next " + className}
      {...props}
    >
      <svg viewBox="0 0 12 22" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0.999999L11 11L0.999998 21"/>
      </svg>
    </button>
  )
}
