import * as types from "./actionType";

const initialState={
  isAuth:JSON.parse(localStorage.getItem("isAuth"))||false,
  isLoading: false,
  isError: false,
};

const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case types.LOGIN_SUCCESS:
    
      return { ...state, isLoading: false, isAuth: true  };
    case types.LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
   default:
      return state;
  }
};

export { AuthReducer };
