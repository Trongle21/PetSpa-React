// eslint-disable-next-line no-unused-vars
import React from "react";
import Input from "../Input";
import Button from "../Button";

const MainAccountSignIn = () => {
  return (
    <>
      <div className="main--account__form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <Input name="email" type="text" placeholder="Enter your email" />
        <span className="form-message"></span>
      </div>
      <div className="main--account__form-group">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <span className="form-message"></span>
      </div>
      <div className="main--account__check">
        <div className="main--account__check--input">
          <Input id="checkRemember" type="checkbox" />
          <label htmlFor="checkRemember">Remember me</label>
        </div>
        <a href="">Forgot password</a>
      </div>
      <div className="main--account__submit">
        <a href="">
          <Button
            type="submit"
            id="saveData"
            name="sign_up"
            value="sign up"
            className="btn btn--signin"
            content="Sign In"
          />
        </a>
      </div>
    </>
  );
};

export default MainAccountSignIn;
