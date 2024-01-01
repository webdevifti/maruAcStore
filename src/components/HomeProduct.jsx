import React from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

const HomeProduct = () => {
    return (
        <>
            <div className="home-aircondition-products">
                <div className="container">
                    <div className="row">
                        <div className='d-flex align-items-center justify-content-between home-shop-section-header'>
                            <h5>Air Conditioners</h5>
                            <div>
                                <Link to="" className='view-all-link'>View all</Link>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <ProductCard sectionFrom='ac' />
                    </div>

                </div>
            </div>
            <div className="home-acspareparts-products mt-5">
                <div className="container">
                    <div className="row">
                        <div className='d-flex align-items-center justify-content-between home-shop-section-header'>
                            <h5>AC Spare Parts</h5>
                            <div>
                                <Link to="" className='view-all-link'>View all</Link>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <ProductCard sectionFrom='acparts' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default HomeProduct