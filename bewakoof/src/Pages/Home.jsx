
import React from 'react'
import MiddleSection from '../Components/MiddleSection'
import Navbar from '../Components/Navbar'
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
    </div>
      
    </>
  )
}

export default Home

