---
title: 'React Hooks - useEffect'

tags: ['Zettelkasten', 'Typescript', 'React', 'Hooks']
type: 'post'
author: 'Yan Fernandes'
---

The `useEffect` hook is a vital part of React's functional component API, allowing you to perform side effects in your
Side effects are actions that occur outside the usual flow of your component's render cycle, such as data
fetching, DOM manipulation, and subscriptions. _Obs: its triggered by a [[useState changing_]]

Here's how `useEffect` works:

1. **Import the Hook:** To use `useEffect`, you need to import it from the 'react' module, just like other hooks:

   ```jsx
   import React, { useEffect } from 'react';
   ```

  
1. **Declaring Effects:** You define your side effects by providing a function as the first argument to `useEffect`.
   This function will be executed after the component has rendered. This is where you put code that has side effects,
   like data fetching, updating the DOM, or setting up subscriptions.

   ```jsx
   useEffect(() => {
     // Your side effect code goes here
   }, [dependencies]);
   ```

   The second argument is an optional array of dependencies. If you pass an empty array (`[]`), the effect runs only
   when the component mounts. If you provide dependencies, the effect will run whenever any of the dependencies change.
   This is useful for situations where you need to react to changes in state or props.

3. **Cleanup Effects (Optional):** If your effect returns a function, React will treat it as a cleanup function. This
   function is called when the component unmounts or when the dependencies change. It's essential for cleaning up
   resources like timers or event listeners to prevent memory leaks.

   ```jsx
   useEffect(() => {
     // Your side effect code goes here

     return () => {
       // Cleanup code (e.g., clear timers, remove event listeners)
     };
   }, [dependencies]);
   ```

4. **Typical Use Cases:**
   - **Data Fetching:** Fetching data from an API when the component mounts.
   - **DOM Manipulation:** Updating the DOM directly.
   - **Subscriptions:** Setting up subscriptions to external data sources.
   - **Cleaning Up:** Clearing timers, unsubscribing, or removing event listeners.

Here's a simple example of using `useEffect` to fetch data when a component mounts:

```jsx
import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });

    // Clean up any resources if needed
    return () => {
      // Cleanup code
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return <div>{data ? <p>Data: {data}</p> : <p>Loading data...</p>}</div>;
}

export default MyComponent;
```

This example demonstrates how `useEffect` can be used to manage data fetching (only when the component mounts) and
cleanup in a functional component

```jsx
useEffect(() => {
  //The code that we want to run

  console.log('The count is: ' + count); //Opitional return function (used as a clean up function as a lifecycle)

  return () => {
    console.log('i am being clean up!'); //destoy an run a clean up, and the next time run with the new value
    //use full to clean up and prevent bugs,
  };
}, [count]); //What it shount listen to, dependency array
//its garantied to run at least one time, when the component mounts
```

React docs Reference: [useEffect](https://react.dev/reference/react/useEffect)
