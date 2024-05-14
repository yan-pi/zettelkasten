
`useState` is a hook that enables functional components to manage their own state. Prior to the introduction of hooks, state management was primarily done using class components. However, with the `useState` hook, functional components can now also have their own state.

Here's a breakdown of how `useState` works:

1. **Import the Hook:**
   To use `useState`, you need to import it from the 'react' module:
   ```jsx
   import React, { useState } from 'react';
   ```


2. **Initializing State:**
   The `useState` function takes an initial value as its argument and returns an array with two elements:
   - The current state value.
   - A function to update the state value.


3. **Declaring State:**
   You can destructure the returned array into two variables (e.g., `count` and `setCount`) for better readability, the frist state is a variable `(count)` the second always will be the function that update the variable `(setCount)`:
   
   ```jsx
   const [count, setCount] ...
   ```
_Obs: its a best practice use `set` to declare the function that update the variable_


4. **Using State:**
   Now you can Define the `initialValue` or `defaultValue` that it will be used by the `count` as a value to be incremented by the `setCount`
   
   ```jsx
   const [count, setCount] = useState(initialValue);
   ```
_Obs.2: if you doesnt define the `defaultValue` the state will be `undefined`.


5. **Updating State:**
   To update the state value, you can call the function returned by `useState` (e.g., `setCount`) and pass in the new value. This triggers a re-render of the component with the updated state:
   
   ```jsx
   const handleIncrement = () => {
	setCount(count + 1);
   };
   
  const handleDecrement = () => {
	setCount(count - 1)
  }
   ```


6. **Using State in JSX:**
   You can use the `count` variable in your JSX to display the current state value:
   
   ```jsx
   return (
     <div>
	   <button onClick={handleDecrement}>Decrement</button>
       <p>Count: {count}</p>
       <button onClick={handleIncrement}>Increment</button>
     </div>
   );
   ```

`useState` and other React hooks simplify state management in functional components and promote a more concise and readable code structure.

React docs Reference: [useState](https://react.dev/reference/react/useState)