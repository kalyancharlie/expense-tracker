import React from "react";
import Input from "./Input";

const WrappedInput = (props) => {
  return (
    <div className="input-wrapper">
      <Input {...props} />
    </div>
  );
};
export default WrappedInput;
