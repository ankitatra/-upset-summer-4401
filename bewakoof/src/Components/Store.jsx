import React, { useEffect, useState } from 'react'
import { FilterCom } from './FilterCom'
import { Products } from './Products'
import styles from "../css/store.module.css"
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import "../css/Hidden.css"
export const  Store= () => {
const Total=useSelector((store)=>store.AppReducer.Products.length)
const [scrollBtnSTate,setScrollBtnSTate]=useState(false)
const {cat}=useParams()
  const handleScroll=()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }
    useEffect(() => {
        window.addEventListener("scroll",scrollTopBtn);
        return () => window.removeEventListener("scroll", scrollTopBtn)
    },[window.scrollY]);

    const scrollTopBtn = () => {
        if(window.scrollY>1000&&!scrollBtnSTate) {
         
           setScrollBtnSTate(true)
        
        }else if(window.scrollY<=1000&&scrollBtnSTate){
          setScrollBtnSTate(false)
        }
    };

  return (
    <>
    <Navbar/>
    <div className={styles.main}>
{/*.............................................................  */}
      <div className={styles.location}>
         <p><span>Home</span> / <span>{cat} </span></p>
     </div>

{/*.............................................................  */}

   
   
     <div className={styles.headingDiv}>
       
             {cat} {cat=="Mobile"?"Accessories":"Clothing"} <span>({Total})</span>
         
     </div>



     <div className={styles.mainStore}>
          
           <div>
           <FilterCom/>
          </div>
          <div>
            <Products/>
          </div>
     </div>
     <div className={scrollBtnSTate?styles.scrollTOpFADS:styles.scrollTOpFADSNone} onClick={handleScroll}>
     <i className="fa fa-angle-up" aria-hidden="true"></i>
        </div>
 
 
 <div>
     
 </div>
 
    </div>
    <Footer />
    </>
  )
}
