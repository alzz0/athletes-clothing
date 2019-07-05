import React, { Component } from "react";
import FormInput from "../../components/formInput/FormInput";
import CustomButton from "../customButton/CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleSubmit = async e => {
    const { displayName, email, password, confirmPassword } = this.state;
    e.preventDefault();
      if(password!==confirmPassword){
          alert("passwords do not match")
          return
      }


    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

handleChange=e=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="signup">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            value={displayName}
            name="displayName"
            label="Display Name"
            onChange={this.handleChange}
            required
          />
          <FormInput
            value={email}
            type="email"
            name="email"
            label="Email"
            onChange={this.handleChange}
            required
          />
          <FormInput
            value={password}
            type="password"
            name="password"
            label="Password"
            onChange={this.handleChange}
            required
          />
          <FormInput
            value={confirmPassword}
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            onChange={this.handleChange}
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
