import React from "react";
import "./collection.scss";
import { connect } from "react-redux";
import CollectionItem from "../../components/collectionItem/CollectionItem";
import { selectCollection } from "../../store/shopSelector";
const Collection = ({ collections }) => {
  return (
    <div className="collection-page">
      <h2 className="title">{collections[0].title}</h2>
      <div className="items">
        {collections[0].items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.collectionId;
  let data = state.collections.filter(collect => {
    return collect.routeName === id;
  });
  return {
    collections: data
  };
};
export default connect(mapStateToProps)(Collection);
