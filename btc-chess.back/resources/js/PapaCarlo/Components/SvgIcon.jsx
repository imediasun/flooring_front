export default function SvgIcon({name}) {
  switch(name){
    case "phone":
      {
        return(
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.43035 3.70943L6.35093 3.52532C6.99056 3.39739 7.63955 3.69751 7.95634 4.26773L9.52676 7.09449C9.85201 7.67993 9.74975 8.41005 9.27618 8.88361L8.21892 9.94088C7.73231 10.4281 7.63991 11.184 7.99528 11.7738C8.59165 12.7653 9.28586 13.6571 10.0779 14.4492C10.87 15.2413 11.7612 15.9349 12.7514 16.53C13.3413 16.8838 14.0962 16.7909 14.5829 16.3048L15.6401 15.2476C16.1137 14.774 16.8438 14.6718 17.4293 14.997L20.256 16.5674C20.8262 16.8842 21.1264 17.5332 20.9984 18.1728L20.8143 19.0934C20.7263 19.5331 20.4463 19.9103 20.0502 20.1205C16.3349 22.1009 12.3031 20.917 7.95492 16.5688C3.60672 12.2206 2.42282 8.18886 4.40322 4.47351C4.61346 4.07748 4.9907 3.79744 5.43035 3.70943Z"/>
          </svg>
        )
      }
    case "burger":
      {
        return(
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="stroke">
            <path d="M20 6L4 6"/>
            <path d="M20 12H12H10M4 12L6 12"/>
            <path d="M20 18H4"/>
          </svg>
        )
      }
    case "close":
      {
        return(
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="stroke">
            <path d="M2 10C2 9.09347 2 8.03946 2 6.99988C2 4.23846 4.23858 2 7 2L17 2C19.7614 2 22 4.23858 22 7L22 17C22 19.7614 19.7614 22 17 22L7 22C4.23858 22 2 19.7614 2 17L2 14"/>
            <path d="M8.00045 16L16 8.00043"/>
            <path d="M8.00045 8.00052L16 16.0001"/>
          </svg>
        )
      }
    case "arrow":
      {
        return(
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.96389 10.164C9.04747 10.0804 9.1467 10.0141 9.25591 9.96881C9.36512 9.92356 9.48218 9.90027 9.60039 9.90027C9.71861 9.90027 9.83566 9.92356 9.94487 9.96881C10.0541 10.0141 10.1533 10.0804 10.2369 10.164L11.9999 11.927L13.7639 10.164C13.9338 10.0011 14.1607 9.91124 14.3961 9.91366C14.6314 9.91609 14.8564 10.0106 15.0229 10.177C15.1894 10.3433 15.2841 10.5683 15.2867 10.8036C15.2893 11.039 15.1996 11.266 15.0369 11.436L12.6369 13.836C12.5533 13.9196 12.4541 13.9859 12.3449 14.0311C12.2357 14.0764 12.1186 14.0997 12.0004 14.0997C11.8822 14.0997 11.7651 14.0764 11.6559 14.0311C11.5467 13.9859 11.4475 13.9196 11.3639 13.836L8.96389 11.436C8.79535 11.2672 8.70068 11.0385 8.70068 10.8C8.70068 10.5615 8.79535 10.3327 8.96389 10.164Z"/>
          </svg>
        )
      }
    case "location":
      {
        return(
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25C16.0386 2.25 19.5 5.71142 19.5 9.75C19.5 13.7886 12 21.75 12 21.75C12 21.75 4.5 13.7886 4.5 9.75C4.5 5.71142 7.96142 2.25 12 2.25Z"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M12 6C14.0711 6 15.75 7.67893 15.75 9.75C15.75 11.8211 14.0711 13.5 12 13.5C9.92893 13.5 8.25 11.8211 8.25 9.75C8.25 7.67893 9.92893 6 12 6Z"/>
          </svg>
        )
      }
    case "facebook":
      {
        return(
          <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4002 13.9999H19.0402L19.6002 9.7999H15.4002V7.4199C15.4002 6.1599 15.6802 5.3199 17.5002 5.3199H19.6002V1.5399C19.1802 1.5399 18.2002 1.3999 16.6602 1.3999C13.4402 1.3999 11.2002 3.3599 11.2002 6.9999V9.7999H7.7002V13.9999H11.2002V25.1999H15.4002V13.9999Z"/>
          </svg>
        )
      }
    case "google":
      {
        return(
          <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.0041 12.7258C25.8441 16.9678 23.9961 22.4698 19.3341 24.5838C13.2301 27.3418 5.78206 24.7518 3.45806 18.0178C0.952062 10.7518 5.90806 3.38776 13.3001 2.84176C16.1981 2.63176 18.7881 3.31776 21.0701 5.10976C21.3081 5.29176 21.5181 5.50176 21.8541 5.79576C20.8601 6.73376 19.9221 7.62976 18.9001 8.59576C17.1781 7.11176 15.1761 6.60776 12.9921 6.97176C11.3681 7.23776 10.0241 8.06376 8.91806 9.28176C6.83206 11.5778 6.46806 15.2038 8.06406 17.9478C9.73006 20.8178 12.8381 22.1198 16.1981 21.3498C18.5781 20.8178 20.6641 18.6618 20.8461 16.4498H14.7141V12.7258H25.0041Z"/>
          </svg>
        )
      }
    case "micro":
      {
        return(
          <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="stroke">
            <path d="M14 23.0161V25.9001"/>
            <path d="M9.7998 25.8999H18.1998"/>
            <path d="M18.9001 6.8458V15.0638C18.9001 16.3634 18.3838 17.6097 17.4649 18.5286C16.546 19.4476 15.2997 19.9638 14.0001 19.9638C12.7005 19.9638 11.4542 19.4476 10.5353 18.5286C9.61635 17.6097 9.1001 16.3634 9.1001 15.0638V6.8458C9.1001 5.54624 9.61635 4.29991 10.5353 3.38098C11.4542 2.46205 12.7005 1.9458 14.0001 1.9458C15.2997 1.9458 16.546 2.46205 17.4649 3.38098C18.3838 4.29991 18.9001 5.54624 18.9001 6.8458Z"/>
            <path d="M21.6998 14.5039V15.3999C21.6998 17.4421 20.8886 19.4006 19.4445 20.8446C18.0005 22.2887 16.042 23.0999 13.9998 23.0999C11.9576 23.0999 9.99911 22.2887 8.55508 20.8446C7.11105 19.4006 6.2998 17.4421 6.2998 15.3999V14.5599"/>
          </svg>
        )
      }
    case "calendar":
      {
        return(
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
        )
      }
    default: 
      return <></>
  }
}