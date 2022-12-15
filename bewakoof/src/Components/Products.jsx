import React from 'react'
import { useSelector } from 'react-redux'

export const Products = () => {
  const Products=useSelector((store)=>store.AppReducer.Products)
  console.log(Products)
  return (
    <div>Products</div>
  )
}
