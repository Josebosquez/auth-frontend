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
        [event.target.name]: event.target.value, // everytime there is a change in a input box, we are updating the value of that box to have the value of what we are typing. 
      },
      () => {
        // console.log("Inside setState Callback");
        // console.log(this.state.firstName);
        // console.log(event.target.name, ":", event.target.value); // this shows the system works to keep track of how changes are being made and saved by the system.
      }
    );
  };

  handleOnSubmit = (event) => {
    event.preventDefault(); // prevents the web from refreshing when we hit enter or submit and our array disappears if this isnt here.

    console.log(this.state);
  };

  handleOnBlur = (event) => {
    console.log(event.target.name); // renders the state variable above.
    console.log("Handle onBlur Triggered");

    if (this.state[event.target.name].length === 0) {  // bracket notation - if the event.target = one of the variables from state thats for our input boxes. If we add name - one of the variables we used in our rendered html below. If the length of the input box is 0, run the setstate below.
      this.setState({
        [`${event.target.name}Error`]: `${event.target.placeholder} cannot be empty`, // before the : => this must match the variable name that we set in the state above - passwordError in the state cant be set as event.target.name.err because it wont work. if we sent the place holder as the name that is return in the error, it will look prettier than what we actually but as our name value since its camel cased.
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
          <form className="form" onSubmit={this.handleOnSubmit /*we are stating that the form will have the following func on line 20*/}> 
            <div className="form-group-inline">
              <div className="inline-container">
                <label htmlFor="firstName">First Name</label>
                <input // the input syntax has the following values that act like normal html without it being all fancy..  
                  type="text" // accepts text
                  id="firstName" // id name for css
                  value={firstName} // value is what is being stored in the input box
                  placeholder="First Name" // the words that appear in the input box before you start typing.
                  name="firstName" // this is the name that is used for our onBlur function. this will be used to track our input length.
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
