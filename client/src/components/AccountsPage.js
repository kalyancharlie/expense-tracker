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
      <div className="form-container">
        {loggedInUserAccounts.map((obj) => (
          <Account name={obj.account_name} balance={obj.balance} />
        ))}
        <AddNewItem item={"Add Account"} />
      </div>
    </>
  );
};

export default AccountsPage;
