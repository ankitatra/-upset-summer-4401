
import React from 'react'
import BestSeller from '../Components/BestSeller'
import CategoryToBag from '../Components/CategoryToBag'
import MiddleSection from '../Components/MiddleSection'
import Navbar from '../Components/Navbar'
import NewArrivals from '../Components/NewArrivals'
import Popular from '../Components/Popular'
import { Navbar1 } from '../Components/StickyNavbar'
import "./Home.css"
const Home = () => {
  return (
    <>
    <div className='home'>
    <Navbar1 />
      <Navbar />
      <MiddleSection />
      <Popular />
      <NewArrivals />
     <CategoryToBag />
     <BestSeller />
     
    </div>
      
    </>
  )
}

export default Home
