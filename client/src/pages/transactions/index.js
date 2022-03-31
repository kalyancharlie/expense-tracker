import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const TransactionsPage = () => {
  const setSelectedPage = useOutletContext();
  useEffect(() => {
    setSelectedPage("TRANSACTIONS");
  });
  return <div>TransactionsPage</div>;
};

export default TransactionsPage;
