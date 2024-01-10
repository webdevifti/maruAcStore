import React from 'react'
import productAirConditioner from '../assets/data/productairconditioner'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

const ProductCard = ({ sectionFrom }) => {

    const filterProductsByCategory = (category) => {
        return productAirConditioner.filter(product => product.category === category);
    };
    const acProducts = filterProductsByCategory('ac')
    const acPartsProducts = filterProductsByCategory('ac-parts')

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
                (sectionFrom === 'ac') ?
                    acProducts.map((item, index) => {
                        return (
                            <div className='col-lg-2  mb-2' key={index}>
                                <div className="best-offer-product-card">
                                    <div className="row">
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
                                        <div className='product-info-area'>
                                            <div className='product-info'>

                                                <div className='my-2 text-center'>
                                                    {renderStarIcons(item.avg_rating)}
                                                </div>

                                                <Link to={item.product_slug}>
                                                    <h6 className='text-center'>{item.product_name}</h6>
                                                </Link>
                                                <div>
                                                    <span className='price'>TK. {item.price}</span>
                                                    <span className='selling_price'><del>TK. {item.selling_price}</del></span>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :
                    acPartsProducts.map((item, index) => {
                        return (
                            <div className='col-lg-2  mb-2' key={index}>
                                <div className="best-offer-product-card">
                                    <div className="row">
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
                                        <div className='product-info-area'>
                                            <div className='product-info'>

                                                <div className='my-2 text-center'>
                                                    {renderStarIcons(item.avg_rating)}
                                                </div>
                                                <Link to={item.product_slug}>
                                                    <h6 className='text-center'>{item.product_name}</h6>
                                                </Link>
                                                <div>
                                                    <span className='price'>TK. {item.price}</span>
                                                    <span className='selling_price'><del>TK. {item.selling_price}</del></span>
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

export default ProductCard