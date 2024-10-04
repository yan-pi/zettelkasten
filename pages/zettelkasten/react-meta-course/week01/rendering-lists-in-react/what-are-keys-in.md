#content

---

## How to use keys in React to improve performance

---

## **Introduction**

One important advantage of using React is its ability to automatically optimize updates in your user interfaces or UIs.
However, there are some cases where you as the developer need to take extra steps to specify how React should behave
when your UI changes. One such example is when dealing with lists of elements.

## **What are keys?**

Keys are identifiers that help React to determine which items in a list have changed, been added, or been removed. They
also instruct React how to treat a specific element when an update occurs and whether its internal state should be
preserved or not.

## **How to choose the right key**

The general rule of thumb with keys is to use a stable identifier that is unique among its siblings. This allows React
to reuse as many elements from the list as possible, avoiding unnecessary recreations.

The key used most often is a unique ID that comes from your data. For example, if you are rendering a list of users, you
could use the user's ID as the key.

If your data doesn't have any suitable IDs or you are rendering a list that is not dependent on any server data, you can
generate your own unique IDs. However, keep in mind that this approach will not preserve the internal state of your list
items.

As a last resort, you may use the item index. However, indexes are not recommended for keys if the order of items may
change, for example, in cases where your list has sorting capabilities or users can either add or remove items.

### **Effects of incorrect usage of keys on app performance**

When used incorrectly, keys can negatively impact performance and may cause unexpected glitches in your UI when updating
your list. That's why it is very important to make a conscious decision about your key's implementation.

### **Conclusion**

To summarize, here are some key takeaways:

- Always use a key that is guaranteed to be unique among its siblings.
- Use unique IDs from your data when possible.
- You can use indexes as a last resort but don't forget that this approach will not work when the order of your list
  items is prone to change.

### **Example**

The following example shows how to use keys in a React list component:

```jsx
import React, { useState } from 'react';

const ListComponent = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const handleRemoveItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;
```

Use o código com cuidado. [Saiba mais](https://bard.google.com/faq#coding)

content_copy In this example, we are using the unique ID of each item as the key. This ensures that React can
efficiently update the list when items are added, removed, or reordered.

### **Conclusion**

By using keys correctly, you can improve the performance of your React applications and avoid unexpected glitches in
your UIs
