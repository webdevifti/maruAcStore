import React from 'react'
import services from '../assets/data/services'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons'

const ServicesCard = () => {
    const limit = 4
  return (
        services.slice(0,limit).map((v,i) => {
            return (
                <div className='col-lg-3' key={i}>
                    <div className='service-card'>
                    <img src={v.img} alt="" />
                    <h5>{v.title}</h5>
                    <p>{v.description}</p>
                    <Link to="">Contact Us <FontAwesomeIcon icon={faLongArrowRight} /></Link>
                    </div>
                </div>
            )
        })

  )
}

export default ServicesCard