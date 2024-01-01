import React from 'react'
import BestOfferProductCard from './BestOfferProductCard'
import { Link } from 'react-router-dom'

const BestOfferSection = () => {
    return (
        <div className="home-best-offer-products mb-5 mt-4">
            <div className="container">
                <div className="row">
                    <div className='d-flex align-items-center justify-content-between home-shop-section-header'>
                        <h5>Best Offer Products</h5>
                        <div>
                            <Link to="" className='view-all-link'>View all</Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <BestOfferProductCard />
                </div>

            </div>
        </div>
    )
}

export default BestOfferSection