import React from 'react'

const FilterByRefrigerent = () => {
    return (
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Refrigerant
                </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample2">
                <div class="accordion-body">
                    <div className='mb-2'>
                        <input type="checkbox" id="arefri" />
                        <label htmlFor="arefri"> Option one</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterByRefrigerent