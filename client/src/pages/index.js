import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import "./index.css";
import { BsCashStack, BsFillBarChartFill, BsWallet2 } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";

const icon_size = 25;

const ExpenseTracker = () => {
  const navigator = useNavigate();
  const [selectedPage, setSelectedPage] = useState(null);
  return (
    <div className="browser-container">
      <div className="tablet-container app-container">
        {/* Header Component */}
        <div className="header__container">Header Container</div>

        {/* Reports/Transactions/Settings Component */}
        <div className="outlet__container">
          <Outlet context={setSelectedPage} />
        </div>

        {/* Navbar Component */}
        <div className="navbar__container">
          <div className="footer-box">
            <div
              className={`footer-button ${
                selectedPage === "REPORTS" && "selected"
              }`}
              onClick={() => {
                navigator("/reports");
              }}
            >
              <BsFillBarChartFill size={icon_size} />
              <p className="footer-button-text">Reports</p>
            </div>
            <div
              className={`footer-button ${
                selectedPage === "TRANSACTIONS" && "selected"
              }`}
              onClick={() => {
                navigator("/transactions");
              }}
            >
              <BsCashStack size={icon_size} />
              <p className="footer-button-text">Transactions</p>
            </div>
            <div
              className={`footer-button ${
                selectedPage === "BUDGET" && "selected"
              }`}
              onClick={() => {
                navigator("/budget");
              }}
            >
              <BsWallet2 size={icon_size} />
              <p className="footer-button-text">Budget</p>
            </div>
            <div
              className={`footer-button ${
                selectedPage === "SETTINGS" && "selected"
              }`}
              onClick={() => {
                navigator("/settings");
              }}
            >
              <HiOutlineUser size={icon_size} />
              <p className="footer-button-text">Profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
