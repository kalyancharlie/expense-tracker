import { useState } from "react";
import knowwLogo from "../../assets/knowW_logo.png";
import ProgressBar from "../../components/ProgressBar";
import "./index.css";
import { BiCaretDown, BiSearch } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { loggedInUserTransactions } from "../../utils/sample_data";

const TransactionsPage = () => {
  const [showBox, setShowBox] = useState(false);
  const [period, setPeriod] = useState("Last 24 hours");
  return (
    <div>
      <div className="transactions-page-header-box">
        <div className="repeated-block-header">
          <div className="image-bar-container">
            <img src={knowwLogo} alt="Knoww Logo" className="logo-image-main" />
            <div className="progress-bar-container">
              <ProgressBar progress="30%" />
            </div>
          </div>
          <div className="period-box">
            <p className="color-light period-heading">Selected Period:</p>
            <h1 className="period-text">{period}</h1>
          </div>
        </div>
        <div className={`hidden-box ${!showBox && "d-none"}`}>
          <div className="time-range-box">
            <p>Time range:</p>
            <div className="color-light time-range-values">
              {[
                "Last 12 hours",
                "Last 24 hours",
                "Last 3 days",
                "Last 7 days",
                "Last 30 days",
                "Custom",
              ].map((ele) => (
                <div key={ele} className="time-range-value">
                  <input
                    type="radio"
                    id={ele}
                    name="period"
                    className="radio-in-period"
                    onChange={() => setPeriod(ele)}
                  />
                  <label className="time-text" htmlFor={ele}>
                    {ele}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="start-end-box color-light">
            <div className="time-box">
              <p>Start Time:</p>
              <input type="date" className="date-input" />
            </div>
            <div className="time-box">
              <p>End Time:</p>
              <input type="date" className="date-input" />
            </div>
          </div>
        </div>
        <div
          className={`caret-container ${showBox && "rotate"}`}
          onClick={() => setShowBox(!showBox)}
        >
          <BiCaretDown className="caret" />
        </div>
      </div>
      <div className="transactions-page-body">
        <div className="search-add-transaction">
          <div className="search-bar">
            <BiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search"
              className="input-element defaultStylesInput"
            />
          </div>
          <button className="add-transaction">
            <BsPlus className="add-icon" />
            Add Transaction
          </button>
        </div>
        <div className="filter-box">Filteres to be added </div>
        <div className="table-box">
          <table>
            <thead>
              <tr>
                {Object.keys(loggedInUserTransactions[0]).map((item) => (
                  <th key={item} className="header-cell">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loggedInUserTransactions.map((item) => (
                <tr key={item.transaction_id}>
                  {Object.values(item).map((ele, index) => {
                    if (ele instanceof Date) {
                      ele = ele.toLocaleDateString("en-US");
                    }
                    return (
                      <td key={`${ele}${index}`} className="body-cell">
                        {ele}
                      </td>
                    );
                  })}
                  {/* {console.log(Object.values(item))} */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
