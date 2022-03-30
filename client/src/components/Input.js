import React from "react";
import "./index.css";

const Input = React.memo(
  ({
    label,
    isDisabled = false,
    type = "text",
    placeholder,
    classNames = [],
    value,
    setValue,
  }) => {
    return (
      <>
        <label className="defaultStylesLabel">{label}</label>
        <input
          className={"defaultStylesInput " + classNames.join(" ")}
          disabled={isDisabled}
          type={type && type}
          placeholder={placeholder || "Input Value Placeholder"}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </>
    );
  }
);

export default Input;
