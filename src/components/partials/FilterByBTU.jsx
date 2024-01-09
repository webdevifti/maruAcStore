import React from 'react'

const FilterByBTU = () => {
    return (
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    AC BTU
                </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample2">
                <div class="accordion-body">
                    <div className='mb-2'>
                        <input type="checkbox" id="abtu" />
                        <label htmlFor="abtu"> 12000 BTU</label>
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" id="bbtu" />
                        <label htmlFor="bbtu"> 18000 BTU</label>
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" id="cbtu" />
                        <label htmlFor="cbtu"> 24000 BTU</label>
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" id="dbtu" />
                        <label htmlFor="dbtu"> 30000 BTU</label>
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" id="ebtu" />
                        <label htmlFor="ebtu"> 36000 BTU</label>
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" id="fbtu" />
                        <label htmlFor="fbtu"> 42000 BTU</label>
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" id="gbtu" />
                        <label htmlFor="gbtu"> 48000 BTU</label>
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" id="hbtu" />
                        <label htmlFor="hbtu"> 60000 BTU</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterByBTU