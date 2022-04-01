import React from "react";
import profileImage from "../assets/default_profile_image.jfif";
import WrappedInput from "./WrappedInput";
import "./styles.css";
import "./index.css";
import { BsFillCameraFill } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { countryList } from "../utils/index";

const ProfileSettings = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("form Submitted");
  };
  return (
    <>
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
        <div className="input-wrapper">
          <p className="defaultStylesLabel">Country:</p>
          <select className="defaultStylesInput input-element">
            {countryList.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
        </div>
        <div className="gender-container">
          <p className="defaultStylesLabel">Gender:</p>
          <div className="buttons-container">
            <button className="gender-button gender-selected-button">
              Male
            </button>
            <button className="gender-button">Female</button>
            <button className="gender-button">Others</button>
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
