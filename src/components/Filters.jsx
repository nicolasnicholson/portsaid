import { useId } from "react"
import { useFilters } from "../hooks/useFilters";

export function Filters() {

    const { filters, setFilters } = useFilters();

    const minPriceFilterId = useId();
    const minCategoryFilterId = useId();

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ( {
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ( {
            ...prevState,
            category: event.target.value
        }))
    }

    return(
        <section className="mx-12 flex justify-between items-center">
            <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor={minPriceFilterId}>Filter By Price</label>
                <div className="flex justify-center items-center gap-2">
                    <span>0</span>
                    <input 
                    className="accent-black"
                    type="range"
                    id={minPriceFilterId}
                    min="0"
                    max="1000"
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice} />
                    <span>{filters.minPrice}</span>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor={minCategoryFilterId}>Filter By Category</label>
                <select id={minCategoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                </select>
            </div>
        </section>
    )
}