import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import inputReducer from "./inputReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  input: inputReducer
});
