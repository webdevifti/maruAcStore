import React from 'react'
import ServicesCard from './ServicesCard'

const HomeService = () => {
    return (
        <section>
            <div className="container">
                <div className='section-header'>
                    <h3>Our Services</h3>
                    <p>We have a large team of AC Service A Expert Technicians. Our services are AC installation, AC servicing, AC repair, AC maintenance, AC rental, and selling AC of any brand. and selling AC spare parts. AC SERVICE is the best AC service company in Bangladesh. So you can contact us at any time. Our expert technicians are available 7 days a week to solve your AC problem.</p>
                </div>
                <div className="row">
                    <ServicesCard />
                </div>
            </div>
        </section>
    )
}

export default HomeService