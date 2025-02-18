export default function CatalogGrid() {
  return(
    <div className="global-section catalog-grid-section">
      <div className="container">
        {/* breadcrumbs */}
        <div className="catalog-grid">
          <div className="catalog-grid__heading">
            <h3 className="global-section-title catalog-title text-align-left"><b>Our</b> catalog</h3>
            <div className="catalog-search-result">(245)</div>
          </div>

          <div className="catalog-grid__controls"></div>

          <div className="catalog-grid__row">
            <div className="catalog-grid__sidebar">
              <div className="catalog-filters"></div>
            </div>
            <div className="catalog-grid__content">
              <div className="catalog-list"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
