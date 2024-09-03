import React from 'react'
import TopHeader from '../../../components/topHeader/TopHeader'
import Header from '../../../components/header/Header'
import BannerPage from '../BannerPage'
import Footer from '../../../components/footer/Footer'
import Products from '../../Products/Products'

const Home = () => {
  return (
    <>
    <div className="bannerPage bg-gray-200">
    <BannerPage/>
    </div>

    <div>
      <Products></Products>
    </div>
    
    </>
  )
}

export default Home