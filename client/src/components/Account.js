import React from "react";
import "./styles.css";
import Cash from "../assets/Cash.png";
import defaultAccount from "../assets/defaultAccount.png";
import { FaRupeeSign } from "react-icons/fa";

const Account = (props) => {
  const { name, balance } = props;
  return (
    <div className="account-container">
      <img
        src={name === "Cash" ? Cash : defaultAccount}
        alt={Cash}
        className="account-image"
      />
      <div className="account-details">
        <div className="account-heading-container">
          <h2 className="account-heading">{name}</h2>
          {name === "Cash" && <p className="text-Italic">default</p>}
        </div>
        <div className="account-balance-container">
          <p className="account-balance-heading">Available Balance</p>
          <p className="account-balance">
            <FaRupeeSign />
            {balance}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
