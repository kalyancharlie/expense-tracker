import React, { useState } from "react";
import WrappedInput from "./WrappedInput";
import "./styles.css";
import "./index.css";
import { BiArrowBack } from "react-icons/bi";
import { loggedInUser, loggedInUserAccounts } from "../utils/sample_data";
import CustomDropDown from "./CustomDropDown";

const AddTransaction = () => {
  const [transactionType, setTransactionType] = useState(null);
  const [fromAccount, setFromAccount] = useState(null);
  const [toAccount, setToAccount] = useState(null);

  const handleTransactionTypeChange = (event) => {
    setTransactionType(event.target.value);
  };

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
        {/* Type of Transaction Method 2 */}
        <div className="wrapped-container">
          <p className="defaultStylesLabel">Type:</p>
          <div className="buttons-container">
            {["Income", "Expense", "To Self"].map((type) => (
              <div key={type}>
                <input
                  type="radio"
                  name="typeOfTransaction"
                  className="radio"
                  id={type}
                  value={type}
                  onChange={handleTransactionTypeChange}
                />
                <label
                  htmlFor={type}
                  className={`gender-button ${
                    transactionType === type && "gender-selected-button"
                  }`}
                >
                  {type}
                </label>
              </div>
            ))}
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
        {transactionType === "Income" && (
          <CustomDropDown
            label="From Account"
            value={fromAccount}
            valueHandler={setFromAccount}
            objectList={loggedInUserAccounts.map((obj) =>
              obj.account_name.toLocaleUpperCase()
            )}
          />
        )}
        {transactionType === "Expense" && (
          <CustomDropDown
            label="To Account"
            value={toAccount}
            valueHandler={setToAccount}
            objectList={loggedInUserAccounts.map((obj) =>
              obj.account_name.toLocaleUpperCase()
            )}
          />
        )}
        {transactionType === "To Self" && (
          <>
            <CustomDropDown
              label="From Account"
              value={fromAccount}
              valueHandler={setFromAccount}
              objectList={loggedInUserAccounts.map((obj) =>
                obj.account_name.toLocaleUpperCase()
              )}
            />
            <CustomDropDown
              label="To Account"
              value={toAccount}
              valueHandler={setToAccount}
              objectList={loggedInUserAccounts.map((obj) =>
                obj.account_name.toLocaleUpperCase()
              )}
            />
          </>
        )}
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
