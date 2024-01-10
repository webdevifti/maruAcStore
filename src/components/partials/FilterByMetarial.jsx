import React from 'react'

const FilterByMetarial = () => {
    return (
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSeven">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    Metarial
                </button>
            </h2>
            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample2">
                <div class="accordion-body">
                    <div className='mb-2'>
                        <input type="checkbox" id="armetarial" />
                        <label htmlFor="armetarial"> Option one</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterByMetarial