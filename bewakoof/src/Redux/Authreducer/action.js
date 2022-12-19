import axios from "axios";
import * as types from "./actionType";

const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  return axios
    .post("https://636e2daeb567eed48ad57264.mockapi.io/login", payload)
    .then((r) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: r });
      localStorage.setItem("username",JSON.stringify(payload.data.name))
      localStorage.setItem("isAuth",JSON.stringify(true))
    })
    .catch((e) => {
      dispatch({ type: types.LOGIN_FAILURE });
    });
};

export { login };