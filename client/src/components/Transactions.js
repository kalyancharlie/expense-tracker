import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from "react";

export const ActionContext = React.createContext([]);

const Transactions = () => {
  const [selectedPage, setSelectedPage] = useState("REPORTS");
  return (
    <ActionContext.Provider
      value={{
        selectedPage,
        setSelectedPage,
      }}
    >
      <div className="bg-box">
        <Header />
        <Footer />
        {console.log(selectedPage)}
      </div>
    </ActionContext.Provider>
  );
};
export default Transactions;
