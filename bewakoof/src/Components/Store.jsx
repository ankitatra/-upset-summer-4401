import React from 'react'
import { FilterCom } from './FilterCom'
import { Products } from './Products'
import styles from "../css/store.module.css"

export const  Store= () => {
  return (
    <>
   
    <div className={styles.main}>
{/*.............................................................  */}
      <div className={styles.location}>
         <p><span>Home</span> / <span>Men Clothing</span></p>
     </div>

{/*.............................................................  */}

   
   
     <div className={styles.headingDiv}>
         <h1>
             Men Clothing <span>(7946)</span>
         </h1>
     </div>



     <div className={styles.mainStore}>
          
           <div>
           <FilterCom/>
          </div>
          <div>
            <Products/>
          </div>
     </div>
 
 
 <div>
     
 </div>
 
    </div>
    
    </>
  )
}
