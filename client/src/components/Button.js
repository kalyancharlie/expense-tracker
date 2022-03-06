import React from "react";

const defaultStyles = {
  display: "inline-block",
  boxSizing: "border-box",
  padding: "10px 18px",
  width: "auto",
  outline: "none",
  borderRadius: "5px",
  border: "1px solid #d2cdcd",
  cursor: 'pointer'
};

const Button = React.memo(
  ({
    isDisabled = false,
    type = "submit",
    style,
    classNames = [],
    value,
    clickListener=() => {console.log('Button Clicked')},
    clickListenerArgs=[]
  }) => {
    return (
      <button
        className={classNames.join(" ")}
        style={Object.assign(defaultStyles, style) || defaultStyles}
        disabled={isDisabled}
        type={type && type}
        onClick={(e) => {
          e.preventDefault();
          clickListener(...clickListenerArgs)
        }}
      >{value || 'Button'}</button>
    );
  }
);

export default Button;
