import React from "react";

const Button = React.memo(
  ({
    isDisabled = false,
    type = "submit",
    classNames = [],
    value,
    clickListener = () => {
      console.log("Button Clicked");
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
          clickListener(...clickListenerArgs);
        }}
      >
        {value || "Button"}
      </button>
    );
  }
);

export default Button;
