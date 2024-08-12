---
title: 'React Hooks - useContext'

tags: ['Zettelkasten', 'Typescript', 'React', 'Hooks']
type: 'post'
author: 'Yan Fernandes'
---

The `useContext` hook in React allows you to access the value of a context directly within a functional component.
Context provides a way to share data, such as configuration settings or state, between components without having to pass
props manually through every level of the component tree.

Here's how `useContext` works:

1. **Import the Hook:** To use `useContext`, you need to import it from the 'react' module, similar to other hooks:

   ```jsx
   import { useContext } from 'react';
   ```

2. **Accessing Context Value:** You use `useContext` by passing the context object (created using `React.createContext`)
   as an argument. This hook returns the current value of the context.

   ```jsx
   const contextValue = useContext(MyContext);
   ```

3. **Usage:** Once you have the context value, you can use it in your component's JSX or logic as needed.

   ```jsx
   return (
     <div>
       <p>Context Value: {contextValue}</p>
     </div>
   );
   ```

4. **Typical Use Cases:**
   - **Sharing State:** Accessing global state, such as user authentication status or theme settings.
   - **Configuration:** Accessing configuration settings that apply to the entire application.
   - **Avoiding Prop Drilling:** Avoiding the need to pass data through multiple levels of components via props.

Here's a simple example of using `useContext` to access a theme context:

```jsx
import React, { useContext } from 'react';

// Step 1: Create a context
const ThemeContext = React.createContext();

// Step 2: Provide the context value at a higher level in the component tree
function App() {
  const theme = 'light'; // This could come from a state management library or other source

  return (
    <ThemeContext.Provider value={theme}>
      <MyComponent />
    </ThemeContext.Provider>
  );
}
```

```jsx
import React, { useContext } from 'react';

// Step 3: Access the context value in a child component
function MyComponent() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default App;
```

In this example, the `MyComponent` component can access the `theme` value from the `ThemeContext` without needing to
pass it down through props explicitly. This makes it easy to share global data or settings across different parts of
your application.

React docs Reference: [useContext](https://react.dev/reference/react/useContext) [[useContext2]]
