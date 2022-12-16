import React from 'react'
import Slider from 'react-slick';
import "./MiddleSection.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const MiddleSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

      const settings1 = {
        slidesToShow: 6,
        slidesToScroll: 1,
      };
  return (
    <>
     <div className='sliderbox'>
        <Slider {...settings} >
          <div className='slide_image'>
            <img src="https://images.bewakoof.com/uploads/grid/app/oof-sale-endstoday-1x1-common-1671109728.gif" alt="" />
          </div>
          <div className='slide_image'>
          <img src="https://images.bewakoof.com/uploads/grid/app/revised-buy3-banner-1670840080.jpg" alt="" />
          </div>
          <div className='slide_image'>
          <img src="https://images.bewakoof.com/uploads/grid/app/revamped-banner-1x1-copy-04-1670505869.jpg" alt="" />
          </div>
          <div className='slide_image'>
          <img src="https://images.bewakoof.com/uploads/grid/app/winter-looks-common-1670589179.jpg" alt="" />
          </div>
          <div className='slide_image'>
          <img src="https://images.bewakoof.com/uploads/grid/app/b2g1-1x1-common-1670505865.jpg" alt="" />
          </div>
        </Slider>
      </div>

     <div className='banner'>
        <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-6-1669115141.jpg" alt="" />
     </div>
     <div>
     <div className='sliderbox2'>
        <Slider {...settings1} >
          <div className='slide_image'>
            <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-bestseller-1669138226.jpg" alt="" />
            <p>Bestsellers</p>
          </div>
          <div className='slide_image'>
          <img src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-New-Arrivals-Common-1668508339.jpg" alt="" />
          <p>New Arrivals</p>
          </div>
          <div className='slide_image'>
          <img src="https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg" alt="" />
          <p>Hot Deals</p>
          </div>
          <div className='slide_image'>
          <img src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-Collabs-Common-1668508338.jpg" alt="" />
          <p>Official Collaborations</p>
          </div>
          <div className='slide_image'>
          <img src="https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg" alt="" />
          <p>Last Sizes Left</p>
          </div>
          <div className='slide_image'>
          <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-copy-1669723278.jpg" alt="" />
          <p>Plus Size</p>
          </div>
        </Slider>
      </div>
     </div>
     <div className='designofweek'>
        <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Split-Men-1670938024.jpg" alt="" />
        <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Split-Women-1670938025.jpg" alt="" />
     </div>
     
    </>
  )
}

export default MiddleSection
