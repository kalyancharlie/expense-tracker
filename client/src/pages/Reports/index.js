import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const ReportPage = () => {
  const setSelectedPage = useOutletContext();
  useEffect(() => {
    setSelectedPage("REPORTS");
  });
  return <div>ReportPage</div>;
};

export default ReportPage;
