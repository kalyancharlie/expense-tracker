import React, { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";
import "./styles.css";
import { loggedInUser } from "../utils/sample_data";
import { MdDeleteOutline } from "react-icons/md";
import AddNewItem from "./AddNewItem";

const CategoriesPage = () => {
  const [selectedPage, setSelectedpage] = useState("Income");
  const [incomeCategory, setIncomeCategory] = useState(null);
  const [incomeCategoryList, setIncomeCategoryList] = useState(
    loggedInUser.categories.income
  );
  const [expenseCategoryList, setExpenseCategoryList] = useState(
    loggedInUser.categories.expense.map((obj) => obj.category)
  );
  const [expenseCategory, setExpenseCategory] = useState(
    expenseCategoryList[0]
  );
  const [subCategory, setSubCategory] = useState(null);
  const [subCategoryList, setSubCategoryList] = useState(null);

  useEffect(() => {
    const filteredObject = loggedInUser.categories.expense.filter(
      (obj) => obj.category === expenseCategory
    );
    setSubCategoryList(filteredObject[0].sub_categories);
  }, [expenseCategory]);

  const handlePageChange = (event) => {
    setSelectedpage(event.target.textContent);
  };
  const handleExCategoryChange = (event) => {
    console.log(event.target.textContent);
    setExpenseCategory(event.target.textContent);
  };
  const handleCategoryChange = (event) => {
    const index = incomeCategoryList.indexOf(incomeCategory);
    incomeCategoryList.splice(index, 1, event.target.value);
    setIncomeCategoryList([...incomeCategoryList]);
    setIncomeCategory(event.target.value);
  };

  return (
    <div>
      <SectionHeading heading="Categories" />
      <div className="categories-nav-bar">
        <h2
          onClick={handlePageChange}
          className={`category-heading border-right ${
            selectedPage === "Income" && "background-white"
          }`}
        >
          Income
        </h2>
        <h2
          onClick={handlePageChange}
          className={`category-heading  ${
            selectedPage === "Expense" && "background-white"
          }`}
        >
          Expense
        </h2>
      </div>
      {/* Income Tab */}
      <div className="categories-container">
        {selectedPage === "Income" &&
          incomeCategoryList.map((val) => (
            <div
              className="income-category-container"
              key={`${val} ${selectedPage}`}
            >
              {incomeCategory === val ? (
                <input
                  className="category-input-ele"
                  autoFocus
                  value={val}
                  onChange={handleCategoryChange}
                  onClick={() => setIncomeCategory(null)}
                />
              ) : (
                <p
                  className="category-input-ele"
                  onClick={() => setIncomeCategory(val)}
                >
                  {val}
                </p>
              )}
              <MdDeleteOutline
                className="delete-icon"
                onClick={() =>
                  setIncomeCategoryList(
                    incomeCategoryList.filter((ele) => ele !== val)
                  )
                }
              />
            </div>
          ))}
      </div>
      {/* Expense Tab */}
      <div>
        {selectedPage === "Expense" && (
          <div className="expense-page-conatainer">
            <div>
              {expenseCategoryList.map((val) => (
                <div
                  key={`${val} ${selectedPage}`}
                  className={`expense-category-container ${
                    expenseCategory === val && "expense-selected-category"
                  }`}
                >
                  <p onClick={handleExCategoryChange}>{val}</p>
                </div>
              ))}
            </div>
            <div className="sub-categories-container">
              <div className="expense-category-heading">
                <p>{expenseCategory}</p>
                <MdDeleteOutline />
              </div>
              {subCategoryList.map((val) => (
                <div
                  className="income-category-container"
                  key={`${val} ${selectedPage}`}
                >
                  <p>{val}</p>
                  <MdDeleteOutline />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <button
        className="action-button"
        onClick={() => {
          console.log(incomeCategoryList);
        }}
      >
        Update
      </button>
    </div>
  );
};

export default CategoriesPage;
