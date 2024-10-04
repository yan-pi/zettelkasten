 #solution 
 ____
## My solution

``` JSX
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};


function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false
  });

  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
             value={password.value}
             type="password"
             onChange={(e) => {
               setPassword({ ...password, value: e.target.value });
             }}
             onBlur={() => {
               setPassword({ ...password, isTouched: true });
             }}
             placeholder="Password"
           />
           {password.isTouched && password.value.length < 8 ? (
             <PasswordErrorMessage />
           ) : null}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
````


#### **Step 1**
___
The first step involves converting all form elements into controlled components. Since the pieces of local state have been already defined at the top of the component, you just have to assign each state piece to the value prop from each input element. To be able to account for state updates, each input should also define the `onChange` prop and call the state setter with the value property from the event target as parameter.

The password input is a special case that has an object as state instead of a string. As a result, the state setter should spread the previous values so they don’t get overridden. Finally, to make sure the password characters are obscured, you need to use the type “password” for the input.

``` jsx
<div className="Field"> 

 <label> 
   First name <sup>*</sup> 
 </label> 

 <input 
   value={firstName} 
   onChange={(e) => { 
     setFirstName(e.target.value); 
   }} 
   placeholder="First name" 
 /> 
</div>

<div className="Field"> 
 <label>Last name</label> 
 <input 
   value={lastName} 

   onChange={(e) => { 
     setLastName(e.target.value); 
   }} 
   placeholder="Last name" 
 /> 
</div> 

<div className="Field"> 
 <label> 
   Email address <sup>*</sup> 
 </label> 

 <input 
   value={email} 
   onChange={(e) => { 
     setEmail(e.target.value); 
   }} 
   placeholder="Email address" 
 /> 
</div> 

<div className="Field"> 
 <label> 
   Password <sup>*</sup> 
 </label> 
 <input 
   value={password.value} 
   type="password" 
   onChange={(e) => { 
     setPassword({ ...password, value: e.target.value }); 
   }} 
   placeholder="Password" 
 /> 
</div> 
<div className="Field"> 
 <label> 
   Role <sup>*</sup> 
 </label> 
 <select value={role} onChange={(e) => setRole(e.target.value)}> 
   <option value="role">Role</option> 
   <option value="individual">Individual</option> 
   <option value="business">Business</option> 
 </select> 
</div>
```

### **Step 2**
___
The  `isTouched` property on the password state was defined to determine when the input was touched at least once. In order to listen for interactions, form inputs have two additional events you can subscribe to: `onFocus` and `onBlur`. 

In this scenario, you need to use the `onBlur` event, which is called whenever the input loses focus, so that guarantees the user has interacted with the password input at least once. In that event, you should set the `isTouched` property to true with the password state setter.

Then, the condition to display the error message relies on that value being true and a check on the password length to see if it’s less than 8 characters long. If the condition is true, the component `PasswordErrorMessage` should be rendered. The final code should be as follows:

```jsx
<div className="Field"> 

 <label> 
   Password <sup>*</sup> 
 </label> 

 <input 
   value={password.value} 
   type="password" 
   onChange={(e) => { 
     setPassword({ ...password, value: e.target.value }); 
   }} 

   onBlur={() => { 
     setPassword({ ...password, isTouched: true }); 
   }} 
   placeholder="Password" 
 /> 

 {password.isTouched && password.value.length < 8 ? ( 
   <PasswordErrorMessage /> 
 ) : null} 

</div>
```

If implemented correctly, the form should display an error message below the password field:

![Screenshot from sign up interface](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/1w8QWMf-SleByQjbKHbGqg_fcafc9cb9a3f4a558da4d59fea3640a1_image2.png?expiry=1698364800000&hmac=iPzQXGQ9CW3V6jwp4xBDBZno6M1JeqnHn5z0jN0mBu4)

### **Step 3**
___
To prevent the default behavior of the form when clicking on the submit button, you have to call `preventDefault` on the event object, right in your submit handler function.

```jsx
const handleSubmit = (e) => { 
 e.preventDefault(); 
 alert("Account created!"); 
 clearForm(); 
};
```

### **Step 4**
___
To fulfil the validation rules of the form, the body of the `getIsFormValid` function should be implemented as below:

``` jsx
const getIsFormValid = () => { 

 return ( 
   firstName && 
   validateEmail(email) && 
   password.value.length >= 8 && 
   role !== "role" 
 ); 
};
```

Below is an example of a valid form:

![Sign up page interface](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/5n674_4-TX6JcW2mYCzBFg_f44ca5953aca4a9c95d706d1dc70bfa1_image1.png?expiry=1698364800000&hmac=aZ7bOdtYiPzyfcBfKrP3yl8kZvCh4_Mof_-fpKH4XUY)

### **Step 5**
___
Finally, to clear the form state after a successful submission, you should set each piece of state to its initial value:

``` jsx
const clearForm = () => { 
 setFirstName(""); 
 setLastName(""); 
 setEmail(""); 
 setPassword({ 
   value: "", 
   isTouched: false, 
 }); 
 setRole("role"); 
};
```