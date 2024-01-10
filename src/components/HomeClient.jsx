import React from 'react'
import clientInfo from '../assets/data/clientinfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const HomeClient = () => {
    return (
        <section className='home-client-section'>
            <div className='section-header'>
                <h3>Our Clients in Bangladesh</h3>
                <p>We have already completed 25000+ projects. Our clients are Hospitals, groups of companies, Markets, Banks, Shopping malls, Multinational organizations, universities, Governments project, Tender Work, the private business sector, and so on. Here are some customers.</p>
            </div>
            <div className='container'>
                <div className='row'>
                    {

                        clientInfo.map((item, i) => {
                            return (
                                <div className='col-lg-2  mb-2' key={i}>
                                    <div className='client-img-wrapper'>
                                        <img src={item.img} alt={item.id} />
                                    </div>
                                </div>
                            )
                        })
                    }
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

export default HomeClient