import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import '../assets/styles/components/header.scss';

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header-top p-3">
            <div className="row">
              <div className="col-lg-3">
                <NavLink to='/' className="navbar-brand">
                  <img src={logo} alt="Logo" />
                </NavLink>
              </div>
              <div className="col-lg-6">
                <form action="" className="search-form">
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
                      <NavLink to='/'>Home</NavLink>
                    </li>
                    {/* <li className="nav-item">
                  <NavLink to="/" className="nav-link" href="#">Link</NavLink>
                </li> */}
                  </ul>
                  <div className="d-flex">

                    <li><NavLink to='/signup' >Sign Up</NavLink></li>
                    <li><NavLink to='/signin' >Sign In</NavLink></li>

                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header