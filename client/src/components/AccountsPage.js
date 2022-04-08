import React from "react";
import Account from "./Account";
import { loggedInUserAccounts } from "../utils/sample_data";
import "./styles.css";
import AddNewItem from "./AddNewItem";
import SectionHeading from "./SectionHeading";

const AccountsPage = () => {
  return (
    <>
      <SectionHeading heading="Accounts" />
      <div className="accounts-page-container">
        {loggedInUserAccounts.map((obj) => (
          <Account
            name={obj.account_name}
            balance={obj.balance}
            key={obj.account_name}
          />
        ))}
        <div className="add-account-button-container">
          <AddNewItem item={"Add Account"} />
        </div>
      </div>
    </>
  );
};

export default AccountsPage;
