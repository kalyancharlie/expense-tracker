import React from "react";
import profileImage from "../../assets/default_profile_image.jfif";
import { loggedInUser } from "../../utils/sample_data";
import "./index.css";
import { MdSettings } from "react-icons/md";
import { BsFillBriefcaseFill, BsFillTagsFill } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";

const SettingsPage = () => {
  return (
    <div>
      <div className="settings-page-header">
        <div className="ring-around-image">
          <img
            src={profileImage}
            alt="profile_image"
            className="profile-image"
          />
        </div>
        <div className="details-container">
          <h2 className="settings-page-text text-bold">{loggedInUser.name}</h2>
          <p className="settings-page-text">{`+91-${loggedInUser.mobile}`}</p>
          <p className="settings-page-text">{loggedInUser.email}</p>
        </div>
      </div>
      <div className="settings-container">
        <div className="setting-container">
          <MdSettings className="setting-icon" />
          <p className="setting-text">Profile Settings</p>
        </div>
        <div className="setting-container">
          <BsFillBriefcaseFill className="setting-icon-case" />
          <p className="setting-text">Accounts</p>
        </div>
        <div className="setting-container">
          <BsFillTagsFill className="setting-icon-case" />
          <p className="setting-text">Categories</p>
        </div>
        <div className="setting-container">
          <HiOutlineMailOpen className="setting-icon-case" />
          <p className="setting-text">Mailing Frequency</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
