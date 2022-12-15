import * as types from "./actionTypes"
import axios from "axios"


//get tasks

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

export const getProducts=(payload)=>(dispatch)=>{
    dispatch(getTaskLoading())
       axios({
        method:"get",
        baseURL:`http://localhost/8080`,
        url:payload.endpoint,
        data:payload.data
       }).then((res)=>{
        dispatch(getTaskSuccess(res.data))
       })
       .catch((err)=>{
        dispatch(getTaskFailure())
       })
    
}