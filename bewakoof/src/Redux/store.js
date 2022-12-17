import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { reducer as AppReducer } from "./Appreducer/reducer";
import { AuthReducer } from "./Authreducer/reducer";
import thunk from "redux-thunk";
import { reducer as Userreducer } from "./Userreducer/reducer";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE_ || compose;

const rootReducer = combineReducers({ AppReducer, AuthReducer, Userreducer });

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
