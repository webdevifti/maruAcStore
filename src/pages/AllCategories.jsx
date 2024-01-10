import React from 'react'
import ACCategorySlideList from '../components/ACCategorySlideList'
import Breadcrumb from '../components/partials/Breadcrumb'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AllCategories = () => {
    return (
        <>
            <Header />
            <div className='page-all-category'>
                <div className="container">
                    <div className="row">
                        <Breadcrumb />
                    </div>
                    <div className="row">
                        <ACCategorySlideList />
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default AllCategories