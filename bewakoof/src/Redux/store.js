import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as Userreducer } from "./Userreducer/reducer";

const store = legacy_createStore(Userreducer, applyMiddleware(thunk));

export { store };
