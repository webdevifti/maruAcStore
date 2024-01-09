import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import Breadcrumb from '../components/partials/Breadcrumb';
import cateBanner from '../assets/images/cate-banner.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faBars, faTableCells } from '@fortawesome/free-solid-svg-icons';
import ACCategorySlideList from '../components/ACCategorySlideList';
import '../assets/styles/pages/ac-category.scss'
import ProductCard from '../components/ProductCard';
import FilterWidgets from '../components/FilterWidgets';
const ProductCategory = () => {
  return (
    <>
      <Header />

      <div className="container page-ac-category">
        <Breadcrumb />

        <div className='row'>
          <FilterWidgets />
          
          <div className='col-lg-10'>
            <section className='category-banner'>
              <img src={cateBanner} alt="Banner" width="100%" className='img-fluid rounded' />
            </section>
            <div>
              <div className='d-flex align-items-center justify-content-between mb-3'>
                <h3 className='m-0' style={{ fontWeight: 700, fontSize: '16px' }}>AC Categories</h3>
                <Link to="" className='blue-link'>All Categories <FontAwesomeIcon icon={faArrowRightLong} /></Link>
              </div>

              <div className='categories-list mb-3 mt-2'>
                <div className="row">
                  <ACCategorySlideList />
                </div>
              </div>

              <div className='mb-4 mt-2'>
                <div className='d-flex align-items-center justify-content-between  product-section-heading-info'>
                  <p className='m-0'>343 items found in Air Conditioner</p>
                  <div className='d-flex align-items-center justify-content-between gap-3'>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <label>SortBy: </label>
                      <select name="" id="" className='form-control'>
                        <option value="">Latest Product</option>
                        <option value="">Oldest Product</option>
                      </select>
                    </div>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <label>view: </label>
                      <button>
                        <FontAwesomeIcon icon={faTableCells} />
                      </button>
                      <button>
                        <FontAwesomeIcon icon={faBars} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='row p-2 mb-5'>
              <ProductCard />
              <div className="link-wrap mt-4">
                <button className='outline-link'>Load More </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ProductCategory