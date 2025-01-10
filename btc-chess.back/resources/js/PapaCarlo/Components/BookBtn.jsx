import SvgIcon from "./SvgIcon";

export default function BookBtn({className = "", number, ...props }) {
  return (
    <button
      type="button"
      className={"book-btn " + className}
      {...props}
    >
      <span className='btn-main'>
        <span className='symbol'>
          <SvgIcon name={"calendar"}/>
        </span>
        <span className='holder'>
          Book now
        </span>
      </span>
      <span className='btn-number'>{number}</span>
    </button>
  )
}
