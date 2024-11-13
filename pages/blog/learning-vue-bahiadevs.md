---
title: 'Getting Started with Vue.js - Bahia Devs Meetup'
date: 2024/08/19
description: 'These are my notes from a presentation on Vue.js that I had during the weekly open-coding session of Bahia Devs.'
category: ['Programming', 'Vuejs', 'JavaScript', 'Frontend']
type: 'post'
author: 'Yan Fernandes'
---

## What is Vue.js?

---

Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be flexible and adopted incrementally, which means you can use only what you need. Vue can be integrated into existing projects or used to create complete applications, such as SPAs (Single Page Applications).

## Historical Context

---

**Created by:** Evan You <- Also the creator of [Vite](https://vitejs.dev/)

**Released in:** February 2014

**Context:** Evan You was working at Google using AngularJS on various projects. He felt the need to create something lighter and more flexible, taking the parts he liked most from Angular and simplifying what he considered complex or heavy.

## What Makes Vue.js Different?

---

1. **Gentle learning curve:** Vue is easy to learn, especially for those already familiar with HTML, CSS, and JavaScript.

2. **Flexibility and scalability:** You can use Vue for small or large projects, adjusting its architecture as needed.

3. **Optimized performance:** Vue is fast and efficient, with a reactive architecture that ensures automatic updates to the interface when data changes.

4. **Rich ecosystem, but not overwhelming:** The Vue ecosystem is powerful and includes tools like Vue Router, Vuex, and the Vue CLI, but you can choose to use them as needed.

5. **Excellent documentation:** Vue's documentation is clear and comprehensive, making it easy to learn and implement new features.

![Pasted image 20240815200949.png]

## Vue APIs: Options API vs. Composition API

---

When developing Vue components, you can choose between two main approaches: **Options API** and **Composition API**. Both are powerful and support common use cases but have differences that influence how you structure and organize your code.

### Options API

---

The **Options API** is the more traditional and widely used approach in Vue.js, especially in versions prior to 3.0. With this API, you define the component logic using an options object, such as `data`, `methods`, and `mounted`. The properties defined in the options are exposed within functions via `this`, which refers to the component instance.

**Options API Example:**

```vue
<script>
export default {
  // Reactive data exposed through `this`
  data() {
    return {
      count: 0,
    };
  },

  // Methods for state manipulation that trigger updates
  methods: {
    increment() {
      this.count++;
    },
  },

  // Lifecycle hooks
  mounted() {
    console.log(`The initial value is ${this.count}.`);
  },
};
</script>

<template>
  <button @click="increment">The value is: {{ count }}</button>
</template>
```

**Advantages of the Options API:**

- **Ease of use:** The Options API is intuitive, especially for beginners, and organizes code in a clear and structured way.
- **OOP mental model:** Aligns well with an object-oriented mentality, being closer to a class where `this` refers to the component instance.

**When to use the Options API?**

- When you are not using build tools (PWAs) or plan to use Vue primarily for low-complexity scenarios.
- When clarity and simplicity in code organization are priorities, such as in small projects or for beginners.

### Composition API

The **Composition API** was introduced in Vue 3 and allows you to define component logic using imported functions. In single-file components (SFCs), the Composition API is often used with the `<script setup>` directive, which allows you to write code with less boilerplate.

**Composition API Example with `<script setup>`:**

```vue
<script setup>
import { ref, onMounted } from 'vue';

// Reactive state
const count = ref(0);

// Functions that manipulate the state and trigger updates
function increment() {
  count.value++;
}

// Lifecycle hooks
onMounted(() => {
  console.log(`The initial value is ${count.value}.`);
});
</script>

<template>
  <button @click="increment">The value is: {{ count }}</button>
</template>
```

**Advantages of the Composition API:**

- **Flexibility:** Allows the composition of reactive state logic from multiple functions, making it easier to reuse and organize complex code.
- **Powerful for large applications:** The flexibility and modularity of the Composition API make it ideal for large and complex projects.

**When to use the Composition API?**

- When you plan to build complete applications with Vue, especially using modern build tools.
- When you need more powerful patterns to organize and reuse logic in complex projects.

### Which to Choose?

Both APIs have their advantages, and the choice depends on the context and complexity of your project:

- **For learning:** Choose the one that seems more intuitive to you. Most core concepts are shared between the two.
- **For production:**
  - Use **Options API** if you are not using build tools or if the project is of low complexity.
  - Use **Composition API** + **Single-File Components** if you are building complete and complex applications.

### Examples and Comparisons

Here is a comparison between the two APIs using the same component example:

**Options API:**

```vue
<script>
export default {
  data() {
    return {
      message: 'Hello Vue!',
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    },
  },
};
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <button @click="reverseMessage">Reverse Message</button>
  </div>
</template>
```

**Composition API:**

```vue
<script setup>
import { ref } from 'vue';

const message = ref('Hello Vue!');

function reverseMessage() {
  message.value = message.value.split('').reverse().join('');
}
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <button @click="reverseMessage">Reverse Message</button>
  </div>
</template>
```

### General Recommendations

- **For new projects:** Consider starting with the **Composition API** if you plan to scale the application. However, the **Options API** remains an excellent choice, especially for less complex projects.
- **For those already using the Options API:** There’s no need to migrate immediately to the Composition API, but it’s worth learning and considering for new projects or when additional flexibility is beneficial.

These topics cover the main differences and uses of Vue APIs, allowing you to choose the approach that best fits your project and level of experience.

## SFC (Single File Components)

---

One of the great differentiators of Vue is the concept of **Single File Components (SFCs)**. These components combine the template, script, and style in a single `.vue` file, facilitating modularization and code organization.

**Example of an SFC:**

```vue
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!',
    };
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
```

## Data Binding

---

Vue.js allows for two-way data binding, which automatically synchronizes model data (JavaScript) with the interface (HTML).

**Example:**

```html
<div id="app">
  <input v-model="message" />
  <p>{{ message }}</p>
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
    },
  });
</script>
```

## Lifecycle Hooks

---

Vue.js has a component lifecycle that provides hooks allowing you to execute code at different moments in a component's lifecycle.

**Main hooks:**

- `created`: Called after the instance is created.
- `mounted`: Called after the instance is mounted to the DOM.
- `updated`: Called after a reactive update.
- `destroyed`: Called after the instance is destroyed.

**Example:**

```javascript
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
  created() {
    console.log('Component created!');
  },
  mounted() {
    console.log('Component mounted to DOM!');
  },
});
```

## Directives

---

Vue.js offers a series of directives that allow for declarative DOM manipulation.

**Some of the main directives:**

- `v-if`: Conditionally renders the element.
- `v-for`: Iterates over a collection of data.
- `v-bind`: Binds an HTML attribute to an expression.
- `v-on`: Binds DOM events to methods.
- `v-model`: Two-way data binding.

**Example:**

```html
<div id="app">
  <p v-if="isVisible">This text is visible.</p>
  <ul>
    <li v-for="item in items">{{ item }}</li>
  </ul>
  <input v-model="message" />
  <button v-on:click="showAlert">Show Alert</button>
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      isVisible: true,
      items: ['Item 1', 'Item 2', 'Item 3'],
      message: 'Hello Vue!',
    },
    methods

: {
      showAlert() {
        alert(this.message);
      },
    },
  });
</script>
```

## Conclusion

---

Vue.js is a powerful and flexible framework that offers a gentle learning curve and an extensive ecosystem for building applications. Understanding the different approaches and features is essential for developing scalable and efficient applications.

---

## References

- [Official Vue.js documentation](https://vuejs.org/)
- [Vue.js API Reference](https://vuejs.org/api/)
- [Vue Router documentation](https://router.vuejs.org/)
- [Vuex documentation](https://vuex.vuejs.org/)

---

Feel free to modify any sections to better fit your style or add any additional insights you have!
