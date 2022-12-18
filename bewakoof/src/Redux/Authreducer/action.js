import axios from "axios";
import * as types from "./actionType";

const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  return axios
    .post("http://localhost:8080/userdata", payload)
    .then((r) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: r });
    })
    .catch((e) => {
      dispatch({ type: types.LOGIN_FAILURE });
    });
};

export { login };