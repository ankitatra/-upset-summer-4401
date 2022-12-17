import React from 'react'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useParams } from "react-router-dom"
import { getProducts } from '../Redux/Appreducer/action'

const CartPage = () => {
 const dispatch=useDispatch()
 const {id,cat}=useParams()
 const Products=useSelector((store)=>store.AppReducer.Products)
 const [currentProduct,setCurrentProduct]=useState({})


 useEffect(()=>{

  if(Products.length===0){
        dispatch(getProducts({},cat))
  }

},[Products.length,dispatch])


useEffect(()=>{
  if(id){
      const currentProduct=Products.find((item)=>item.id=== Number(id))
       currentProduct&&setCurrentProduct(currentProduct)
  }
  },[id,Products])
console.log(currentProduct)




  return (
    <div>CartPage</div>
  )
}

export default CartPage