import React from "react";
import CustomButton from "../customButton/CustomButton";
import { connect } from "react-redux";
import {addItem} from "../../store/actions/cartActions";
import "./collectionItem.scss";
const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add To Cart
      </CustomButton>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addItem(item))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
