import { shopActionTypes } from "./shop-types";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

const fetchCollectionStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

const fetchCollectionSuccess = (collections) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

const fetchCollectionFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const FETCH_COLLECTIONS_ASYNC = () => (dispatch) => {
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionStart());

  collectionRef
    .get()
    .then((snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      dispatch(fetchCollectionSuccess(collectionsMap));
    })
    .catch((error) => dispatch(fetchCollectionFailure(error.message)));
};
