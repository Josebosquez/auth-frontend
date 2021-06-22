import React, { Component } from "react";
import "./Signup.css";

export class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",  // the variables above are the blank state that hold the input box value
    firstNameError: "",   // the variables below are the blank errors that appear when the if statements are met.
    lastNameError: "",
    usernameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  };

  handleOnChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        // console.log("Inside setState Callback");
        // console.log(this.state.firstName);
        // console.log(event.target.name, ":", event.target.value);
      }
    );
  };

  handleOnSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
  };

  handleOnBlur = (event) => {
    console.log(event.target.name);
    console.log("Handle onBlur Triggered");

    if (this.state[event.target.name].length === 0) {
      this.setState({
        [`${event.target.name}Error`]: `${event.target.placeholder} cannot be empty`,
      });
    }
  };

  render() {
    const {
      firstName, // brings in the variables from the state to use in our html. these will be assigned as the values to our input box. Err variables will appear based on onblur func.
      lastName,
      username,
      email,
      password,
      confirmPassword,
      firstNameError,
      lastNameError,
      usernameError,
      emailError,
      passwordError,
      confirmPasswordError,
    } = this.state;

    return (
      <div className="container">
        <div className="form-text">Sign up</div>

        <div className="form-div">
          <form className="form" onSubmit={this.handleOnSubmit}>
            <div className="form-group-inline">
              <div className="inline-container">
                <label htmlFor="firstName">First Name</label>
                <input // the input syntax has the following values that act like normal html without it being all fancy..  
                  type="text" // accepts text
                  id="firstName" // id name for css
                  value={firstName} // value is what is being stored in the input box
                  placeholder="First Name" // the words that appear in the input box before you start typing.
                  name="firstName" // this is the name.
                  onChange={this.handleOnChange}  // handles the onchange function on line 20. 
                  autoFocus // when page renders, user will be able to automatically type into the box that this autofocus is attached to.
                  onBlur={this.handleOnBlur} // handles the on blur function on line 39. what it does is it acts like our err msg checker. if there are 0 characters in length of the input, then it will make the error msg div on line 85 appear in red. 
                />
                <div className="errorMessage">
                  {firstNameError && firstNameError /* this will render if the conditions in the onblur function are met. */ } 
                </div>
              </div>

              <div className="inline-container">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  placeholder="Last Name"
                  name="lastName"
                  onChange={this.handleOnChange}
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage">
                  {lastNameError && lastNameError}
                </div>
              </div>
            </div>

            <div className="form-group-block">
              <div className="block-container">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  placeholder="Email"
                  onChange={this.handleOnChange}
                  name="email"
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage">{emailError && emailError}</div>
              </div>
            </div>

            <div className="form-group-block">
              <div className="block-container">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  placeholder="Username"
                  onChange={this.handleOnChange}
                  name="username"
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage">
                  {usernameError && usernameError}
                </div>
              </div>
            </div>

            <div className="form-group-block">
              <div className="block-container">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  id="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.handleOnChange}
                  name="password"
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage">
                  {passwordError && passwordError}
                </div>
              </div>
            </div>

            <div className="form-group-block">
              <div className="block-container">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="text"
                  id="confirmPassword"
                  value={confirmPassword}
                  placeholder="Confirm Password"
                  onChange={this.handleOnChange}
                  name="confirmPassword"
                  onBlur={this.handleOnBlur}
                />
                <div className="errorMessage">
                  {confirmPasswordError && confirmPasswordError}
                </div>
              </div>
            </div>

            <div className="button-container" /* this is the submit button, will work on it tomorrow.*/>
              <button>Submit</button>  
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
