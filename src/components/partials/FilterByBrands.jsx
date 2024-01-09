import React from 'react'

const FilterByBrands = () => {
    return (
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                    AC Brands
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample2">
                <div class="accordion-body">
                    <div className='mb-2'>
                        <input type="checkbox" id="aca" />
                        <label htmlFor="aca">Samsung</label>
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" id="acb" />
                        <label htmlFor="acb"> Daikin</label>
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" id="acc" />
                        <label htmlFor="acc"> Blue Star</label>
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" id="acd" />
                        <label htmlFor="acd"> York</label>
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" id="ace" />
                        <label htmlFor="ace"> Panasonic</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterByBrands