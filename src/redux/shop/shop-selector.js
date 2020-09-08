import { createSelector } from "reselect";

const selectShop = (state) => state.shop;
const selectCollectionId = (state, props) => props.match.params.collectionId;

export const selectCollectionsForPreview = createSelector(
  [selectShop],
  (shop) => Object.values(shop.collections)
);

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = createSelector(
  [selectCollections, selectCollectionId],
  (collections, collectionUrlParam) => collections[collectionUrlParam]
);
