#content

# Introduction

---

Props and state are two fundamental concepts in React. Props are used to pass data from a parent component to a child
component, while state is used to manage data within a component.

## Props

---

Props are immutable, meaning they cannot be changed by the child component. They are passed down from the parent
component and are read-only within the child component.

## State

---

State is mutable, meaning it can be changed by the component. State is managed within the component and is not
accessible to other components.

### **Differences**

---

| Characteristic | Props                                 | state                                                    |
| -------------- | ------------------------------------- | -------------------------------------------------------- |
| Ownership      | Owned by the parent component         | Owned by the component itself                            |
| Mutability     | Immutable                             | Mutable                                                  |
| Scope          | Passed Down From The Parent Component | Only accessible within the component where it is defined |

### **When to use props**

---

- To pass data from a parent component to a child component.
- To represent data that is constant or does not change over time.
- To simplify the component hierarchy.

### **When to use state**

---

- To manage data that changes over time.
- To represent data that is specific to the component.
- To create interactive components.

### **Identifying props and state**

---

To identify whether something falls into props or state, use the following rule of thumb:

- If a component needs to alter one of its attributes at some point in time, that attribute should be part of its state.
- Otherwise it should just be a prop for that component.

### Stateless VS. Stateful components

---

Components can be stateless or stateful:

- **Stateless components** have only props and no state.
- **Stateful components** have both props and state.

Stateless components are simpler and easier to test than stateful components. However, stateful components are needed to
create interactive components.

## **Conclusion**

---

Props and state are two important concepts in React. By understanding the differences between props and state, you can
build more efficient and reusable components.

#### **Additional notes**

---

- Props and states are both plain JavaScript objects.
- Props and states are deterministic, meaning that the component always generates the same output for the same
  combination of props and state.
- Changes to props and states both trigger a render update.
- Stateless components are generally preferred over stateful components.
- Components can be differentiated into types based on props and state. For example, components can be stateless or
  stateful.

I hope this annotation is helpful. Please let me know if you have any questions.
