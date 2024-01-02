import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import TestimonialCard from './TestimonialCard'


const HomeTestimonial = () => {
  return (
    <section className='home-testimonial-section'>
            <div className='section-header'>
                <h3>Our Customers Say</h3>
                <p>AC SERVICE always focused on clients satisfaction. Client satisfaction is our main motive. We don’t consider our services. So our clients are always happy with our services. They give us some feedback about our company.</p>
            </div>
            <div className='container'>
                <div className='row mb-4'>
                    <TestimonialCard />
                </div>
                <div className='link-wrap'>
                    <Link to="/all-clients" className='outline-link'>
                        View All Clients <FontAwesomeIcon icon={faArrowRightLong} />
                    </Link>
                </div>

            </div>
        </section>
  )
}

export default HomeTestimonial