import React from 'react'

const FilterByCapacity = () => {
    return (
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Capacity
                </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample2">
                <div class="accordion-body">
                    <div className='mb-2'>
                        <input type="checkbox" id="acapacity" />
                        <label htmlFor="acapacity"> Option one</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterByCapacity