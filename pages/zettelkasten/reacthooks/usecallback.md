---
title: 'React Hooks - useCallback'

tags: ['Zettelkasten', 'Typescript', 'React', 'Hooks']
type: 'post'
author: 'Yan Fernandes'
---

The `useCallback` hook is used in React to memoize and optimize the creation of callback functions in functional
components. It's particularly useful when passing functions as props to child components to prevent unnecessary
re-renders.

Here's how `useCallback` works:

1. **Import the Hook:** To use `useCallback`, you need to import it from the 'react' module, just like other hooks:

   ```jsx
   import { useCallback } from 'react';
   ```

2. **Creating Memoized Callbacks:** You define memoized callback functions by providing a function as the first argument
   to `useCallback`. This function is the callback you want to memoize.

   ```jsx
   const memoizedCallback = useCallback(() => {
     // Callback logic
   }, [dependencies]);
   ```

   The second argument is an array of dependencies. The memoized callback will only be recreated when one of the
   dependencies has changed. If the dependencies remain the same between renders, the memoized callback will be reused.

3. **Usage:** You can use the `memoizedCallback` as a prop in your JSX or pass it to child components. This ensures that
   the callback function remains stable across renders, preventing unnecessary re-renders of components that depend on
   it.

   ```jsx
   return (
     <div>
       <ChildComponent onClick={memoizedCallback} />
     </div>
   );
   ```

4. **Typical Use Cases:**
   - **Preventing Unnecessary Renders:** Memoizing callback functions passed as props to child components to avoid
     unnecessary re-renders.
   - **Optimizing Performance:** Ensuring that event handlers or functions passed as dependencies to other hooks (e.g.,
     `useEffect`) are stable.

Here's a simple example of using `useCallback` to optimize a component with a callback prop:

```jsx
import React, { useCallback, useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Memoize the callback to prevent unnecessary re-renders of ChildComponent
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Increment Count</button>;
}

export default ParentComponent;
```

In this example, the `handleClick` callback is memoized using `useCallback`. This ensures that the callback function
doesn't change on every render of `ParentComponent`, preventing unnecessary re-renders of `ChildComponent`.

React docs Reference: [useCallback](https://react.dev/reference/react/useCallback)
