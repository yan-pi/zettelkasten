#content

---

## **How to display a list of elements with React using the map function in JSX syntax**

---

### Introduction

In the previous topic, you learned how to transform lists of data in JavaScript with the `map` method. In this video,
you will learn how to display a collection of elements like this with React by using the map function in JSX syntax.

### Example

Let's imagine that the restaurant Little Lemon would like to go one step further by providing its online visitors with a
sneak peek at the best desserts in a dedicated section to encourage them to order.

In this example, you will display a simpler version of this collection of top desserts by displaying just the title and
the price.

### Using the map function in JSX syntax

In JSX, you can return a React component as the transformation applied to each element in a map function. This is useful
because it allows you to embed the results directly into the return JSX.

To display a list of elements with React using the map function in JSX syntax, you can follow these steps:

1. Create a new variable to store the result of the transformation.
2. Loop through the array of items using the map function.
3. Inside the map function, return a React component for each item.
4. Wrap the data for each item in curly braces.
5. Render the transformed list of items in the render method of your React component.

Here is an example of how to display a list of desserts with React using the map function in JSX syntax:

JavaScript

```JSX
// Create a new variable to store the result of the transformation.
const listItems = desserts.map((dessert) => {
  // Return a React component for each item.
  return (
    <li key={dessert.id}>
      {/* Wrap the data for each item in curly braces. */}
      const listItem = `${dessert.title} - ${dessert.price}`
      return <li>{listItem}</li>
    </li>
  );
});

// Render the transformed list of items in the render method of your React component.
render() {
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

Use o código com cuidado. [Saiba mais](https://bard.google.com/faq#coding)

### Conclusion

The map function in JSX syntax is a powerful tool for transforming collections of elements and displaying them in React
components. It is one of the core building blocks of app development, and it is important to learn how to use it
effectively.
