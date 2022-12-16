import React from 'react'
import { Navigate } from 'react-router'

const PrivateRoute = ({children}) => {
    let isAuth = JSON.parse(localStorage.getItem("str"))
    if(isAuth){
        return(<Navigate to="/login"/>)
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default PrivateRoute
