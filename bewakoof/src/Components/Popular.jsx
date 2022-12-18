import React from 'react'
import { Link } from 'react-router-dom'
import "./Popular.css"


const Popular = () => {

    
  return (
    <>
      <div className='popular'>
        <h1>POPULAR CATEGORIES</h1>
        <Link to="/Men">
        <div className='boys'>
           <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-printed-tees-1668765004.jpg" alt="" />
           <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-e-1670938024.jpg" alt="" />
           <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-1-1670504700.jpg" alt="" />
           <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-d-1670923576.jpg" alt="" />
           <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-2-1670504700.jpg" alt="" />
           <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-7-1670503951.jpg" alt="" />
        </div>
        </Link>
        <Link to="/Women">
        <div className='girls'>
           <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-boyfriend-tees-1668773241.jpg" alt="" />
           <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-5-1670504699.jpg" alt="" />
           <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-6-1670504698.jpg" alt="" />
           <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-4-1670504697.jpg" alt="" />
           <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-c-1670923575.jpg" alt="" />
           <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-fullsleevetees-1668773243.jpg" alt="" />
        </div>
        </Link>
        
      </div>
      
    </>
  )
}

export default Popular
