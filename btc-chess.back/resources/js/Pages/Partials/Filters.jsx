import FilterAccordeon from "@/Flooring/Components/FilterAccordeon";
import SvgIcon from "@/Flooring/Components/SvgIcon";
import queryString from 'query-string';
import {useEffect, useState} from "react"
import {useGetFilterQuery} from "@/services/endpoints/authEndpoints.ts";


export default function FiltersSidebar({
                                           isOpen, closeFilters, openFilters,
                                           categories,
                                           brands,
                                           colors,
                                           sizes,
                                           intends,
                                           stocks,
                                           waterproofs
                                       }) {

    const [openSizeFilter, setOpenSizeFilter] = useState(true);
    const [openColorFilter, setOpenColorFilter] = useState(true);
    const [openBrandFilter, setOpenBrandFilter] = useState(true);
    const [openStockFilter, setOpenStockFilter] = useState(true);
    const [openIntendFilter, setOpenIntendFilter] = useState(true);
    const [openWaterproofFilter, setOpenWaterproofFilter] = useState(true);

    const [searchParams, setSearchParams] = useState('');

    const {data: iAuthResponse, isLoading, isError, isSuccess, error} = useGetFilterQuery(searchParams, {
        skip: searchParams.length === 0,
    });

    const [selectedArrival, setSelectedArrival] = useState(false);
    const [selectedCat, setSelectedCat] = useState('all');
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedStocks, setSelectedStocks] = useState([]);
    const [selectedIntends, setSelectedIntends] = useState([]);
    const [selectedWaterproofs, setSelectedWaterproofs] = useState([]);

    const handleSelectionChange = (setState, alias) => {
        setState((prevState) =>
            prevState.includes(alias)
                ? prevState.filter((item) => item !== alias)
                : [...prevState, alias]
        );
    };

    useEffect(() => {
        const queryParams = queryString.stringify({
            arrival: selectedArrival,
            cat: selectedCat,
            'sizes[]': openSizeFilter ? selectedSizes : undefined,
            'intends[]': openIntendFilter ? selectedIntends : undefined,
            'colors[]': openColorFilter ? selectedColors : undefined,
            'stocks[]': openStockFilter ? selectedStocks : undefined,
            'waterproofs[]': openWaterproofFilter ? selectedWaterproofs : undefined,
            'brands[]': openBrandFilter ? selectedBrands : undefined,
        });

        setSearchParams(queryParams);
    }, [selectedSizes, selectedCat, selectedColors, selectedIntends, selectedArrival,
        selectedStocks, selectedWaterproofs, selectedBrands,
        openSizeFilter, openColorFilter, openBrandFilter, openStockFilter, openWaterproofFilter, openIntendFilter]);

    return (
        <>
            <button type="button" aria-label="filters-float-btn" className="filters-float-btn" onClick={openFilters}>
                <SvgIcon name={"filter"}/></button>
            <div className={`filters-box ${isOpen ? "active_filters" : ""}`}>
                <div className="filters-inner">
                    <div className="filters-heading">
                        <div className="filters-title">Filter</div>
                        <button type="button" className="filters-close" aria-label="filters close btn"
                                onClick={closeFilters}>
                            <SvgIcon name="close"/>
                        </button>
                    </div>
                    <div className="filters-listbox">
                        <div className="filters-listbox__col">
                            <div className="filters-listbox__checks">
                                <label className="filters-checkbox">
                                    <input type="radio" value={'all'} name="category-check"
                                           className="filters-checkbox__input"
                                           defaultChecked="checked" checked={selectedCat === 'all'}
                                           onChange={() => setSelectedCat('all')}/>
                                    <span className="circle"></span>
                                    <span className="holder">ALL CATEGORIES</span>
                                </label>
                                {categories.map((category) => (
                                    <label key={category.alias} className="filters-checkbox">
                                        <input
                                            type="radio"
                                            name="category-check"
                                            className="filters-checkbox__input"
                                            value={category.alias}
                                            checked={selectedCat === category.alias}
                                            onChange={() => setSelectedCat(category.alias)}
                                        />
                                        <span className="circle"></span>
                                        <span className="holder">{category.name}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="filters-listbox__col">
                            <FilterAccordeon title={"Colors"} open={openColorFilter} changeState={setOpenColorFilter}>
                                <div className="filters-colors">
                                    {
                                        colors.map((color) => (
                                            <label key={color.alias} className="filters-checkbox-color">
                                                <input checked={selectedColors.includes(color.alias)} type="checkbox"
                                                       name="color" value={color.alias}
                                                       onChange={() => handleSelectionChange(setSelectedColors, color.alias)}
                                                       className="filters-checkbox-color__input"/>
                                                <span className="circle"></span>
                                                <span className="holder">
                                                  <img src={color.img} alt="img" width="40" height="40"
                                                       className="filters-checkbox-img"/>
                                                </span>
                                                <span className="label-hover">{color.name}</span>
                                            </label>
                                        ))
                                    }
                                </div>
                            </FilterAccordeon>
                        </div>

                        <div className="filters-listbox__col">
                            <FilterAccordeon title={"Size"} open={openSizeFilter}
                                             changeState={setOpenSizeFilter}>
                                <div className="filters-list-box">
                                    {
                                        sizes.map((size) => (
                                            <label key={size.alias} className="filters-checkbox">
                                                <input checked={selectedSizes.includes(size.alias)} type="checkbox"
                                                       onChange={() => handleSelectionChange(setSelectedSizes, size.alias)}
                                                       value={size.alias} name="size"
                                                       className="filters-checkbox__input"/>
                                                <span className="circle"></span>
                                                <span className="holder">{size.name}</span>
                                                <span className="result">({size.amount})</span>
                                            </label>
                                        ))
                                    }
                                </div>
                            </FilterAccordeon>
                        </div>

                        <div className="filters-listbox__col">
                            <FilterAccordeon title={"Intendent for"} open={openIntendFilter}
                                             changeState={setOpenIntendFilter}>
                                <div className="filters-list-box">
                                    {
                                        intends.map((intend) => (
                                            <label key={intend.alias} className="filters-checkbox">
                                                <input checked={selectedIntends.includes(intend.alias)} type="checkbox"
                                                       name="intendent"
                                                       value={intend.alias}
                                                       onChange={() => handleSelectionChange(setSelectedIntends, intend.alias)}
                                                       className="filters-checkbox__input"/>
                                                <span className="circle"></span>
                                                <span className="holder">{intend.name}</span>
                                                <span className="result">{intend.amount}</span>
                                            </label>
                                        ))
                                    }
                                </div>
                            </FilterAccordeon>
                        </div>

                        <div className="filters-listbox__col">
                            <FilterAccordeon title={"In stock"} open={openStockFilter} changeState={setOpenStockFilter}>
                                <div className="filters-list-box">
                                    {
                                        stocks.map((stock) => (
                                            <label className="filters-checkbox">
                                                <input type="checkbox" name="stock"
                                                       checked={selectedStocks.includes(stock.alias)}
                                                       onChange={() => handleSelectionChange(setSelectedStocks, stock.alias)}
                                                       value={stock.alias}
                                                       className="filters-checkbox__input"/>
                                                <span className="circle"></span>
                                                <span className="holder">{stock.name}</span>
                                                <span className="result">({stock.amount})</span>
                                            </label>))
                                    }
                                </div>
                            </FilterAccordeon>
                        </div>

                        <div className="filters-listbox__col">
                            <FilterAccordeon title={"Waterproof"} open={openWaterproofFilter}
                                             changeState={setOpenWaterproofFilter}>
                                <div className="filters-list-box">
                                    {
                                        waterproofs.map((waterproof) => (
                                            <label className="filters-checkbox">
                                                <input type="checkbox" name="waterproof"
                                                       checked={selectedWaterproofs.includes(waterproof.alias)}
                                                       onChange={() => handleSelectionChange(setSelectedWaterproofs, waterproof.alias)}
                                                       value={waterproof.alias}
                                                       className="filters-checkbox__input"/>
                                                <span className="circle"></span>
                                                <span className="holder">{waterproof.name}</span>
                                                <span className="result">({waterproof.amount})</span>
                                            </label>))
                                    }
                                </div>
                            </FilterAccordeon>
                        </div>

                        <div className="filters-listbox__col">
                            <FilterAccordeon title={"Brand"} open={openBrandFilter} changeState={setOpenBrandFilter}>
                                <div className="filters-list-box">
                                    {
                                        brands.map((brand) => (
                                            <label className="filters-checkbox">
                                                <input type="checkbox" name="brand"
                                                       checked={selectedBrands.includes(brand.alias)}
                                                       onChange={() => handleSelectionChange(setSelectedBrands, brand.alias)}
                                                       value={brand.alias}
                                                       className="filters-checkbox__input"/>
                                                <span className="circle"></span>
                                                <span className="holder">{brand.name}</span>
                                                <span className="result">({brand.amount})</span>
                                            </label>))
                                    }
                                </div>
                            </FilterAccordeon>
                        </div>

                        <div className="filters-listbox__col">
                            <div className="filters-listbox__checks">
                                <label className="filters-checkbox">
                                    <input type="checkbox" name="arrivals"
                                           checked={selectedArrival}
                                           onChange={() => setSelectedArrival(!selectedArrival)}
                                           className="filters-checkbox__input"/>
                                    <span className="circle"></span>
                                    <span className="holder">New arrivals</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="filters-control">
                        <button type="button" className="filters-clear" aria-label="clear btn" onClick={closeFilters}>
                            <span className="value">Clear</span>
                            <span className="symbol"><SvgIcon name={"clear"}/></span>
                        </button>
                        <button type="button" className="filters-apply" aria-label="apply btn"
                                onClick={closeFilters}>Apply filter
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
