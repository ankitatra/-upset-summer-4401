import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useLocation, useSearchParams } from "react-router-dom"
import { getProducts } from '../Redux/Appreducer/action'
import SingleProductCom from './SingleProductCom'
import "../css/Products.css"
export const Products = () => {
    const dispatch=useDispatch()
    const location=useLocation()
    const [searchParams]=useSearchParams()
    const Products=useSelector((store)=>store.AppReducer.Products)
    const [cat,setCat]=useState("mensdata")
 console.log(Products)

    useEffect(()=>{

      if(location ||Products.length===0){
        const brand_namez=searchParams.getAll("brand_namez")
        const off=searchParams.get("off")
        const ratingBy=searchParams.get("rating")
        const sortBy=searchParams.get("sort")
   
          const getBookParams={
              params:{
                  brand_namez:brand_namez,
                  _sort:sortBy&&"discountedPriceText",
                  _order: sortBy,
                  rating_gte:ratingBy,
                  off_gte:off,
                 }
          }
      dispatch(getProducts(getBookParams,cat))
    }

    
  },[Products.length,dispatch,location.search])








  return (
  
     
    <div>

        <div className='productsDivprdasdfsd'>
          {
            Products.map((el)=>{
             return <SingleProductCom key={el.id+cat} {...el} cat={cat}/>
            })
          }
        </div>
       

    </div>
   
  )
}
