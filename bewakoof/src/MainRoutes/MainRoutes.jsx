import React from 'react'
import { Route, Routes } from 'react-router'
// import PrivateRoute from '../Components/PrivateRoute'
// import CartPage from '../Pages/CartPage'
import Home from '../Pages/Home'


const MainRoutes = () => {
  return (
    <Routes>
     <Route path ="/" element={<Home />}/>

    </Routes>
  )
}

export default MainRoutes;
