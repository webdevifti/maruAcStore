import React from 'react'
import clientInfo from '../assets/data/clientinfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const HomeTopBrand = () => {
  return (
    <section className='home-client-section'>
            <div className='section-header'>
                <h3>Buy Top Brands</h3>
                <p>Dear customers, we have been selling AC service for 16 years in the Bangladesh market with reliability and honesty of global brands Media, ELITE, Gree, General, Sharp, Daikin, Chigo, Panasonic, and Walton at reasonable prices. Apart from this, all types of spare parts for AC are sold wholesale and retail.</p>
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
                        View All Brands <FontAwesomeIcon icon={faArrowRightLong} />
                    </Link>
                </div>

            </div>
        </section>
  )
}

export default HomeTopBrand