export default function BookBtn({className = "", number, ...props }) {
  return (
    <button
      type="button"
      className={"book-btn " + className}
      {...props}
    >
      <span className='btn-main'>
        <span className='symbol'>
          <svg viewBox="0 0 43 43" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.38462 6.69238H8.03848C6.55157 6.69238 5.34619 7.89776 5.34619 9.38467V36.3075C5.34619 37.7944 6.55157 38.9998 8.03848 38.9998H34.9613C36.4482 38.9998 37.6536 37.7944 37.6536 36.3075V9.38467C37.6536 7.89776 36.4482 6.69238 34.9613 6.69238H33.6152V6.69238"/>
            <path d="M28.231 30.9231H30.9232"/>
            <path d="M20.1538 30.9231H22.8461"/>
            <path d="M12.0771 30.9231H14.7694"/>
            <path d="M28.231 22.8459H30.9232"/>
            <path d="M20.1538 22.8462H22.8461"/>
            <path d="M12.0771 22.8459H14.7694"/>
            <path d="M5.34619 14.7693H37.6536"/>
            <path d="M29.5769 9.38457V4"/>
            <path d="M17.4614 6.69211H25.5383"/>
            <path d="M13.4231 9.38457V4"/>
          </svg>
        </span>
        <span className='holder'>
          Book now
        </span>
      </span>
      <span className='btn-number'>{number}</span>
    </button>
  )
}
