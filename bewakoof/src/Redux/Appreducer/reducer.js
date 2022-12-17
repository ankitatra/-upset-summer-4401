import * as types from "./actionType"
const initialState = {
  Products: [],
  isLoading: false,
  isError: false,
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
   
                default:
                    return state
            
          }
        
        
        };
        
        export { reducer };