import React from "react";

const defaultStyles = {
  display: "inline-block",
  boxSizing: "border-box",
  padding: "10px 18px",
  width: "100%",
  outline: "none",
  borderRadius: "5px",
  border: "1px solid #d2cdcd",
};

const Input = React.memo(
  ({
    isDisabled = false,
    type = "text",
    style,
    placeholder,
    classNames = [],
    value,
    setValue,
  }) => {
    return (
      <input
        className={classNames.join(" ")}
        style={Object.assign(defaultStyles, style) || defaultStyles}
        disabled={isDisabled}
        type={type && type}
        placeholder={placeholder || "Input Value Placeholder"}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    );
  }
);

export default Input;
