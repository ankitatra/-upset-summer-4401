
import { Route, Routes } from 'react-router'
import { Store } from '../Components/Store'
import CartPage from '../Pages/CartPage'
import PrivateRoute from '../Components/PrivateRoute'
import Home from '../Pages/Home'
import { Men } from '../Pages/Men'


const MainRoutes = () => {
  return (
    <Routes>
     <Route path ="/" element={<Home />}/>
     <Route path="/:cat" element={<Store/>}/>
     <Route path="/products/:cat/:id" element={<CartPage/>}  />
    
    </Routes>
  )
}

export default MainRoutes;
