import React from 'react'

const FilterResultBy = () => {
    return (
        <div className='filter-widget mb-3'>
            <h3 className='widget-title'>
                Filter Results By
            </h3>
            <div className="widget-body">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Air Conditioner
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div className='mb-2'>
                                    <input type="checkbox" id="a" />
                                    <label htmlFor="a">Non Inverter AC</label>
                                </div>
                                <div className='mb-2'>
                                    <input type="checkbox" id="b" />
                                    <label htmlFor="b"> Inverter AC</label>
                                </div>
                                <div className='mb-2'>
                                    <input type="checkbox" id="c" />
                                    <label htmlFor="c"> Window AC</label>
                                </div>
                                <div className='mb-2'>
                                    <input type="checkbox" id="d" />
                                    <label htmlFor="d"> Portable AC</label>
                                </div>
                                <div className='mb-2'>
                                    <input type="checkbox" id="e" />
                                    <label htmlFor="e"> Floor Stand AC</label>
                                </div>
                                <div className='mb-2'>
                                    <input type="checkbox" id="f" />
                                    <label htmlFor="f"> Ceiling Type AC</label>
                                </div>
                                <div className='mb-2'>
                                    <input type="checkbox" id="g" />
                                    <label htmlFor="g"> Cassette Type AC</label>
                                </div>
                                <div className='mb-2'>
                                    <input type="checkbox" id="h" />
                                    <label htmlFor="h"> Duct Type AC</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                AC Spare Parts
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div className='mb-2'>
                                    <input type="checkbox" id="x" />
                                    <label htmlFor="x"> Black Compressor</label>
                                </div>
                                <div className='mb-2'>
                                    <input type="checkbox" id="z" />
                                    <label htmlFor="z"> Gass Wire</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterResultBy