---
title: 'React Hooks - useMemo'

tags: ['Zettelkasten', 'Typescript', 'React', 'Hooks']
type: 'post'
author: 'Yan Fernandes'
---

**`useMemo` Hook**

The `useMemo` hook in React allows you to memoize the results of expensive calculations or computations in functional
components. Memoization is an optimization technique that stores the results of expensive functions so that they can be
reused when the inputs (dependencies) remain the same. This can help improve performance by avoiding unnecessary
calculations on every render.

Here's how `useMemo` works:

1. **Import the Hook:** To use `useMemo`, you need to import it from the 'react' module, similar to other hooks:

   ```jsx
   import React, { useMemo } from 'react';
   ```

2. **Creating Memoized Values:** You define memoized values by providing a function as the first argument to `useMemo`.
   This function calculates the value you want to memoize.

   ```jsx
   const memoizedValue = useMemo(() => {
     // Expensive calculation or computation
     return result;
   }, [dependencies]);
   ```

   The second argument is an array of dependencies. The memoized value will only be recalculated when one of the
   dependencies has changed. If the dependencies remain the same between renders, the memoized value will be reused.
   _obs: the dependencies are triggered by the [[useState]] that triggers the calculation_

3. **Usage:** You can use the `memoizedValue` in your component's JSX or logic as needed. This value will be computed
   only when necessary and won't be recalculated on every render unless the dependencies change.

   ```jsx
   return (
     <div>
       <p>Memoized Value: {memoizedValue}</p>
     </div>
   );
   ```

4. **Typical Use Cases:**
   - **Expensive Computations:** Memoizing the result of a complex mathematical calculation.
   - **Data Transformation:** Memoizing transformed data to avoid redundant processing.
   - **Optimizing Render:** Preventing unnecessary re-renders by memoizing derived values from props or state.

Here's a simple example of using `useMemo` to calculate a Fibonacci number:

```jsx
import React, { useMemo } from 'react';

function FibonacciCalculator({ n }) {
  const fibonacciNumber = useMemo(() => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }, [n]);

  return (
    <div>
      <p>
        Fibonacci number at index {n}: {fibonacciNumber}
      </p>
    </div>
  );
}

export default FibonacciCalculator;
```

In this example, the Fibonacci number is calculated only when the `n` prop changes, thanks to `useMemo`. This prevents
unnecessary recalculations and can significantly improve performance when dealing with expensive computations or data
transformations.

React docs Reference: [useMemo](https://react.dev/reference/react/useMemo)
