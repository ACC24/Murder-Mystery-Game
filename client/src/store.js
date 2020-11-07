import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
<<<<<<< HEAD
    
=======
    // (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
    //   compose
>>>>>>> 1d2d75d24bf8b8acffae23e08dad5717a3a83af5
  )
);

export default store;
