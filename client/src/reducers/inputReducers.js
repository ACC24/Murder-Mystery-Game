import { GET_USER_INPUT, SET_USER_INPUT } from "../actions/types";

const initialState = {
    input: ""
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INPUT:
         return {
          ...state,
      }
    case SET_USER_INPUT: 
       return {...state,
      input: action.payload, ...state.input
      }
    default:
      return state;
  }
}