import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import styles from "../css/FilterCom.module.css"



//..........................

let brandFilter=['Burberry','Prada','Louis Vuitton']
const brandY=["Qrioh","WRAPCART","Bewakoof","Hocopoco"]
const discountFilter=[10,20,30,40,50,60,70]
const ratingFilter=[1,2,3,4,5]


//............................
export const FilterCom = () => {
  const [searchParams,setSearchParams]=useSearchParams()
  // ...........................
  const initStateBrand_namez=searchParams.getAll("brand_namez")
  const [brand_namez,setBrand_namez]=useState(initStateBrand_namez||[])
  // ............................
  const initStateoff=searchParams.get("off")
  const [off,setOff]=useState(initStateoff||"")
  // ............................
  const initStateRating=searchParams.get("rating")
  const [rating,setRating]=useState(initStateRating||"")
  // ............................
  const initStateSort=searchParams.get("sort")
  const [sort,setSort]=useState(initStateSort||"")
  // ...........
  const {cat}=useParams()

  if(cat=="Mobile"){
    brandFilter=brandY
  }

  const handleFilterBrand_namez=(el)=>{
    const newBrand_namez=[...brand_namez]
    if(newBrand_namez.includes(el)){
        newBrand_namez.splice(newBrand_namez.indexOf(el),1)
    }else{
        newBrand_namez.push(el)
    }

    setBrand_namez(newBrand_namez)  

}

const handleFilterOff=(el)=>{
  setOff(el)
}

const handleFilterRating=(el)=>{
  setRating(el)
}

const handleSort=(e)=>{
  setSort(e.target.value)
}

const resetFilters=()=>{
  if(brand_namez.length!==0){
    setBrand_namez([])
  }
  if(off){
    setOff("")
  }
  if(rating){
    setRating("")
  }
  if(sort){
    setSort("")
  }
}


useEffect(()=>{
  const params={}
  brand_namez&&(params.brand_namez=brand_namez)
  off&&(params.off=off)
  rating&&(params.rating=rating)
  sort&&(params.sort=sort)
  setSearchParams(params)
},[brand_namez,setBrand_namez,setSearchParams,sort,setSort,off,setOff,rating,setRating])



  return (
   <>
 <div className={styles.mainFIlASDF}>
<div>
<p>FILTERS</p>
<p disabled={off==""||rating==""||sort==""||brand_namez.length==0} onClick={()=>resetFilters()} className={(off!==""||rating!==""||sort!==""||brand_namez.length!==0)?styles.includeFiltersFIlASDF:styles.DisplayHiddenFIlASDF}>Clear All</p>
</div>




<div className={styles.filterMainFIlASDF}  >
{ /*brand*/ }
<div>
   <p className={brand_namez.length!==0?styles.includeFiltersFIlASDF:styles.gapasdf}>Brand</p>
   <div>
<ul>

{brandFilter.map((el)=>{
  return <li key={el+"newBrand_namezs"} className={brand_namez.includes(el)?styles.includeFiltersFIlASDF:undefined} onClick={()=> handleFilterBrand_namez(el)} >{el}</li>
})}

    
  </ul>
   </div>
</div>

{/* discount */}
<div>
  <p className={off!==""?styles.includeFiltersFIlASDF:styles.gapasdf}>
    Discount
  </p>
   <div>
      <ul>
        {
          discountFilter.map((el)=>{
            return <li key={el+"Off"} className={off===el?styles.includeFiltersFIlASDF:undefined}   onClick={()=>handleFilterOff(el)}>{el}% Or More</li>

          })
        }
      </ul>
  </div>
</div>

{/* rating */}
<div>
<p className={rating!==""?styles.includeFiltersFIlASDF:styles.gapasdf}>
  Ratings
</p>
<div>
  <ul>
    {
ratingFilter.map((el)=>{
  return <li key={el+"rating"} className={rating===el?styles.includeFiltersFIlASDF:undefined}  onClick={()=>handleFilterRating(el)}>{el} and above</li>
})
    }
  </ul>
</div>
</div>


{/* sortBy */}
<div>
  <p className={sort!==""?styles.includeFiltersFIlASDF:styles.gapasdf}>Sort By</p>
     <div className={styles.setRadioFIlASDF}>
    
      <div >
      <input type="radio" onChange={handleSort} checked={sort==="asc"} value={"asc"} name="sortBy" />
      <label htmlFor="">Price : Low to High
      </label>
      </div>
  
       <div>
       <input type="radio" onChange={handleSort} checked={sort==="desc"}  value={"desc"} name={"sortBy"} />
        <label htmlFor="">Price : High to Low </label>
       </div>
  
  </div>
</div>



</div>


 </div>
   
   </>

  )
}
