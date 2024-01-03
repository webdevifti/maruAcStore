import React from 'react'
import pricingList from '../assets/data/pricinglist'
import { Link } from 'react-router-dom'

const PricingCard = () => {
    return (
        <>
            {
                pricingList.map((item, i) => {
                    return (
                        <div className="col-lg-3" key={i}>
                            <div className="pricing-card">
                                <h3 className='title'>{item.title}</h3>
                                <p className='type'>{item.price_type}</p>

                                {
                                    item.price_list.map((v,j) => {
                                        return (
                                            <li key={j}>
                                                <span className='attr'>{v.attr}</span>
                                                <span className='price'>BDT {v.price}/-</span>
                                            </li>
                                        )
                                    })
                                }

                                <Link className='blue-link'>See More</Link>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default PricingCard