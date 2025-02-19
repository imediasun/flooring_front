import { Link } from '@inertiajs/react'

export default function Breadcrumbs({data, className = ""}) {
  return (
    <ul className={"breadcrumbs " + className}>
      {data && data.map((breadcrumb, index) => (
        <li className="breadcrumbs-item" key={index}>
          <Link
            aria-label="breadcrumbs link"
            href={breadcrumb.href ? breadcrumb.href : "#"}
            className={"breadcrumbs-link"}
          >
            {breadcrumb.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
