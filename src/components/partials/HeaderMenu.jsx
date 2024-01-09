import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart, faHeart, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const HeaderMenu = () => {
    return (
        <div className="header-nav">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to='/maruacstore'>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/maruacstore/services'>Services</NavLink>
                                </li>
                                <div className="dropdown-wrapper">
                                    <li className="nav-item">
                                        <NavLink to='/maruacstore/products'>Products <FontAwesomeIcon icon={faChevronDown} /> </NavLink>
                                    </li>
                                    <div className="dropdown-content">
                                        <NavLink to="/maruacstore/product/ac">Air Conditioner</NavLink>
                                        <NavLink to="/maruacstore/product/ac-parts">AC Spare Parts</NavLink>
                                    </div>
                                </div>

                                <li className="nav-item">
                                    <NavLink to='/maruacstore/ac-rent'>AC Rent</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/maruacstore/blog'>Blog</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/maruacstore/about-us'>About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/maruacstore/contact-us'>Contact Us</NavLink>
                                </li>
                            </ul>
                            <div className="d-flex">

                                <li>
                                    <NavLink to='/maruacstore/my-favourites'>
                                        <span className="icon-overlay-label">
                                            <FontAwesomeIcon icon={faHeart} />
                                            <span>4</span>
                                            Favourites
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/maruacstore/cart' >
                                        <span className="icon-overlay-label">
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                            <span>9+</span>
                                            Cart
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/maruacstore/my-account'>
                                        <span className="icon-overlay-label">
                                            <FontAwesomeIcon icon={faUser} />

                                        </span>
                                        Account
                                    </NavLink>
                                </li>
                                <li><NavLink to='/maruacstore/signup' >Sign Up</NavLink></li>
                                <li><NavLink to='/maruacstore/signin' >Sign In</NavLink></li>
                            </div>
                        </div>
                    </div>
                </nav>
            </div >
        </div >
    )
}

export default HeaderMenu