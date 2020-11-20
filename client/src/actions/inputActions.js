import { GET_USER_INPUT } from "./types";

export const getUserInput = input => {
    return {
      type: GET_USER_INPUT,
      payload: input
    };
};