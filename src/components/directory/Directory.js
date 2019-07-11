import React from "react";
import MenuItem from "../menu-item/MenuItem";
import { connect } from "react-redux";
import "./directory.scss";
const Directory = ({directory}) => (
  <div className="directory-menu">
    {directory.map(({ id, ...section }) => (
      <MenuItem key={id} {...section} />
    ))}
  </div>
);
const mapStateToProps = state => {
  return {
    directory: state.directory.sections
  };
};

export default connect(mapStateToProps)(Directory);
