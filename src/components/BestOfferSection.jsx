import React from 'react'
import BestOfferProductCard from './BestOfferProductCard'

const BestOfferSection = () => {
    return (
        <div className="home-best-offer-products">
            <div className="container">
                <div className="row">
                    <h3>Best Offer Products</h3>
                </div>

                <div className="row">
                    <BestOfferProductCard />
                </div>

            </div>
        </div>
    )
}

export default BestOfferSection