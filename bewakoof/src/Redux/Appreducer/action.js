import * as types from "./actionType.js"
import axios from "axios"




export const getProductsLoading=()=>{
    return {
        type:types.GET_PRODUCTS_REQUEST
    }
}

export const getProductsSuccess=(payload)=>{
    return {
        type:types.GET_PRODUCTS_SUCCESS,
        payload
    }
}

export const getProductsFailure=()=>{
    return {
        type:types.GET_PRODUCTS_FAILURE
    }
}



    

               
export const getProducts=(params,cat)=>(dispatch)=>{
    dispatch(getProductsLoading())
    return axios.get("https://bewakoof-database-api.vercel.app/"+cat,params)
    .then((r)=>{
     
        dispatch(getProductsSuccess(r.data))
       })
       .catch((err)=>{
        dispatch(getProductsFailure())
       })
    
}