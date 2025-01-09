import { Link } from '@inertiajs/react'

export default function PrimaryLink({className = "", isTelLink = false, href= "#", children, ...props }) {
  return (
    <Link
      href={isTelLink ? "tel:+" + href : href}
      className={"primary-btn " + className}
      {...props}
    >
      {isTelLink && (
        <span className='symbol'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.33557 4.32775L7.40958 4.11295C8.15582 3.9637 8.91297 4.31384 9.28256 4.97909L11.1147 8.27699C11.4942 8.96 11.3749 9.81181 10.8224 10.3643L9.5889 11.5978C9.02119 12.1662 8.91339 13.0481 9.32799 13.7362C10.0238 14.893 10.8337 15.9334 11.7577 16.8575C12.6818 17.7816 13.7215 18.5907 14.8768 19.285C15.565 19.6978 16.4458 19.5895 17.0135 19.0224L18.247 17.7889C18.7995 17.2364 19.6513 17.1171 20.3343 17.4966L23.6322 19.3287C24.2975 19.6983 24.6476 20.4555 24.4983 21.2017L24.2835 22.2757C24.1809 22.7886 23.8542 23.2288 23.3921 23.474C19.0576 25.7845 14.3538 24.4033 9.28091 19.3304C4.208 14.2575 2.82678 9.55375 5.13726 5.21918C5.38253 4.75714 5.82265 4.43043 6.33557 4.32775Z"/>
          </svg>
        </span>
      )}
      <span className="holder">
        {children}
      </span>
    </Link>
  )
}
