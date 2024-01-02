import React from 'react'
import testimonialData from '../assets/data/testimonials'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const TestimonialCard = () => {
    const renderStarIcons = (avgRating) => {

        const fullStars = Math.floor(avgRating);
        const hasHalfStar = avgRating % 1 !== 0;
        const stars = [...Array(fullStars)].map((_, index) => (
            <span key={index} className='star_icon'><FontAwesomeIcon icon={faStar} /></span>
        ));

        if (hasHalfStar) {
            stars.push(<span key="halfStar" className='star_icon'><FontAwesomeIcon icon={faStarHalf} /></span>);
        }

        const remainingStars = 5 - (fullStars + (hasHalfStar ? 1 : 0));
        if (remainingStars > 0) {
            stars.push(...[...Array(remainingStars)].map((_, index) => (
                <span key={`emptyStar${index}`} className='star_icon_'><FontAwesomeIcon icon={faStar} /></span>
            )));
        }

        return stars;
    }
    return (
        <>
            {
                testimonialData.map((item, i) => {
                    return (
                        <div className="col-lg-3">
                            <div className='testimonial-card'>
                                <img src={item.img} alt={item.name} />
                                <div className='mt-5'>

                                    <h3>{item.name}</h3>
                                    <p className='designation'>{item.designation}</p>
                                    <p className='content'>{item.content}</p>

                                    <span>{renderStarIcons(item.rating)}</span>
                                </div>
                            </div>
                        </div>
                    )
                })

            }
        </>
    )
}

export default TestimonialCard