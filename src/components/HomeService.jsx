import React from 'react'
import ServicesCard from './ServicesCard'

const HomeService = () => {
    return (
        <section>
            <div className="container">
                <div className='section-header'>
                    <h3>Our Services</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corrupti iure sapiente aliasiente deserunt nostrum molestias voluptates tempora similique, itaque a! Qui, assumenda?</p>
                </div>
                <div className="row">
                    <ServicesCard />
                </div>
            </div>
        </section>
    )
}

export default HomeService