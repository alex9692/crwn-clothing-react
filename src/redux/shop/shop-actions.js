import { shopActionTypes } from "./shop-types";

export const UPDATE_COLLECTIONS = (collection) => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collection,
});
