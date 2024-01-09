import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/partials/Breadcrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTableCells } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../components/ProductCard'
import cateBanner from '../assets/images/cate-banner.png'
import FilterWidgets from '../components/FilterWidgets'

const Products = () => {
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

export default Products