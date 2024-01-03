import React from 'react'
import PricingCard from './PricingCard'

const HomePricingList = () => {
    return (
        <section>
            <div className="container">
                <div className='section-header'>
                    <h3>Work Pricing List</h3>
                    <p>AC Service.com you have our expert AC technicians and engineers who are always ready to give you the best AC service for AC installation, servicing, repair, maintenance, AC sales, and AC rental services in Dhaka city and outside Dhaka city. The price is very reasonable. You can compare the price of AC service with others. You can also buy air conditioners of any brand.</p>
                </div>
                <div className="row">
                    <PricingCard />
                </div>
            </div>
        </section>
    )
}

export default HomePricingList