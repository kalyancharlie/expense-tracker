import { Outlet } from "react-router-dom";

import { BsCashStack, BsFillBarChartFill, BsWallet2 } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";

import "./index.css";
import CustomLink from "../components/CustomLink";

const ExpenseTracker = () => {
  return (
    <div className="browser-container">
      <div className="tablet-container app-container">
        {/* Header Component */}
        <div className="header__container">Header Container</div>

        {/* Reports/Transactions/Settings Component */}
        <div className="outlet__container">
          <Outlet />
        </div>

        {/* Navbar Component */}
        <div className="navbar__container">
          <div className="footer-box">
            {/* Reports Link */}
            <CustomLink to="/reports">
              <BsFillBarChartFill className="navbar__icon" />
              <p className="footer-button-text">Reports</p>
            </CustomLink>
            {/* Transactions Link */}
            <CustomLink to="/transactions">
              <BsCashStack className="navbar__icon" />
              <p className="footer-button-text">Transactions</p>
            </CustomLink>
            {/* Budget Link */}
            <CustomLink to="/budget">
              <BsWallet2 className="navbar__icon" />
              <p className="footer-button-text">Budget</p>
            </CustomLink>
            {/* Settings Link */}
            <CustomLink to="/settings">
              <HiOutlineUser className="navbar__icon" />
              <p className="footer-button-text">Profile</p>
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
