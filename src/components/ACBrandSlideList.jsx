import React from 'react'
import acBrand from './../assets/data/clientinfo';
import { Link } from 'react-router-dom';

const ACBrandSlideList = () => {
    return (
        <>
            {
                acBrand.map((v, i) => {
                    return (
                        <div className="col-lg-2" key={i}>
                            <div className='page-ac-category-ac-slider'>
                                <Link to={v.slug}>
                                    <img src={v.img} alt={v.slug} />
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ACBrandSlideList