import React from "react";
import WrappedInput from "./WrappedInput";
import "./styles.css";
import "./index.css";
import { BiArrowBack } from "react-icons/bi";

const AddTransaction = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("form Submitted");
  };
  return (
    <>
      <div className="section-heading-container">
        <div className="back-arrow-container">
          <BiArrowBack className="back-arrow" />
        </div>
        <h1 className="section-heading">Add Transaction</h1>
      </div>
      <form className="form-container" onSubmit={submitHandler}>
        <div className="gender-container">
          <p className="defaultStylesLabel">Type:</p>
          <div className="buttons-container">
            <button className="gender-button gender-selected-button">
              Income
            </button>
            <button className="gender-button">Expense</button>
            <button className="gender-button">To Self</button>
          </div>
        </div>
        <WrappedInput
          classNames={["input-element"]}
          type="date"
          label="Date of Birth:"
          value="1967-07-15"
        />
        <WrappedInput
          classNames={["input-element"]}
          type="number"
          label="Amount:"
          placeholder="Enter Amount"
        />
        {/* <div className="input-wrapper">
          <p className="defaultStylesLabel">Category:</p>
          <select className="defaultStylesInput input-element">{}</select>
        </div> */}
        <WrappedInput
          classNames={["input-element"]}
          type="textarea"
          label="Notes:"
          placeholder="Sample text"
        />
        <button type="submit" className="action-button">
          Create
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
