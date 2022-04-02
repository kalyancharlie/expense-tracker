import React, { useEffect, useState } from "react";
import profileImage from "../assets/default_profile_image.jfif";
import "./styles.css";
import "./index.css";
import { BsFillCameraFill } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { countryList } from "../utils/index";

import WrappedInput from "./WrappedInput";
import CustomRadio, { RadioButton } from "./CustomRadio";
import CustomDropDown from "./CustomDropDown";

const ProfileSettings = () => {
  const [genderOpt, setGenderOpt] = useState(null);
  const [genderValue, setGenderValue] = useState(null);
  const [countryValue, setCountryValue] = useState(null);
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log("form Submitted");
  };
  useEffect(() => {
    console.log("Gender OPtion Changed ", genderOpt);
  }, [genderOpt]);

  // Handling Gender Change
  const handleGenderChange = (event) => {
    setGenderValue(event.target.value);
  };

  return (
    <>
      {console.log(genderValue)}
      {console.log(countryValue)}
      <div className="section-heading-container">
        <div className="back-arrow-container">
          <BiArrowBack className="back-arrow" />
        </div>
        <h1 className="section-heading">Profile Settings</h1>
      </div>
      <form className="form-container" onSubmit={submitHandler}>
        <div className="ring-around-image">
          <img
            src={profileImage}
            alt="profile_image"
            className="profile-image"
          />
          <div className="camera-container">
            <BsFillCameraFill />
          </div>
        </div>
        <br />
        <WrappedInput
          classNames={["input-element"]}
          label="Name:"
          placeholder="Enter Name"
        />
        <WrappedInput
          classNames={["input-element"]}
          label="Password:"
          type="password"
          placeholder="Enter Password"
        />
        <WrappedInput
          classNames={["input-element"]}
          label="Confirm Password:"
          type="password"
          placeholder="Confirm Password"
        />
        <WrappedInput
          classNames={["input-element"]}
          label="Email:"
          placeholder="Enter Email"
        />
        <WrappedInput
          classNames={["input-element"]}
          type="number"
          label="Mobile:"
          placeholder="Enter Mobile Number"
        />
        <WrappedInput
          classNames={["input-element"]}
          type="date"
          label="Date of Birth:"
          value="1967-07-15"
        />

        <CustomDropDown
          label={"Country"}
          value={countryValue}
          valueHandler={setCountryValue}
          objectList={countryList}
        />

        {/* Gender Implementation menthod 2 */}
        <div className="wrapped-container">
          <p className="defaultStylesLabel">Gender:</p>
          <div className="buttons-container">
            {["Male", "Female", "Others"].map((gender) => (
              <div key={gender}>
                <input
                  type="radio"
                  name="gender"
                  className="radio"
                  id={gender}
                  value={gender}
                  onChange={handleGenderChange}
                />
                <label
                  htmlFor={gender}
                  className={`gender-button ${
                    genderValue === gender && "gender-selected-button"
                  }`}
                >
                  {gender}
                </label>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="action-button">
          Update
        </button>
      </form>
    </>
  );
};

export default ProfileSettings;
