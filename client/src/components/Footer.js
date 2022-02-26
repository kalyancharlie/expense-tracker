import "./styles.css";
import { BsCashStack, BsFillBarChartFill, BsWallet2 } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { useContext } from "react";
import { ActionContext } from "./Transactions";

const Footer = () => {
  const icon_size = 25;
  const { selectedPage, setSelectedPage } = useContext(ActionContext);
  const clickedReports = () => {
    setSelectedPage("REPORTS");
  };
  const clickedTransactions = () => {
    setSelectedPage("TRANSACTIONS");
  };
  const clickedProfile = () => {
    setSelectedPage("PROFILE");
  };
  const clickedBudget = () => {
    setSelectedPage("BUDGET");
  };
  return (
    <div className="footer-box">
      <div
        className={`footer-button ${selectedPage === "REPORTS" && "selected"}`}
        onClick={clickedReports}
      >
        <BsFillBarChartFill size={icon_size} />
        <p className="footer-button-text">Reports</p>
      </div>
      <div
        className={`footer-button ${
          selectedPage === "TRANSACTIONS" && "selected"
        }`}
        onClick={clickedTransactions}
      >
        <BsCashStack size={icon_size} />
        <p className="footer-button-text">Transactions</p>
      </div>
      <div
        className={`footer-button ${selectedPage === "BUDGET" && "selected"}`}
        onClick={clickedBudget}
      >
        <BsWallet2 size={icon_size} />
        <p className="footer-button-text">Budget</p>
      </div>
      <div
        className={`footer-button ${selectedPage === "PROFILE" && "selected"}`}
        onClick={clickedProfile}
      >
        <HiOutlineUser size={icon_size} />
        <p className="footer-button-text">Profile</p>
      </div>
    </div>
  );
};
export default Footer;
