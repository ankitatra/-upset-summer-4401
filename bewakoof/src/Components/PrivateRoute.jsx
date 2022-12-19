import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"


export const PrivateRoute=({children})=>{
    const isAuth=useSelector((store)=>store.AuthReducer.isAuth)
    const location=useLocation()
    

    if(!isAuth){
        return <Navigate to={"/signup"}  state={{data:location.pathname}} replace />
    }
    return children
}

export default PrivateRoute
