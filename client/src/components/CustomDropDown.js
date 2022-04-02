import React, { useRef } from "react";
import "./styles.css";

const CustomDropDown = (props) => {
  const { label, value, valueHandler, objectList } = props;
  //   console.log(objectList.flat());
  const newObjectList = objectList.flat();
  const dropDownContainerEl = useRef(null);
  const handleValueChange = (event) => {
    dropDownContainerEl.current.classList.toggle("d-none");
    valueHandler(event.target.value);
  };
  const dropDownHandler = () => {
    dropDownContainerEl.current.classList.toggle("d-none");
  };
  return (
    <div className="wrapped-container">
      <p className="defaultStylesLabel">{`${label}:`}</p>
      <div className="drop-down-heading-container" onClick={dropDownHandler}>
        <p className="drop-down-heading">
          {value === null ? `--${label}--` : value}
        </p>
      </div>
      <div className="drop-down-container d-none" ref={dropDownContainerEl}>
        {newObjectList.map((object) => (
          <div
            key={`${object}${label}`}
            className={`drop-down-option-container ${
              value === object && "selected-option"
            }`}
          >
            <input
              type="radio"
              name="fromAccount"
              className="radio"
              id={`${object}${label}`}
              onChange={handleValueChange}
              value={object}
            />
            <label htmlFor={`${object}${label}`} className={"drop-down-option"}>
              {object}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomDropDown;
