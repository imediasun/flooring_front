export default function SvgIcon({name}) {
  switch(name){
    case "arrow":
      {
        return(
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.21059 14.7669L7.11027 13.6509L13.714 14.2214L4.74631 5.25369L5.47551 4.52449L14.4432 13.4922L13.8728 6.88845L14.9888 6.98876L15.7175 15.4957L7.21059 14.7669Z"/>
          </svg>
        )
      }
    case "arrow-v2":
      {
        return(
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0361 13.836C14.9525 13.9196 14.8533 13.9859 14.7441 14.0312C14.6349 14.0764 14.5178 14.0997 14.3996 14.0997C14.2814 14.0997 14.1643 14.0764 14.0551 14.0312C13.9459 13.9859 13.8467 13.9196 13.7631 13.836L12.0001 12.073L10.2361 13.836C10.0662 13.9989 9.83929 14.0888 9.60395 14.0863C9.36861 14.0839 9.14358 13.9894 8.97709 13.823C8.8106 13.6567 8.71591 13.4317 8.71329 13.1964C8.71068 12.961 8.80036 12.734 8.96311 12.564L11.3631 10.164C11.4467 10.0804 11.5459 10.0141 11.6551 9.96885C11.7643 9.92361 11.8814 9.90032 11.9996 9.90032C12.1178 9.90032 12.2349 9.92361 12.3441 9.96885C12.4533 10.0141 12.5525 10.0804 12.6361 10.164L15.0361 12.564C15.2046 12.7328 15.2993 12.9615 15.2993 13.2C15.2993 13.4385 15.2046 13.6673 15.0361 13.836Z"/>
          </svg>
        )
      }
    case "calendar":
      {
        return(
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="stroke">
            <path d="M5.25 3.75H4.5C3.67157 3.75 3 4.42157 3 5.25V20.25C3 21.0784 3.67157 21.75 4.5 21.75H19.5C20.3284 21.75 21 21.0784 21 20.25V5.25C21 4.42157 20.3284 3.75 19.5 3.75H18.75V3.75" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M15.75 17.25H17.25" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M11.25 17.25H12.75" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M6.75 17.25H8.25" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M15.75 12.75H17.25" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M11.25 12.75H12.75" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M6.75 12.75H8.25" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M3 8.25H21" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M16.5 5.25V2.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.75 3.75H14.25" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M7.5 5.25V2.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      }
    case "time":
      {
        return(
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_54_51)">
              <path d="M23.0002 11C22.735 11 22.4806 11.1054 22.2931 11.2929C22.1056 11.4804 22.0002 11.7348 22.0002 12C22.0083 14.3253 21.2086 16.5812 19.7377 18.3822C18.2669 20.1831 16.2161 21.4173 13.9361 21.8738C11.6561 22.3303 9.28826 21.9807 7.2374 20.8849C5.18654 19.789 3.57995 18.0148 2.69224 15.8657C1.80454 13.7165 1.69082 11.3257 2.37053 9.10201C3.05024 6.87828 4.48118 4.95966 6.41876 3.67407C8.35634 2.38849 10.6803 1.81575 12.9934 2.05377C15.3064 2.29179 17.465 3.32578 19.1002 4.979C19.0673 4.98797 19.0339 4.99498 19.0002 5H16.0002C15.735 5 15.4806 5.10536 15.2931 5.29289C15.1056 5.48043 15.0002 5.73478 15.0002 6C15.0002 6.26522 15.1056 6.51957 15.2931 6.70711C15.4806 6.89464 15.735 7 16.0002 7H19.0002C19.7959 7 20.5589 6.68393 21.1215 6.12132C21.6841 5.55871 22.0002 4.79565 22.0002 4V1C22.0002 0.734784 21.8949 0.48043 21.7073 0.292893C21.5198 0.105357 21.2654 0 21.0002 0C20.735 0 20.4806 0.105357 20.2931 0.292893C20.1056 0.48043 20.0002 0.734784 20.0002 1V3.065C17.9528 1.23453 15.3391 0.162166 12.5961 0.0271026C9.85299 -0.107961 7.14666 0.702457 4.92929 2.32293C2.71192 3.94341 1.11785 6.27578 0.413437 8.9303C-0.290973 11.5848 -0.0630447 14.4007 1.05913 16.9074C2.18131 19.414 4.12976 21.4596 6.57889 22.7024C9.02803 23.9451 11.8295 24.3097 14.5151 23.7353C17.2007 23.1608 19.6079 21.682 21.3343 19.5461C23.0607 17.4101 24.0017 14.7464 24.0002 12C24.0002 11.7348 23.8949 11.4804 23.7073 11.2929C23.5198 11.1054 23.2654 11 23.0002 11Z"/>
              <path d="M12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11.0001 12.2652 11.1055 12.5195 11.293 12.707L14.293 15.707C14.4816 15.8892 14.7342 15.99 14.9964 15.9877C15.2586 15.9854 15.5094 15.8802 15.6948 15.6948C15.8802 15.5094 15.9854 15.2586 15.9877 14.9964C15.99 14.7342 15.8892 14.4816 15.707 14.293L13 11.586V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6Z"/>
            </g>
            <defs>
              <clipPath id="clip0_54_51">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        )
      }
    case "map":
      {
        return(
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="stroke">
            <path d="M18.75 8.80263C18.75 11.8892 15.4988 16.0246 13.5091 18.2664C12.6952 19.1835 11.3048 19.1835 10.4909 18.2664C8.50123 16.0246 5.25 11.8892 5.25 8.80263C5.25 4.35529 8.27208 1.875 12 1.875C15.7279 1.875 18.75 4.35529 18.75 8.80263Z" strokeWidth="2" strokeLinejoin="round"/>
            <circle cx="12" cy="7.5" r="2.25" strokeWidth="2"/>
            <path d="M14.8125 16.7046H15.375C18.6733 17.1218 21 18.1323 21 19.3127C21 20.866 16.9706 22.1252 12 22.1252C7.02944 22.1252 3 20.866 3 19.3127C3 18.1323 5.32669 17.1218 8.625 16.7046H9.1875" strokeWidth="2"/>
          </svg>
        )
      }
    case "menu":
      {
        return(
          <svg viewBox="0 0 30 31" xmlns="http://www.w3.org/2000/svg" className="stroke">
            <path d="M3.75 19.25H26.25M3.75 11.75H26.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      }
    
    case "close":
      {
        return(
          <svg viewBox="0 0 28 29" xmlns="http://www.w3.org/2000/svg">
            <g id="Menu / Close" clipPath="url(#clip0_112_569)">
              <path id="Vector" d="M26.9999 27.4999L14 14.5M14 14.5L1 1.5M14 14.5L27 1.5M14 14.5L1 27.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_112_569">
                <rect width="28" height="28" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
            </defs>
          </svg>

        )
      }
    default: 
      return <></>
  }
}