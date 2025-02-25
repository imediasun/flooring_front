import { Link } from '@inertiajs/react'

export default function Pagination({data, className = ""}) {
  return (
    <div className="pagination">
      <a href="#" aria-label="pagination prev link" className="pagination-link disabled-link">Previous</a>
      <ul className={"pagination-pages " + className}>
        {data && data.map((page, index) => (
          <li className="pagination-pages-item" key={index}>
            <Link
              aria-label={'pagination link'}
              href={page.href ? page.href : "#"}
              className={`pagination-page-link ${page.label == "..." ? "disabled-link" : ""} ${page.isActive ? "active-page" : ""}`}
            >
              {page.label}
            </Link>
          </li>
        ))}
      </ul>
      <a href="#" aria-label="pagination next link" className="pagination-link">Next</a>
    </div>
  )
}
