import React from "react";
import { BiArrowBack } from "react-icons/bi";

const SectionHeading = (props) => {
  const { heading } = props;
  return (
    <div className="section-heading-container">
      <div className="back-arrow-container">
        <BiArrowBack className="back-arrow" />
      </div>
      <h1 className="section-heading">{heading}</h1>
    </div>
  );
};

export default SectionHeading;
