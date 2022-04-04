import React from "react";
import { BsPlusLg } from "react-icons/bs";
import "./styles.css";

const AddNewItem = (props) => {
  const { item } = props;
  return (
    <div className="add-newItem-container">
      <div className="add-item-icon">
        <BsPlusLg className="plus-sign" />
      </div>
      <div className="add-newItem-heading-box">
        <h2 className="add-newItem-heading">{item}</h2>
      </div>
    </div>
  );
};

export default AddNewItem;
