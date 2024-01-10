import React from 'react'
import acCategoroies from './../assets/data/ac-categories';
import { Link } from 'react-router-dom';

const ACCategorySlideList = () => {
    return (
        <>
            {
                acCategoroies.map((v, i) => {
                    return (
                        <div className="col-lg-2 mb-2" key={i}>
                            <div className='page-ac-category-ac-slider'>
                                <Link to={v.slug} >
                                    <img src={v.img} alt={v.title} />
                                    <h4>{v.title}</h4>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ACCategorySlideList