import React from 'react'
import img from '../assets/images/core.png'
import CoreItems from './CoreItems'
const HomeCoreService = () => {
    return (
        <section className='home-core-service'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={img} alt="core image" className='img-fluid core-img'/>
                    </div>
                    <div className="col-lg-6">
                        <div className='home-core-service-heading'>
                            <h3>Our Core Values</h3>
                            <p>We always try to happy our customers with our best services. AC Installation, Servicing, Repair, Maintenance, AC Sales & AC Rent Service All over Bangladesh is now available at AC SERVICE. Our 45 expert technicians always try to find out your Air Conditioner problem in a short time and solved it in a short time.</p>
                        </div>

                        <CoreItems />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeCoreService