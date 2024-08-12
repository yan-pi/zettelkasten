---
title: 'React Hooks - useContext'
date: 2024/05/18
tags: ['Zettelkasten', 'Typescript', 'React', 'Hooks']
type: 'post'
author: 'Yan Fernandes'
---

**`useContext` Hook - Sharing Data Between Components**

`useContext` is a React hook that helps you share information between different parts of your app, like themes, user
authentication, or any data you want to access from multiple places. It's especially handy when you don't want to pass
data through lots of components manually.

**OBS:** To use `useContext`, follow these steps:

**Step 1: Create a Context**

Think of a "context" as a container for your data. You create it using `React.createContext()`:

```jsx
const MyContext = React.createContext();
```

**Step 2: Provide the Data**

You need to put your data into the context. This usually happens at a higher level in your component tree (like in the
main `App` component). You use a `Provider` to do this:

```jsx
// Imagine 'theme' is some data you want to share.
const theme = 'light'; // You can replace this with your actual data.

// Wrap your components with the context provider and give it the data.
<YourContext.Provider value={theme}>
  <MyComponent />
</YourContext.Provider>;
```

**OBS:** Here, `value={theme}` means you're providing the `theme` data to any component that wants it.

**Step 3: Access the Data**

Now, you can use `useContext` to get that data inside your component. Just make sure to import it:

```jsx
import React, { useContext } from 'react';

function MyComponent() {
  // Use useContext with the context you created (MyContext in this case).
  const theme = useContext(MyContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
    </div>
  );
}
```

**OBS:** `useContext(MyContext)` is like saying, "Give me the data from the `MyContext` container."

That's it! `MyComponent` can now access the `theme` data without needing it to be passed down as props through multiple
components.

This is super useful when you have data that many parts of your app need, and it keeps your code clean and easy to
manage.
