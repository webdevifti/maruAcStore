import React from 'react'
import FilterByColor from './FilterByColor'
import FilterByCompressorType from './FilterByCompressorType'
import FilterByMetarial from './FilterByMetarial'
import FilterByRefrigerent from './FilterByRefrigerent'
import FilterByBrands from './FilterByBrands'
import FilterByBTU from './FilterByBTU'
import FilterByCapacity from './FilterByCapacity'

const FilterBy = () => {
    return (
        <div className='filter-widget mb-3'>
            <h3 className='widget-title'>
                Filter
            </h3>
            <div className="widget-body">
                <div class="accordion" id="accordionExample2">
                    <FilterByBrands />
                    <FilterByBTU />
                    <FilterByCapacity />
                    <FilterByRefrigerent />
                    <FilterByMetarial />
                    <FilterByCompressorType />
                    <FilterByColor />
                </div>
            </div>
        </div>
    )
}

export default FilterBy