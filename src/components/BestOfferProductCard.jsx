import React from 'react'
import bestofferproducts from '../assets/data/bestofferproducts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const BestOfferProductCard = () => {

    return (
        <>
            {
                bestofferproducts.map((item, i) => {
                    return (
                        <div className="col-lg-4 p-0" key={item.id}>
                            <div className="best-offer-product-card">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className='img-area'>
                                            <div className='product-img'>
                                                <Link to={item.product_slug}>
                                                    <img src={item.product_img} alt={item.product_name} />
                                                </Link>
                                            </div>
                                            <div className='discount-label'>
                                                <span>{item.discount_percentage}%</span>
                                                <span>OFF</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className='product-info-area'>
                                            <div className='product-info'>
                                                <Link to={item.product_slug}>

                                                    <h6>{item.product_name}</h6>
                                                </Link>
                                                <div>
                                                    <span className='price'>TK. {item.price}</span>
                                                    <span className='selling_price'><del>TK. {item.selling_price}</del></span>
                                                </div>
                                                <div className='my-2'>
                                                    <span className='star_icon'><FontAwesomeIcon icon={faStar} /></span>
                                                    <span className='avg_rating'>{item.avg_rating}</span>
                                                    <span className='review_count'>{item.total_review} Reviews</span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='offer-info'>
                                                <h6>Hurry Up!</h6>
                                                <p>Offers end in:</p>

                                                <div className='countdown_timer'>
                                                    <div>
                                                        <span className='time'>{item.offer_end_at_month}</span>
                                                        <span className='time-identi'>Months</span>
                                                    </div>
                                                    <div>
                                                        <span className='time'>{item.offer_end_at_day}</span>
                                                        <span className='time-identi'>Days</span>
                                                    </div>
                                                    <div>
                                                        <span className='time'>{item.offer_end_at_mins}</span>
                                                        <span className='time-identi'>Mins</span>
                                                    </div>
                                                    <div>
                                                        <span className='time'>{item.offer_end_at_sec}</span>
                                                        <span className='time-identi'>Secs</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>

    )
}

export default BestOfferProductCard