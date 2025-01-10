import { Link } from '@inertiajs/react'
import SvgIcon from './SvgIcon'

export default function PrimaryLink({className = "", isTelLink = false, href= "#", children, ...props }) {
  return (
    <Link
      href={isTelLink ? "tel:+" + href : href}
      className={"primary-btn " + className}
      {...props}
    >
      {isTelLink && (
        <span className='symbol'>
          <SvgIcon name={"phone"}/>
        </span>
      )}
      <span className="holder">
        {children}
      </span>
    </Link>
  )
}
