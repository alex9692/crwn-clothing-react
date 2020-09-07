import { UserActionTypes } from "./user-types.js";

export const SET_CURRENT_USER = (user) => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};
