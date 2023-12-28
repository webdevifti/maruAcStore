import React from 'react'
import { Link } from 'react-router-dom'
import subCategoryBannerImages from '../assets/data/subcategoryimages'

const HomeSubcategoryBanner = () => {
    return (
        <section id='subcategoryBannerImages'>
            <div className="subcategory-banner">
                <div className="container">
                    <div className="row">
                        {
                            subCategoryBannerImages.map((value, index) => {
                                return (
                                    <div className="col-lg-4" key={value.id}>
                                        <Link to="">
                                            <img src={value.img} alt="subcatory banner" />
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSubcategoryBanner