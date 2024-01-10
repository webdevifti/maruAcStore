import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from './../components/partials/Breadcrumb';

const Contact = () => {
  return (
    <>
      <Header />
      <div className="container">
          <div className="row">
              <Breadcrumb />
          </div>

          <div className="row">
            <div className="col-lg-6">
              
            </div>
            <div className="col-lg-6"></div>
          </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact