import React from "react";

const Button = React.memo(
  ({
    isDisabled = false,
    type = "submit",
    classNames = [],
    value,
    clickListener = (...args) => {
      console.log("Button Clicked with args:", args);
    },
    clickListenerArgs = [],
  }) => {
    return (
      <button
        className={"defaultStylesButton " + classNames.join(" ")}
        disabled={isDisabled}
        type={type && type}
        onClick={(e) => {
          e.preventDefault();
          clickListener.apply(null, clickListenerArgs)
        }}
      >
        {value || "Button"}
      </button>
    );
  }
);

export default Button;
