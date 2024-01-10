import React from 'react'
import { Link } from 'react-router-dom'
import subCategoryBannerImages from '../assets/data/subcategoryimages'

const HomeSubcategoryBanner = () => {
    const limit = 3
    return (
        <section id='subcategoryBannerImages'>
            <div className="subcategory-banner">
                <div className="container">
                    <div className="row">
                        {
                            subCategoryBannerImages.slice(0,limit).map((value, index) => {
                                return (
                                    <div className="col-lg-4  mb-2" key={value.id}>
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