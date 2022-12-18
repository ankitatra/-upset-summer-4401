import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import "./NewArrival.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleProductCom from './SingleProductCom'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
const BestSeller = () => {
    const [productdatalist,setproductdatalist]=useState([])
    useEffect(()=>{
      getproductdata()
     },[])
     const getproductdata=()=>{
      axios.get("https://bewakoof-database-api.vercel.app/womensdata?_limit=12").then((res)=>{
        setproductdatalist(res.data)
         console.log("data",res.data)
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
    {productdatalist.map((item)=>{
        {/* console.log(item) */}
      return(
        <SingleProductCom {...item} cat="mensdata"  />
   
    )
      
    })}
    </Slider>
    <div>
        <Link>
            <h2 className='explore'>Explore All</h2>
        </Link>
    </div>
    </div>
    </div> 
    </>
  )
}

export default BestSeller
