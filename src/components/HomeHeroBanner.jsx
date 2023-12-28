import React from 'react'
import bannerImg from '../assets/images/banner.png'
import { Link } from 'react-router-dom'

const HomeHeroBanner = () => {
    return (

        <div className="hero-banner">
            <Link to="">
                <img src={bannerImg} alt="banner image" />
            </Link>
        </div>
    )
}

export default HomeHeroBanner