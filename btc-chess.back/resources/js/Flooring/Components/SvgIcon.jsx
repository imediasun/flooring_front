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
    default: 
      return <></>
  }
}