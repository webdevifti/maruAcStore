import React from 'react'
import recentProject from '../assets/data/recentprojects'
import { Link } from 'react-router-dom'

const RecentProjectCard = () => {
    const projectCategories = [
        {
            id: 1,
            name: 'Commercial',
        },
        {
            id: 2,
            name: 'Residentail',
        }
    ]

    return (
        <>
            <div className='text-center m-3'>
                <button className='project-btn active'>All Works</button>
                {
                    projectCategories.map((value,index) => {
                        return (
                            <button className='project-btn' key={index}>{value.name}</button>
                        )
                    })
                }
            </div>
            {
                recentProject.map((v, i) => {
                    return (
                        <div className={`col-lg-${i < 2 ? 6 : 4} project-img-wrapper mb-3`} key={i}>
                            <Link to={v.slug} >
                                <img src={v.img} alt={v.slug} />
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default RecentProjectCard