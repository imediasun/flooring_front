import Breadcrumbs from "../Components/Breadcrumbs";
import Pagination from "../Components/Pagination";
import SortTrigger from "../Components/Sort";
import FiltersSidebar from "@/Pages/Partials/Filters";
import SvgIcon from "../Components/SvgIcon";
import {useState} from "react";
import {useGetFilterQuery} from "@/services/endpoints/filterEndpoints.js";


export default function CatalogGrid({
                                        categories,
                                        brands,
                                        colors,
                                        sizes,
                                        intends,
                                        stocks,
                                        waterproofs
                                    }) {

    const [isOpenFilters, setIsOpenFilters] = useState(false)
    const [page, setPage] = useState(1);

    const closeFiltersHandle = () => {
        setIsOpenFilters(false)
        window.document.body.classList.remove("menu-lock")
    }
    const opneFiltersHandle = () => {
        window.document.body.classList.add("menu-lock")
        setIsOpenFilters(true)
    }

    const [searchParams, setSearchParams] = useState('');

    const {data: products, isLoading, isError, isSuccess, error} = useGetFilterQuery(searchParams);
    // , {
    //     skip: searchParams.length === 0,
    // });


    const breadcrumbsData = [
        {
            "label": "Main",
            "href": "/"
        },
        {
            "label": "Catalog",
            "href": "/catalog"
        }
    ]

    const paginationData = [
        {
            "label": "1",
            "href": "/",
            "isActive": true
        },
        {
            "label": "2",
            "href": "/",
            "isActive": false
        },
        {
            "label": "3",
            "href": "/",
            "isActive": false
        },
        {
            "label": "...",
            "href": "/",
            "isActive": false
        },
        {
            "label": "23",
            "href": "/",
            "isActive": false
        }
    ]

    return (
        <div className="global-section catalog-grid-section">
            <div className="container">
                <Breadcrumbs data={breadcrumbsData}/>
                <div className="catalog-grid">
                    <div className="catalog-grid__heading">
                        <h3 className="global-section-title catalog-title text-align-left"><b>Our</b> catalog</h3>
                        <div className="catalog-search-result">(245)</div>
                    </div>

                    <div className="catalog-grid__controls">
                        <button type="button" aria-label="filters btn" className="catalog-filters-trigger"
                                onClick={opneFiltersHandle}>
                            <span className="symbol"><SvgIcon name={"filter-set"}/></span>
                            <span className="value">Filter</span>
                        </button>
                        <SortTrigger/>
                    </div>

                    <div className="catalog-grid__row">
                        <div className="catalog-grid__sidebar">
                            <FiltersSidebar page={page} waterproofs={waterproofs} categories={categories}
                                brands={brands} setSearchParams={setSearchParams}
                                colors={colors} sizes={sizes} intends={intends} stocks={stocks}
                                isOpen={isOpenFilters}
                                closeFilters={closeFiltersHandle} openFilters={opneFiltersHandle}/>
                        </div>
                        <div className="catalog-grid__content">


                            <div className="catalog-list">
                                {
                                    isLoading && 'Loading...'
                                }
                                {
                                    !isLoading && products?.data && products.data.length > 0 && products.data.map((product) => (
                                        <div className="product-card">
                                            <div className="product-card__photo">
                                                <img src={`/storage/${product.small_photo}`} alt="img"
                                                     width="310" height="370"
                                                     className="product-card__photo-img"/>
                                                <a href={`/product/${product.slug}`} aria-label="details product link"
                                                   className="product-card__link">details</a>
                                            </div>
                                            <div className="product-card__info">
                                                <a href={`/brand/${product.brand_slug}`}
                                                   aria-label="details product link" className="product-card__name">
                                                    {product.brand_name}
                                                </a>
                                                <div className="product-card__detail">{product.name}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <Pagination
                        current_page={products?.current_page}
                        last_page={products?.last_page}
                        onPageChange={(page) => setPage(page)}
                    />
                </div>
            </div>
        </div>
    )
}
