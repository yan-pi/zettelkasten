#content

---

## **Introduction:**

Before diving into the [[useEffect]] hook, let's understand the concept of side effects and their relationship with pure
and impure functions within React components.

## **What are side effects?**

A side effect is something that makes a function impure. It's anything that affects something outside the function's
execution itself, such as:

- **Logging to the console:** `console.log(total)`
- **Making API calls:** `fetch(url)`
- **Accessing browser APIs:** `navigator.geolocation.getCurrentPosition()`

## **Pure vs. Impure Functions:**

- **Pure functions:**
  - Always return the same output for the same input.
  - Have no side effects.
  - Example: `function establishedYear(year) { return`Established Year: ${year}`; }`
- **Impure functions:**
  - Can have different outputs for the same input depending on external factors.
  - Have side effects.
  - Example: `function shoppingCart(products) { console.log(products.total); }`

### **Problems with Impure Functions in React:**

- Make components harder to test and reason about.
- Can lead to unexpected behavior and bugs.
- Tightly couple components to external factors.

## **Dealing with Side Effects in React:**

- Use the `useEffect` hook to manage and isolate side effects.
- `useEffect` accepts two arguments:
  - **Callback function:** Contains the side effect logic.
  - **Dependency array (optional):** Specifies when the callback should run (e.g., on mount, update, or cleanup).

**Example:**

```jsx
function ShoppingCart(props) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Side effect: Calculate total
    const newTotal = props.products.reduce((acc, product) => acc + product.price, 0);

    setTotal(newTotal);
  }, [props.products]); // Run on `props.products` change

  // No side effect: Render total
  return <h1>Total: ${total}</h1>;
}
```

## **Conclusion:**

By understanding side effects and using the `useEffect` hook effectively, you can write cleaner, more predictable, and
maintainable React components.

## **Further Learning:**

- Practice using `useEffect` with different side effects.
- Explore advanced techniques like memoization and custom hooks.
- Consider using libraries like `react-query` for managing side effects related to data fetching.
