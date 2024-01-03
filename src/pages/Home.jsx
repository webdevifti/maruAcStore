import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/styles/pages/home.scss'
import HomeHeroBanner from '../components/HomeHeroBanner'
import HomeSubcategoryBanner from '../components/HomeSubcategoryBanner'
import HomeService from '../components/HomeService'
import HomeShop from '../components/HomeShop'
import HomeClient from '../components/HomeClient'
import HomeTopBrand from '../components/HomeTopBrand'
import HomeTestimonial from '../components/HomeTestimonial'
import HomePricingList from '../components/HomePricingList'


const Home = () => {
  return (
    <div>
      <Header />
      <HomeHeroBanner />
      <HomeSubcategoryBanner />
      <HomeService />
      <HomeShop />
      <HomeClient />
      <HomeTestimonial />
      <HomePricingList />
      <HomeTopBrand />
      <Footer />
    </div>
  )
}

export default Home