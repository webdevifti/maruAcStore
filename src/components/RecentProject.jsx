import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import RecentProjectCard from './RecentProjectCard'

const RecentProject = () => {
  return (
    <section className='home-recent-project-section'>
    <div className='section-header'>
        <h3>Our Recent Works</h3>
        <p>AC SERVICE is a leading AC Installation, Servicing, Repair, Maintenance, AC Sales & AC Rent Service All over Bangladesh. We have already completed 25000+ projects and 20 projects are running. AC SERVICE has an expert team and well-known engineers. Our clients are Hospitals, groups of companies, Markets, banks, Shopping malls, Multinational organizations, etc.</p>
    </div>
    <div className='container'>
        <div className='row mb-4'>
            <RecentProjectCard />
        </div>
        <div className='link-wrap'>
            <Link to="/all-works" className='outline-link'>
                View Recent Works <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
        </div>

    </div>
</section>
  )
}

export default RecentProject