import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

import logo from "../../assets/knowW_logo.png";

import "./index.css";

const LoginPage = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const login = (arg1, arg2) => {
    console.log(arg1, arg2);
  };
  return (
    <div className="login__container">
      <img src={logo} alt="LOGO" className="login-page-logo" />
      <div className="login-form-container">
        <h2 className="login-page-heading">LOG IN</h2>
        <Input
          label="Email Address:"
          placeholder="Email"
          value={userName}
          setValue={setUserName}
          classNames={["login-input-field"]}
        />
        <Input
          label="Password:"
          placeholder="Password"
          value={password}
          setValue={setPassword}
          classNames={["login-input-field"]}
        />
        <div className="login-link-container">
          <Link to="/login">Forgot Password?</Link>
        </div>
        <Button
          classNames={["login-button"]}
          value={"LOG IN"}
          clickListener={login}
          clickListenerArgs={[userName, password]}
        />
        <p className="login-new-user-line">
          I'm a new user. <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
