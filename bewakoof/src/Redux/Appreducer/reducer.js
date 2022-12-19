import { Action } from "@remix-run/router";
import * as types from "./actionType"
const initialState = {
  Products: [],
  isLoading: false,
  isError: false,
  admin:[]
};

const reducer = (state = initialState,{type,payload}) => {
  switch(type){

             case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,isLoading:false,isError:true
      };

             case types.GET_PRODUCTS_REQUEST:
        return{
          ...state,isLoading:true
        };

             case types.GET_PRODUCTS_SUCCESS:
          return {
            ...state,Products:payload,isLoading:false
          };
          case types.Get_data_Request:
            return{
              ...state,isLoading:true
            }
          case types.Get_data_Success:
            return{
              ...state,admin:payload,isLoading:false
            }
          case types.Get_data_Failuer:
            return{
              ...state,isError:true,isLoading:false
            }
   
                default:
                    return state
            
          }
        
        
        };
        
        export { reducer };