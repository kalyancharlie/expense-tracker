import React from "react";
import Account from "./Account";
import { BiArrowBack } from "react-icons/bi";
import { loggedInUserAccounts } from "../utils/sample_data";
import { BsPlusLg } from "react-icons/bs";
import "./styles.css";

const AccountsPage = () => {
  return (
    <>
      <div className="section-heading-container">
        <div className="back-arrow-container">
          <BiArrowBack className="back-arrow" />
        </div>
        <h1 className="section-heading">Accounts</h1>
      </div>
      <div className="form-container">
        {loggedInUserAccounts.map((obj) => (
          <Account name={obj.account_name} balance={obj.balance} />
        ))}
        <div className="add-newItem-container">
          <div className="add-item-icon">
            <BsPlusLg className="plus-sign" />
          </div>
          <div className="add-newItem-heading-box">
            <h2 className="add-newItem-heading">Add Account</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountsPage;
