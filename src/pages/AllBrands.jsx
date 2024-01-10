import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ACBrandSlideList from '../components/ACBrandSlideList'
import Breadcrumb from '../components/partials/Breadcrumb'

const AllBrands = () => {
  return (
    <>
        <Header />
        <div className='page-all-brands'>
                <div className="container">
                    <div className="row">
                        <Breadcrumb />
                    </div>
                    <div className="row">
                        <ACBrandSlideList />
                    </div>
                </div>
            </div>
        <Footer />
    </>
  )
}

export default AllBrands