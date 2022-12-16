import React from 'react'
import "../css/SingleProductCom.css"
import { Link, Navigate, useNavigate } from "react-router-dom"

const SingleProductCom = ({actualPriceText,brand_namez,clr_shade_4,discount_price_box,discountedPriceText,id,off,productImgTagSrc,rating,size}) => {
  const navigate=useNavigate()












return (
<>





<div onClick={()=>navigate(`/products/mendata/${id}`)} className='main'>
  <div className="imgDiv">
    <img src={productImgTagSrc} alt="" />
  </div>


  <div >
   <div className="ratingDiv">
   <p>{rating}.0 <span>&#9733;</span></p>
   </div>


    <div>
     
     
      <div>
        <p>{brand_namez}</p>
        <div>
          <img src="https://images.bewakoof.com/web/Wishlist.svg" alt="Wishlist" />
        </div>
      </div>


      <div>
        <p>{clr_shade_4}</p>
      </div>


      <div>

      <span>
        ₹{discountedPriceText}
        </span> 

      <span>
        ₹{actualPriceText}
        </span>

      </div>
   
      <div>
         <p>₹{discount_price_box} For TriBe Members</p>  
      </div>

    </div>
  </div>
</div>









</>
  )
}

export default SingleProductCom