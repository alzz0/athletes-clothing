import React, { Component } from "react";
import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./signIn.scss";
class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            id="email"
            label="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />
          <label>Email</label>
          <FormInput
            type="password"
            id="password"
            label="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />{" "}
          <div class="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton
              type="submit"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
