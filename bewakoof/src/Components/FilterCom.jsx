import React from 'react'
import styles from "../css/FilterCom.module.css"



//..........................

const brandFilter=['Burberry','Prada','Louis Vuitton','Click n Buy']
const brandY=["Qrioh","WRAPCART","Bewakoof","Hocopoco"]
const discountFilter=[10,20,30,40,50,60,70]
const ratingFilter=[1,2,3,4,5]


//............................
export const FilterCom = () => {



  // if("mobiles"=="mobiles"){
  //   brandFilter=brandY
  // }
  return (
   <>
 <div className={styles.main}>
<p>FILTERS</p>




<div>
{ /*brand*/ }
<div>
   <p>Brand</p>
   <div>
<ul>

{brandFilter.map((el)=>{
  return <li onClick={true} >{el}</li>
})}

    
  </ul>
   </div>
</div>

{/* discount */}
<div>
  <p>
    Rating
  </p>
   <div>
      <ul>
        {
          discountFilter.map((el)=>{
            return <li onClick={true}>{el}% Or More</li>

          })
        }
      </ul>
  </div>
</div>

{/* rating */}
<div>
<p>
  Ratings
</p>
<div>
  <ul>
    {
ratingFilter.map((el)=>{
  return <li onClick={true}>{el} and above</li>
})
    }
  </ul>
</div>
</div>


{/* sortBy */}
<div>
  <p>Sort By</p>
  <div>
    <ul>
      <li>
        Price : High to Low 
      </li>
      <li>
        Price : Low to High
      </li>
    </ul>
  </div>
</div>
</div>


 </div>
   
   </>

  )
}
