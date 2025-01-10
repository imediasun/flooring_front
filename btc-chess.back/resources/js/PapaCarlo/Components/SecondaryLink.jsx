import { Link } from '@inertiajs/react'
import SvgIcon from './SvgIcon'

export default function SecondaryLink({className = "", isTelLink = false, href= "#", children, ...props }) {
  return (
    <Link
      href={isTelLink ? "tel:+" + href : href}
      className={"secondary-btn " + className}
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
