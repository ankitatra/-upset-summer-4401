import React, { useEffect, useRef, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useLocation, useParams, useSearchParams } from "react-router-dom"
import { getProducts } from '../Redux/Appreducer/action'
import SingleProductCom from './SingleProductCom'
import "../css/Products.css"
export const Products = () => {
    const dispatch=useDispatch()
    const limitRef=useRef(2000)
    const xref=useRef()
    const location=useLocation()
    const [searchParams]=useSearchParams()
   const {cat:Cat}=useParams()
   const initCat=Cat==="Men"?"mensdata":Cat==="Women"?"womensData":"mobiles"
    const {Products,isLoading}=useSelector((store)=>store.AppReducer)
    const [cat,setCat]=useState(initCat||"mensdata")

  //   useEffect(() => {
      
  //     window.addEventListener("scroll",()=>limitData());

  //     return () => window.removeEventListener("scroll", limitData)
  // },[window.scrollY]);

// const limitData=()=>{

// //   if(window.scrollY>limitRef.current){
// //     setLimit(limit+30)
// //     limitRef.current+=500
// //   }
// // console.log(limit,window.scrollY)
// }


//.......................
// useEffect(()=>{
//   var D = document;
// console.log( D.body.scrollHeight,window.scrollY)
// },[window.scrollY])
//.......................

useEffect(()=>{
setCat(initCat)
},[Cat])

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
                  off_gte:off
                 }
          }
      dispatch(getProducts(getBookParams,cat))
    }
    
  },[Products.length,dispatch,location.search,cat])







  return (
  
     
    <div>
{/* {
  isLoading&&<div style={{position:"absolute",top:"45%"}}>
    <Audio height = "80"
  width = "80"
  radius = "9"
  color = '#fdd835'
  ariaLabel = 'three-dots-loading'     
  wrapperStyle
  wrapperClass />
    </div>
} */}
     {  !isLoading&& <div ref={xref} className='productsDivprdasdfsd'>
          {
            Products.map((el)=>{
             return <SingleProductCom key={el.id+cat} {...el} cat={cat}/>
            })
          }
        </div>}
       

    </div>
   
  )
}
