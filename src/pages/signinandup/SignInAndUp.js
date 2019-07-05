import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import Signup from "../../components/sign-up/SignUp";
import "./signInAndUp.scss";

const SignInAndUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <Signup />
  </div>
);

export default SignInAndUp;
