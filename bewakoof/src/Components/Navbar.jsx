import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
// import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import axios from "axios";

const Navbar = () => {

    

    const [sticky , setSticky] = useState("");

    useEffect(() => {
        window.addEventListener("scroll",stickyNavbar);
        return () => window.removeEventListener("scroll",stickyNavbar)
    },[]);

    const stickyNavbar = () => {
        if(window !==undefined) {
            let box = window.scrollY;
            box > 200 ? setSticky("sticky_nav"):setSticky("")
        }
    };
    return(
        <div className={`navbar ${sticky}`}>
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
            <li className="itemlist">{item}</li>
          ))}
        </ul>
      </>
    );
  };

  const BottomwearData = [
    " Joggers",
    "Pyjamas",
    "Shorts",
    "Jeans & Denims",
    "Boxer Shorts,",
    "Trousers & Pants",
    "Plus Size Bottomwear",
    "All Bottomwear",
  ];
  const FootwearData = [
    "Jackets",
    "Sweatshirts & Hoodies",
    "Sweaters",
    "Full Sleeve T-Shirts",
    "Joggers",
  ];
  const WinterwearData = [
    "Jackets",
    "Sweatshirts & Hoodies",
    "Sweaters",
    "Full Sleeve T-Shirts",
    "Joggers",
  ];
  const AccessoriesData = [
    "Mobile Covers",
    "Bags & Backpacks",
    "Caps",
    "Masks",
    "Socks",
    "Mugs",
  ];
  const img = [
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
          {img.map((item) => {
            <li className="itemlist">
                <img  src={item} alt="" />
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
    const [data,setData] = useState("")

    const getCartData = () => {
        axios.get("https://bewakoof-database-api.vercel.app/cart").then((res) => {
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
  
  return (
    <>
      <div>
        <div className="top_container">
          <div className="middle_container">
            <div className="right_container">
              <p className="content">Offers</p>
              <p className="content">Fanbook</p>

              <div style={{ display: "flex" }}>
                <span className="content">

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
      <div className="container">
        <div className="mid_container">
          <div className="firstpart">
            {/* <Link to=""></Link> */}
            <img src={logo} alt="logo" />
          </div>
          <div className="secondpart">
            <div className="nav_category">
              <div className="nav_dropdown">
                <p>Men</p>
                <div>
                  <div className="dropdown_content1">
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
              <div className="nav_dropdown">
                {/* <Link to=""></Link> */}
                <p>Women</p>
                <div>
                  <div className="dropdown_content2">
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
              <div className="nav_dropdown">
                {/* <Link to=""></Link> */}
                <p>Mobile Covers</p>
                <div>
                  <div className="dropdown_content3">
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
            </div>
          </div>
        </div>
      </div>

    </div>
    <div className="nav-category">
      <h1>LIVE NOW!</h1>
      <h1>MEN</h1>
      <h1>WOMEN</h1>
      <h1>ACCESSORIES</h1>
      <h1>WINTERWEAR</h1>
    </div>

    </>
  );
};

export default Navbar;
