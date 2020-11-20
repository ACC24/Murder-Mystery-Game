import { GET_USER_INPUT, SET_USER_INPUT } from "./types";

export const getUserInput = input => {
    return {
      type: GET_USER_INPUT,
      payload: input
    };
};

export const setUserInput = input => {
  return {
    type: SET_USER_INPUT,
    payload: input
  };
}