import { createSelector } from "reselect";

const selectShop = (state) => state.shop;
const selectCollectionId = (state, props) => props.match.params.collectionId;

export const selectIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectIsCollectionLoaded = createSelector(
  [selectCollections],
  (collections) => !!collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => (collections ? Object.values(collections) : [])
);

export const selectCollection = createSelector(
  [selectCollections, selectCollectionId],
  (collections, collectionUrlParam) =>
    collections ? collections[collectionUrlParam] : null
);
