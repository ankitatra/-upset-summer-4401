import React, { useEffect, useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import {TbLetterC} from "react-icons/tb"
import {FiShoppingBag,FiHeart,FiSearch} from "react-icons/fi"
import "./StickyNavbar.css"


export const Navbar1 = () => {
    const [sticky , setSticky] = useState("");

    
    useEffect(() => {
        window.addEventListener("scroll",stickNavbar);
        return () => window.removeEventListener("scroll", stickNavbar)
    },[]);

    const stickNavbar = () => {
        if(window !==undefined) {
            let box = window.scrollY;
            box > 200 ? setSticky("sticky_nav"):setSticky("")
        }
    };
    return(
        <div className={`navbar ${sticky}`}>
            <StickyNavbar />
        </div>

    )
}
const StickyNavbar = () => {
  return (
    <>
     <div className="container">
        <div className="firstpart">
            <AiOutlineMenu />
            <TbLetterC />
        </div>
        <div className="firstpart">
            <FiSearch />
            <FiHeart />
            <FiShoppingBag />
        </div>
     </div> 
    </>
  )
}

export default StickyNavbar
