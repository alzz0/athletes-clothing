import React from "react";
import { connect } from "react-redux";
import "./collectionsOverview.scss";
import PreviewCollection from "../previewCollection/PreviewCollection";
const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...collection }) => (
      <PreviewCollection key={id} {...collection} />
    ))}
  </div>
);

const mapStateToProps = state => {
  return {
    collections: state.collections
  };
};

export default connect(mapStateToProps)(CollectionsOverview);
