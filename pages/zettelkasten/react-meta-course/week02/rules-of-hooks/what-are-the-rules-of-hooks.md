## **1. Call hooks only from React component functions:**

- Don't use hooks in regular JavaScript functions, only within React component functions.
- You can call them within built-in hooks like `useEffect` or custom hooks.

**Example:**

JavaScript

```jsx
function App() {
  const [petName, setPetName] = useState('fluffy');

  const nameLooper = () => {
    // This is okay because it's inside a React component function
  };

  return (
    <>
      <button onClick={() => setPetName(nameLooper())}>Pick a new name</button>
      <p>My pet's name is: {petName}</p>
    </>
  );
}
```

## **2. Call hooks at the top level of a React component function:**

- Avoid calling hooks inside loops, conditions, or nested functions.
- This ensures consistent order of hook calls across renders.

**Example:**

JavaScript

```jsx
function App() {
  if (true) {
    // This is invalid because it's inside a condition
    useEffect(() => {
      // ...
    });
  }

  return <p>This is valid because the hook is at the top level</p>;
}
```

## **3. Multiple hook calls are allowed, but in the same order:**

- You can call multiple state or effect hooks within a component.
- Maintain the same order of hook calls across renders for consistency.

**Example:**

JavaScript

```jsx
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Count updated:', count);
  });

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </>
  );
}
```

## **4. Avoid changing the order of hook calls:**

- Don't place hook calls inside conditions or loops to avoid skipping calls.
- If you need conditional effects, place the condition inside the hook itself.

**Example:**

JavaScript

```jsx
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count % 2 === 0) {
      console.log('Count is even');
    }
  }, [count]); // This is valid because the condition is inside the hook

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </>
  );
}
```

Remember, following these rules helps ensure your React code with hooks is consistent and avoids unexpected errors.

I hope this Markdown document is helpful!
