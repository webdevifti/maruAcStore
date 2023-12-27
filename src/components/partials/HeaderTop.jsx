import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const HeaderTop = () => {
    return (
        <div className="container">
            <div className="header-top p-3">
                <div className="row">
                    <div className="col-lg-3">
                        <NavLink to='/' className="navbar-brand">
                            <img src={logo} alt="Logo" />
                        </NavLink>
                    </div>
                    <div className="col-lg-6">
                        <form  className="search-form">
                            <input type="text" placeholder="Search enter here" className="bottom-shadow-input" />
                            <button className="btn-search"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        </form>
                    </div>
                    <div className="col-lg-3">
                        <div className="top-contact">
                            <div>
                                <FontAwesomeIcon icon={faPhone} />
                                <span>+880123456789</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span>maruacservicebd@mail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeaderTop