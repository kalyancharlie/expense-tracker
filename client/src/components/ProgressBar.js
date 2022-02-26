import "./styles.css";

const ProgressBar = (props) => {
  const { progress } = props;
  return (
    <div className="bar-box">
      <p className="bar-text">Used {progress}% of Budget</p>
      <div className="parent-bar">
        <div className="child-bar" style={{ width: progress }}></div>
      </div>
    </div>
  );
};
export default ProgressBar;
