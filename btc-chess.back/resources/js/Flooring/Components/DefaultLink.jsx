import { Link } from '@inertiajs/react'

export default function DefaultLink({className = "", children, ...props }) {
  return (
    <Link
      className={"default-link " + className}
      {...props}
    >
      {children}
    </Link>
  )
}
