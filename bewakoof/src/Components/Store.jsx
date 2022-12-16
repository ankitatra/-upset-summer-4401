import React from 'react'
import { FilterCom } from './FilterCom'
import { Products } from './Products'
import styles from "../css/store.module.css"
import { useSelector } from 'react-redux'

export const  Store= () => {
const Total=useSelector((store)=>store.AppReducer.Products.length)

  const handleScroll=()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }


  return (
    <>
   
    <div className={styles.main}>
{/*.............................................................  */}
      <div className={styles.location}>
         <p><span>Home</span> / <span>Men Clothing</span></p>
     </div>

{/*.............................................................  */}

   
   
     <div className={styles.headingDiv}>
       
             Men Clothing <span>({Total})</span>
         
     </div>



     <div className={styles.mainStore}>
          
           <div>
           <FilterCom/>
          </div>
          <div>
            <Products/>
          </div>
     </div>
     <div className={styles.scrollTOpFADS} onClick={handleScroll}>
     <i className="fa fa-angle-up" aria-hidden="true"></i>
        </div>
 
 
 <div>
     
 </div>
 
    </div>
    
    </>
  )
}
