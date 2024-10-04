#topic 
## [[ Transforming lists in JavaScript]]
___
Lists are a common feature in almost every app, and JavaScript provides a powerful tool for transforming them: the map() method. This method allows you to iterate over each element in a list and apply a transformation to it, returning a new list with the transformed elements.

## [[Render a simple list component]]
___
In the previous topic, you learned how to transform lists of data in JavaScript with the `map` method. In this video, you will learn how to display a collection of elements like this with React by using the map function in JSX syntax.

## [[Exercise Create a basic list component]]
___
The Little Lemon restaurant has decided to remove all desserts with high calories from their menu.
In this lab, you are going to implement a new list component, DessertsList, that will display a list of desserts with less than 500 calories, all sorted by calories, from low to high.
The data you have to work with has been provided to you inside the App.js file, as an array of objects. Each object represents a dessert and has the following properties: name, calories and createdAt.
#### [[Self-review Create a basic List component]]


## [[What are keys in]]
___
Keys are identifiers that help React to determine which items in a list have changed, been added, or been removed. They also instruct React how to treat a specific element when an update occurs and whether its internal state should be preserved or not.

### [[Using Keys within List Components]]
---
In this comprehensive guide, we will delve into the critical topic of using keys effectively within React list components. To aid our understanding, we will use a practical example inspired by the needs of restaurant managers at the Little Lemon restaurant who require an application to track their daily tasks.

### _[[Diference Between Key and Id]]_
___
Therefore, the main difference between `key` and `id` in React is that `key` is used specifically for list optimization and ensuring efficient rendering of elements in a list, while `id` is a general identifier that can be used for any purpose but does not provide the same rendering optimizations.

## [[Additional Content List]]