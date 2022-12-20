import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import "./NewArrival.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleProductCom from './SingleProductCom'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
const NewArrivals = () => {
    const [productdatalist,setproductdatalist]=useState([])
  useEffect(()=>{
    getproductdata()
   },[])
   const getproductdata=()=>{
    axios.get("https://bewakoof-database-api.vercel.app/mensdata?_limit=12").then((res)=>{
      setproductdatalist(res.data)
    })
   }
   const navigate=useNavigate()
   const handleclick=(item)=>{
    navigate("/mens")

   }
   const settings = {
    
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <>
    <div>
    <div className='newAtext'>
        <h1>New Arrivals</h1>
    </div>
    <div className='newarrivalsmp'>
    <Slider {...settings} >
    {productdatalist.map((item,id)=>{
        {/* console.log(item) */}
      return(
        <SingleProductCom {...item} key={item+id} cat="mensdata"  />
   
    )
      
    })}
    </Slider>
    <div>
        <Link to="/Men">
            <h2 className='explore'>Explore All</h2>
        </Link>
    </div>
    </div>
    </div>
  
        <div className='gangs'>
            <div className='gangstext'>
               <h2>The GANG'S FAVOURITE</h2>
            </div>
            <Link to="/Men">
            <div className='gangsImage'>
                <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-clearance-zone-1670505866.jpg" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-trendy-jogs-common-1670506775.jpg" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-windcheaters-m-1670248088.jpg" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/full-sleeve-mid-sie-banner-1671179452.jpg" alt="" />
            </div>
            </Link>
        </div>  
           
        </>
       
       
       
        
  )
}

export default NewArrivals


