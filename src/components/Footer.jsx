import React from 'react'
import '../assets/styles/components/footer.scss'
import logo from '../assets/images/footer-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarked } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faLinkedin,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="container">
          <div className="footer-main">
            <div className="row">
              <div className="col-lg-3">
                <img src={logo} alt="logo" className='logo' />
                <div>
                  <FontAwesomeIcon icon={faPhone} />
                  <span>+880123456789</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>maruacservicebd@mail.com</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faMapMarked} />
                  <span>BTI Premier Shopping Mall, #Cha 90/A, 2nd Floor, Progoti Soroni, Shahjadpur, North Badda, Dhaka</span>
                </div>
              </div>
              <div className="col-lg-3">
                <h3>Shopping with us</h3>
                <ul>
                  <li><Link to="">Our Showroom</Link></li>
                  <li><Link to="">Why Shop With Us</Link></li>
                  <li><Link to="">Frequently Asked Question</Link></li>
                  <li><Link to="">Online Purchase Procedure</Link></li>
                  <li><Link to="">Online Payment Method</Link></li>
                  <li><Link to="">Online Payment Security</Link></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h3>Customer Service</h3>
                <ul>
                  <li><Link to="">Contact Us</Link></li>
                  <li><Link to="">Warrenty Policy</Link></li>
                  <li><Link to="">Return & Refund Policy</Link></li>
                  <li><Link to="">Privacy Policy</Link></li>
                  <li><Link to="">Cookie Policy</Link></li>
                  <li><Link to="">Terms & Conditions</Link></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h3>Get Connected</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias possimus necessitatibus deleniti animi</p>
                <form className="search-form">
                  <input type="text" placeholder="Search enter here" className="bottom-shadow-input" />
                  <button className="btn-search">Subscribe</button>
                </form>
                <div className='mt-3'>
                  <span>Follow Us: </span>
                  <Link to=""><FontAwesomeIcon icon={faFacebook} /></Link>
                  <Link to=""><FontAwesomeIcon icon={faLinkedin} /></Link>
                  <Link to=""><FontAwesomeIcon icon={faTwitter} /></Link>
                  <Link to=""><FontAwesomeIcon icon={faInstagram} /></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 - {new Date().getFullYear() } MaruAcStore | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer