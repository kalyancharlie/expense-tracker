import "./styles.css";
import Logo from "../assets/KnowW Logo.png";
import ProgressBar from "./ProgressBar";

const Header = () => {
  const selectedPeriod = "Feb-22";
  const progressPercent = 45;
  return (
    <div className="header-box">
      <div className="header-sub-box">
        <img src={Logo} alt="main-logo" className="logo-image" />
        <div className="period-box">
          <p className="selected-period">Selected Period:</p>
          <h1 className="period">{selectedPeriod}</h1>
        </div>
      </div>
      <div className="header-sub-box">
        <ProgressBar progress={progressPercent} />
      </div>
    </div>
  );
};
export default Header;
