import React, { useState } from "react";
import WrappedInput from "./WrappedInput";
import "./styles.css";
import "./index.css";
import { loggedInUser, loggedInUserAccounts } from "../utils/sample_data";
import CustomDropDown from "./CustomDropDown";
import SectionHeading from "./SectionHeading";

const AddTransaction = () => {
  const [transactionType, setTransactionType] = useState("Income");
  const [fromAccount, setFromAccount] = useState(null);
  const [toAccount, setToAccount] = useState(null);
  const [incomeCategory, setIncomeCategory] = useState(null);
  const [expenseCategory, setExpenseCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);

  const handleTransactionTypeChange = (event) => {
    setTransactionType(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("form Submitted");
  };
  return (
    <>
      <SectionHeading heading="Add Transaction" />
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
              label="Category"
              value={incomeCategory}
              valueHandler={setIncomeCategory}
              objectList={loggedInUser.categories.income}
            />
          </>
        )}
        {transactionType === "Expense" && (
          <>
            <CustomDropDown
              label="To Account"
              value={toAccount}
              valueHandler={setToAccount}
              objectList={loggedInUserAccounts.map((obj) =>
                obj.account_name.toLocaleUpperCase()
              )}
            />
            <CustomDropDown
              label="Category"
              value={expenseCategory}
              valueHandler={setExpenseCategory}
              objectList={loggedInUser.categories.expense.map(
                (obj) => obj.category
              )}
            />
            {/* {
              (sub_categories_list = loggedInUser.categories.expense.filter(
                (obj) => obj.category === expenseCategory
              ))
            } */}
            {expenseCategory !== null && (
              <CustomDropDown
                label="Sub-Category"
                value={subCategory}
                valueHandler={setSubCategory}
                objectList={loggedInUser.categories.expense
                  .filter((obj) => obj.category === expenseCategory)
                  .map((obj) => obj.sub_categories)}
              />
            )}
          </>
        )}
        {/* {console.log(sub_categories_list.sub_categories)} */}
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
