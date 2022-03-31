import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const BudgetPage = () => {
  const setSelectedPage = useOutletContext();
  useEffect(() => {
    setSelectedPage("BUDGET");
  });
  return <div>BudgetPage</div>;
};

export default BudgetPage;
