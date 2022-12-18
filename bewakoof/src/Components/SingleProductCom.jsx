import React from 'react'
import "../css/SingleProductCom.css"
import { useNavigate } from "react-router-dom"

const SingleProductCom = ({actualPriceText,cat,brand_namez,clr_shade_4,discount_price_box,discountedPriceText,id,off,productImgTagSrc,rating,size}) => {
  const navigate=useNavigate()











return (
<>





<div onClick={()=>navigate(`/products/${cat}/${id}`)} className='mainsnglerwfds'>
  <div className="imgDivsnglerwfds">
    <img src={productImgTagSrc} alt="" />
  </div>


  <div >
   <div className="ratingDivsnglerwfds">
   <p>{rating}.0 <span>&#9733;</span></p>
   </div>


    <div className='ProductDiscsnglerwfds'>
     
     
      <div className='Title_wishlistsnglerwfds'>
        <p>{brand_namez}</p>
        <div>
          <img src="https://images.bewakoof.com/web/Wishlist.svg" alt="Wishlist" />
        </div>
      </div>


      <div className='titlesnglerwfds'>
        <p>{clr_shade_4}</p>
      </div>


      <div className='prcsnglerwfds'>

      <span>
        ₹{discountedPriceText}
        </span> 

      <span>
        ₹{actualPriceText}
        </span>

      </div>
   
      <div className='primesnglerwfds'>
         <p>₹{discount_price_box} For TriBe Members</p>  
        {id%7==0||id%5==0?<p>
       Few Left
        </p>:undefined}
      </div>

    </div>
  </div>
</div>









</>
  )
}

export default SingleProductCom