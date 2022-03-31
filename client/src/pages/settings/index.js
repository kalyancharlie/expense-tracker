import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const SettingsPage = () => {
  const setSelectedPage = useOutletContext();
  useEffect(() => {
    setSelectedPage("SETTINGS");
  });
  return <div>SettingsPage</div>;
};

export default SettingsPage;
