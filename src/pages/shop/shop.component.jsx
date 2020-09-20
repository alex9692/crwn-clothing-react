import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { FETCH_COLLECTIONS_ASYNC } from "../../redux/shop/shop-actions.js";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Switch>
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
          <Route
            path={`${match.path}`}
            component={CollectionOverviewContainer}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsAsync: () => dispatch(FETCH_COLLECTIONS_ASYNC()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
