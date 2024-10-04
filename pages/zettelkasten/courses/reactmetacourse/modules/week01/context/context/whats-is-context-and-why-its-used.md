#content 
# What is it?
____
The React Context API is a way to share data between components without having to pass props down through the component tree. It is useful for sharing global state, such as the current user or the current theme.

### Why was it introduced?
____
The Context API was introduced to solve the problem of prop drilling, which occurs when you have to pass data down through many levels of the component tree. This can make the code difficult to read and maintain.

#### **Example:**
____
JavaScript

```jsx
// user-context.js
import React, { createContext } from 'react';

const UserContext = createContext(undefined);

function UserProvider({ children }) {
  const [user] = useState({
	name: "Yan",
	email: "yan@fernandes.com",
	dob: "01/01/2000",
  });

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
//renomeia useContext para useUser

// App.js
import React from 'react';
import UserProvider from './user-context';

function App() {
  return (
    <UserProvider>
      <div>
        <LoggedInUser />
        <Page />
      </div>
    </UserProvider>
  );
}

function LoggedInUser() {
  const user = useUser();

  return (
    <div>
      <h1>Logged in user: {user.name}</h1>
    </div>
  );
}

function Page() {
  const user = useUser();

  return (
    <div>
      <h1>Page</h1>
      <p>Welcome, {user.name}!</p>
    </div>
  );
}

export default App;
```

In this example, the `UserProvider` component wraps the entire app and provides the current user to all descendant components. The `useUser` hook is used to consume the user context.

## **When to use it:**
___
You should use the Context API when you need to share global state between components. This can include things like the current user, the current theme, or the current locale.

## **When not to use it:**
___
You should not use the Context API for state that is local to a component or a group of components. This is because context can make your code more difficult to read and maintain.

### **Tips:**
___
- Use context sparingly. It is best to use props and state for most of your data needs.
- Use descriptive names for your context variables. This will make your code more readable.
- Avoid using context for data that changes frequently. This is because context can cause unnecessary re-renders.

### **Conclusion:**
___
The Context API is a powerful tool for sharing global state between components in React. However, it is important to use it sparingly and to avoid using it for data that is local to a component or a group of components.