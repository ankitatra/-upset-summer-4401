import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { HiOutlineDevicePhoneMobile} from "react-icons/hi2";
import {CiSearch} from "react-icons/ci"
 import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";
import axios from "axios";
import { Box, Heading } from "@chakra-ui/layout";
import { Avatar, AvatarGroup } from "@chakra-ui/avatar";
import {BsBag, BsHeart} from "react-icons/bs"
import { useSelector } from "react-redux";


const Navbar = () => {
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
        <div className={`navbar ${sticky} SFDAREWRF`}>
            <BottomNavbar />
        </div>

    )
}
  const TopWear = "Top wear";
  const BottomWear = "Bottom wear";
  const WinterWear = "Winter wear";

  const TopwearData = [
    "Topwear Printed",
    "T-Shirts Oversized",
    " T-shirts Plain",
    "T-Shirts Fashion",
    " T-Shirts Activewear",
    "T-ShirtsFull Sleeve",
    "T-ShirtsHalf Sleeve",
    "T-Shirts Shirts Vests",
    " Co-ord Sets",
    "Kurtas",
    "Henleys",
    "PlusSize",
    " Topwear",
    " Polo T-Shirts",
    "Jackets",
    "Sweatshirt",
    "AllTopwear",
  ];
  const TopwearList = ({ TopwearData, TopWear }) => {
    return (
      <>
        <p className="heading">{TopWear}</p>
        <ul>
          {TopwearData.map((item, index) => (
            <li key= {index} className="itemlist">{item}</li>
          ))}
        </ul>
      </>
    );
  };

  // const BottomwearData = [
  //   " Joggers",
  //   "Pyjamas",
  //   "Shorts",
  //   "Jeans & Denims",
  //   "Boxer Shorts,",
  //   "Trousers & Pants",
  //   "Plus Size Bottomwear",
  //   "All Bottomwear",
  // ];
  // const FootwearData = [
  //   "Jackets",
  //   "Sweatshirts & Hoodies",
  //   "Sweaters",
  //   "Full Sleeve T-Shirts",
  //   "Joggers",
  // ];
  // const WinterwearData = [
  //   "Jackets",
  //   "Sweatshirts & Hoodies",
  //   "Sweaters",
  //   "Full Sleeve T-Shirts",
  //   "Joggers",
  // ];
  // const AccessoriesData = [
  //   "Mobile Covers",
  //   "Bags & Backpacks",
  //   "Caps",
  //   "Masks",
  //   "Socks",
  //   "Mugs",
  // ];
  const imgArr = [
    "https://images.bewakoof.com/nav_menu/Circle-icon-1670577361.png",
    "https://images.bewakoof.com/nav_menu/icon-winter-1665155950.png",
    "https://images.bewakoof.com/nav_menu/icon-168-1668158001.png",
    "https://images.bewakoof.com/nav_menu/Circle-icon-dotw-1669102812.png",
    "https://images.bewakoof.com/nav_menu/Circle-icon-dotw-1669102812.png",
    "https://images.bewakoof.com/nav_menu/Circle-icon-space-collection-1666891198.png",
    "https://images.bewakoof.com/nav_menu/Circle-Icon-1664893858.png",
    "https://images.bewakoof.com/nav_menu/Circle-icon-color-splash-1663442159.png",
    "https://images.bewakoof.com/nav_menu/urban-collection-1660645934.png",
    "https://images.bewakoof.com/nav_menu/play-1652947970.png",
    "https://images.bewakoof.com/nav_menu/pride-icon-circle-1655695905.png",
  ];
  const specialdata = [
    " Live Now!",
    "Winterwear Store",
    "Streetwear Collection",
    " Designs of the Week",
    "Space Collection",
    "Pokemon Collection",
    "Colour Splash Collection",
    "Urban Collection",
    "Play by Bewakoof",
    "	Pride Collection",
    "K-Pop Collection",
    "Marvel Youth Beat",
  ];
  const specialdatalist = () => {
    return (
      <>
        <p className="heading">Special</p>
        <ul>
          {specialdata.map((item) => {
            <li className="itemlist">{item}</li>;
          })}
        </ul>
      </>
    );
  };
  const SpecialdataImg = () => {
    return (
      <>
        <p className="heading">Special</p>
        <ul>
          {imgArr.map((item) => {
            <li className="itemlist">
                <img  height="60px" width="60px"src={item} alt="" />
            </li>;
          })}
        </ul>
      </>
    );
  };
  const BrandX = "Xiaomi";
  const BrandS= "Samsung";
  const BrandO = "One Plus";
  const BrandR = "Realmi";
  const BrandA = "Apple";
  const BrandV = "Vivo";

  const BrandXData = ["Mi 12 Pro 5G" , "Redmi 9 Power" , "Redmi 10A"]
  const BrandSData = ["Samsung Galaxy Note 10 lite" , "Samsung Galaxy Note 10 Plus" , "Samsung Galaxy Note 10"]
  const BrandOData = ["OnePlus 9R" , "OnePlus 9RT" , "OnePlus 9"]
  const BrandRData = ["Realme 5 Pro" , "Realme 5" , "Realme 9 Pro 5G"]
  const BrandAData = ["iPhone 14 Pro Max" , "iPhone 14 Pro" , "iPhone 14 Plus"]
  const BrandVData = ["Vivo S1" , "Vivo Y51 2020" , "Vivo y 73"]

  const BottomNavbar = () => {
    let str =JSON.parse(localStorage.getItem("str"))
    const isAuth=useSelector((store)=>store.AuthReducer.isAuth)
    const navigate=useNavigate()
    const searchRef=useRef()
    const [searchHide,setSearchHide]=useState(false)
     
    const [data,setData] = useState("")

    const getCartData = () => {
        axios.get("https://bewakoof-database-api.vercel.app/cartdata").then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log(err)
            setData(data)
        })
    }
    useEffect(() => {
        getCartData();
    },[]);
  

    const handleKeyDown=(e)=>{
if(e.key=="Enter"&&searchRef.current.value){
  navigate(`/${searchRef.current.value}`)
}
    }
  return (
    <>
      <div>
        <div className="top_container">
         
         
         
           <div className="middle_container">
            
            
            
            
             <div className="right_container">
              <p className="content">Offers</p>
              <p className="content">Fanbook</p>
              <div className="downapp">
                <span >
                  <HiOutlineDevicePhoneMobile />
                  <p>Download App</p>
                </span>
              </div>

              <p className="content">TriBe Membership</p>
            </div>
           
           
           
            <div className="left_container">
              <p className="content">Contact Us</p>
              <p className="content">Track Order</p>
            </div>




          </div>
      
      
      
      
        </div>
      </div>




      {/* ........................ */}
      <div className="container1">



        
        <div className="mid_container">
         
         
          <div className="firstpart1">
           <Link to="/"><img src={"https://helpful-boba-72cf74.netlify.app/static/media/logo.ab4c3efdbab9da427219.png"} alt="logo" /></Link> 
            
          </div>


          <div className="secondpart">
           
           
            <div className="nav_category1">
              
              
              <div className="nav_dropdown">
               
               
                <Link></Link>
                <p onClick={()=>navigate("/Men")}>Men</p>
               
                  <div>
                    
                     <div className="dropdown_content1" >
                    <div className="hover_container" >
                      <div>
                        <TopwearList
                          TopwearData={TopwearData}
                          TopWear={TopWear}
                        />
                      </div>
                      <div>
                        <TopwearList TopwearData={TopwearData} TopWear={BottomWear} />
                      </div>
                      <div>
                        <TopwearList TopwearData={TopwearData} TopWear={WinterWear} />
                      </div>
                      <div className="line">
                        
                      </div>
                      <div>
                        <SpecialdataImg />
                      </div>
                    </div>
                     </div>

                  </div>
              </div>
              
              
              <div className="nav_dropdown">
                {/* <Link to=""></Link> */}
                <p onClick={()=>navigate("/Women")}>Women</p>
                <div>
                 
                   <div className="dropdown_content2" >
                   
                     <div className="hover_container">
                    
                    
                      <div>
                        <TopwearList
                          TopwearData={TopwearData}
                          TopWear={TopWear}
                        />
                      </div>
                     
                      <div>
                        <TopwearList TopwearData={TopwearData} TopWear={BottomWear} />
                      </div>
                     
                     
                      <div>
                        <TopwearList TopwearData={TopwearData} TopWear={WinterWear} />
                      </div>
                     
                     
                      <div className="line"></div>
                      
                      
                      <div>
                        <SpecialdataImg />
                      </div>


                    </div>



                    </div>
                </div>
              </div>


              <div className={`nav_dropdown ${searchHide?"mobileNav":undefined}`}>
                {/* <Link to=""></Link> */}
                <p onClick={()=>navigate("/Mobile")}>Mobile Covers</p>
                <div>
                
                
                  <div className="dropdown_content3" style={{display:"none"}}>
                  {/* <p>Popular</p> */}
                   
                   
                    <div className="hover_container">
                     
                     
                      <div>
                        <TopwearList
                          TopwearData={BrandAData}
                          TopWear={BrandA}
                        />
                      </div>
                    
                    
                      <div>
                        <TopwearList TopwearData={BrandOData} TopWear={BrandO} />
                      </div>
                    
                    
                      <div>
                        <TopwearList TopwearData={BrandRData} TopWear={BrandR} />
                      </div>
                     
                     
                      <div>
                        <TopwearList TopwearData={BrandSData} TopWear={BrandS} />
                      </div>
                     
                     
                      <div>
                        <TopwearList TopwearData={BrandVData} TopWear={BrandV} />
                      </div>
                   
                   
                      <div>
                        <TopwearList TopwearData={BrandXData} TopWear={BrandX} />
                      </div>
                     
                     
                      <div className="line" ></div>
                      
                      
                      <div>
                        <p>Other Brands</p>
                        <ul>
                          <li className="itemlist">Oppo</li>
                          <li className="itemlist">Huawei</li>
                          <li className="itemlist">Moto</li>
                        </ul>
                      </div>
                    
                    
                      <div>
                      <img src="https://images.bewakoof.com/nav_menu/bewakoof-online-fashion-COTM-mobile-cover-navigation-box-desktop-1612275399.jpg" alt="PhoneImage" />
                      </div>


                    </div>
                </div>
               </div>
              </div>
            
            </div>
              
           
              <div className="DSFASAFRew">
                
                
                <div className="input"  >
                    <div className="input1"
                     onMouseEnter={()=>{
                      if(!searchHide){
                        setSearchHide(true)
                      }}}
                      
                     onMouseLeave={()=>{
                        if(searchHide){
                      setSearchHide(false)
                   
                    }}}
                      >
                       <span  
                    
                    
                   
                    
                    ><CiSearch /></span>
                    
           <input  type="text"  className={searchHide?"showInput":undefined} ref={searchRef} onKeyDown={handleKeyDown} placeholder="Search by product, category or callection"/>
                    </div>
                
                 <div  className={`login ${searchHide?"hidelogin":undefined}`}>
                 
                    {/* <span style={{ fontSize: "20px", fontWeight: "lighter" }}>
                        </span> */}
                    
                    <Link to={"/signup"}>
                          <span>
                            
                    {isAuth? <img className="asdfaer"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    alt=""
                    
                    />
                    
                    
                    

                    :
                        "Login"
                    
                    
                    }
                  
                  </span>
                   </Link> 

                  <Link>
                  <span className="icon">
                    <BsHeart />
                  </span>
                  </Link>


                  <Link to={"/cart"}>
                    <span><BsBag/></span>
                    <span>
                      {}
                    </span>
                  </Link>


                 </div>
                </div>
               </div>
          </div>
        </div>



    </div>

      {/* ........................ */}


    <div className="nav-category1">
    <h1 onClick={()=>navigate("/")}>LIVE NOW!</h1>
     <h1 onClick={()=>navigate("/Men")}>MEN</h1>
      <h1  onClick={()=>navigate("/Women")}>WOMEN</h1>
      <h1  onClick={()=>navigate("/Mobile")}>ACCESSORIES</h1>
      {/* <h1>WINTERWEAR</h1> */}
    </div>


    </>
 )
 }

export default Navbar;