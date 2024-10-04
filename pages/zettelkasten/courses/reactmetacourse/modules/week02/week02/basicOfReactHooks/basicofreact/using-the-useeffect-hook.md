#content 
___
# Demonstrating useEffect Hook in React
___
To showcase the implementation of the [[useEffect]] hook within a React component, we'll continue enhancing the Little Lemon app. The restaurant owner wants to improve user interaction by displaying a welcome message on one button click and hiding it on another. Additionally, the owner desires these changes to reflect in the Browser tab where the app is served, constituting a side effect. In this tutorial, we'll demonstrate using the `useEffect` hook to manage side effects in React and control its invocation with a dependencies array.

## Little Lemon App Structure

In the app, a button click triggers a welcome message to appear or disappear. The app's current functionality lacks the ability to update the Browser tab text as requested by the owner.

```jsx
<div>
  <h1>Little Lemon App</h1>
  <button onClick={clickHandler}>Toggle Message</button>
  {toggle && <h2>Welcome to Little Lemon</h2>}
</div>
```

## Managing Side Effects with useEffect
____
To address the side effect of updating the Browser tab text, we utilize the `useEffect` hook. Below the return statement, we add the following code:

```jsx
useEffect(() => {
  document.title = toggle ? 'Welcome to Little Lemon' : 'Using the useEffect hook';
}, [toggle]);
```

This `useEffect` hook dynamically updates the Browser tab text based on the state of the `toggle` variable. The dependency array `[toggle]` ensures that the effect runs whenever `toggle` changes.

## Controlling useEffect Invocation
___
Suppose the owner decides the Browser tab text should only be set on the initial render. To achieve this, we update the `useEffect` call with an empty dependency array:

```jsx
useEffect(() => {
  document.title = toggle ? 'Welcome to Little Lemon' : 'Using the useEffect hook';
}, []);
```

Now, the `useEffect` hook runs only once on the initial render, and subsequent changes to the `toggle` variable won't trigger it.

## Conclusion
____
By incorporating the `useEffect` hook and managing the dependency array, we've fulfilled the owner's requests for handling side effects in the Little Lemon app. This approach aligns with React best practices for functional components and hook usage. You now have a better understanding of how to utilize `useEffect` for side effects and control its invocation with the dependency array in React.