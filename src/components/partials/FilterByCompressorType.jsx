import React from 'react'

const FilterByCompressorType = () => {
    return (
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingEight">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                    Compressor Type
                </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample2">
                <div class="accordion-body">
                    <div className='mb-2'>
                        <input type="checkbox" id="arcom" />
                        <label htmlFor="arcom"> Option one</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterByCompressorType