//LAB Exercise: Create a Registration Form

import "./App.css";
import { useEffect, useState } from "react";
import { validateEmail } from "./utils";


/*
const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};
*/

function App() {


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  //const [password, setPassword] = useState({value: "", isTouched: false});
  const [select, setSelect] = useState("select");
  const [comments, setComments] = useState("");

  //To fulfil the validation rules of the form, the body of the getIsFormValid function should be implemented as below:

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      //password.value.length >= 8 &&
      select !== "select"
    );
  };

  // To clear the form state after a successful submission, you should set each piece of state to its initial value:

  const clearForm = () => {
    // Implement this function
  setFirstName("");
  setLastName("");
  setEmail("");
  //setPassword({value: "", isTouched: false,});
  setSelect("select");
  setComments("");
  };

  //To prevent the default behavior of the form when clicking on the submit button, you have to call preventDefault on the event object, right in your submit handler function.

  const handleSubmit = async (e) => {
  e.preventDefault();
    alert("Thank you for your feedback!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>FeedBack Form</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              placeholder="First name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              placeholder="Last name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Subject <sup>*</sup>
            </label>
            <select
                value={select}
                onChange={(e) => setSelect(e.target.value)}>
              <option value="select">Select</option>
              <option value="menu">Menu</option>
              <option value="customer-service">Customer Service</option>
              <option value="delivery" >Delivery</option>
              <option value="order-online" >Order Online</option>
            </select>
          </div>
          <div className="Field">
            <label>Leave your comments:</label>
            <textarea
              className="feedback"
              placeholder="We are loocking forward to get your feedback... "
              value={comments}
              onChange={e => setComments(e.target.value)}
              rows={5}
            />
          </div>
          {/*<div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password.value}
              onChange={(e) => { setPassword({ ...password, value: e.target.value }) }}
               onBlur={() => { setPassword({...password, isTouched: true}) }} // onBlur event
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
            </div>*/}

          <button type="submit" disabled={!getIsFormValid()}>
            Send FeedBack
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;

/* In order to listen for interactions, form inputs have two additional events you can subscribe to: onFocus and onBlur.

In this scenario, you need to use the onBlur event, which is called whenever the input loses focus, so that guarantees the user has interacted with the password input at least once. In that event, you should set the isTouched property to true with the password state setter. */

/* using the SPREAD OPERATOR (...) to create a new object that has the same properties as the existing password object but with the value property updated to e.target.value. This is a common pattern in React when you want to update a specific property of an object in state without mutating the original object. */