#Exercise

---

# Instructions

## Task

The Little Lemon restaurant has decided to remove all desserts with high calories from their menu.

In this lab, you are going to implement a new list component, DessertsList, that will display a list of desserts with
less than 500 calories, all sorted by calories, from low to high.

The data you have to work with has been provided to you inside the App.js file, as an array of objects. Each object
represents a dessert and has the following properties: name, calories and createdAt.

The App component passes that information to the DessertsList component as a prop named data.

Each item from the list should display the name of the dessert and the number of calories, both separated by a dash
character, i.e. Chocolate Mousse - 250 cal.

**Note:** Before you begin, make sure you understand how to work with the Coursera Code Lab for
the [Advanced React course](https://www.coursera.org/learn/advanced-react/supplement/htaLX/working-with-labs-in-this-course 'https://www.coursera.org/learn/advanced-react/supplement/htaLX/working-with-labs-in-this-course').

If you run npm start and view the app in the browser, you'll notice that the starting React app works as is. The app
outputs the below interface with a simple header. You'll build from that starting point.

![](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/u6cbpAL_SHW3XnRHErJBtg_de2cec7f5c96463da047e29030485ee1_image1.png?expiry=1696723200000&hmac=5Qnq5n7MgPFpLQ2xP253DXMV6Qgvd6cQTLIRBZfeU7Y)

## Steps

### **Step 1**

Open the DessertsList.js file. You only need to implement this component to complete this exercise.

You’ll see an empty component that at the moment returns null, resulting in rendering nothing at all.

The DessertsList component receives a prop called data, which is an array containing the list of desserts. You can check
the exact shape of the data at the top of the App.js file, under a variable called desserts.

### **Step 2**

Inside the DessertsList  component, remove the null and instead return a ul element that contains a list of li elements,
where each li text is a dessert with the following format: ${dessertName} - ${dessertCalories} cal.

The list should be sorted by calories in an ascending manner and any desserts with more than 500 calories should be
excluded. For that you have to use a combination of map, filter and sort array operators.

### **Step 3**

Save all the changes and run the app. Preview the updates in the browser, and confirm that the page shows an ul element
with just three li elements as below:

- Ice Cream - 200 cal
- Tiramisu - 300 cal
- Chocolate Cake - 400 cal

### **Tip**

If you’re having trouble with this lab, please review the filter and sort methods from arrays in JavaScript.

## Solution :

---

https://codesandbox.io/s/lucid-sunset-c4rg4d?file=/src/App.js

```jsx
// App.js
import './styles.css';
import DessertsList from './DessertsList.js';

const desserts = [
  {
    name: 'Chocolate Cake',
    calories: 100,
    createdAt: '2022-09-01',
  },
  {
    name: 'Ice Cream',
    calories: 200,
    createdAt: '2022-01-02',
  },
  {
    name: 'Tiramisu',
    calories: 300,
    createdAt: '2021-10-03',
  },
  {
    name: 'Cheesecake',
    calories: 600,
    createdAt: '2022-01-04',
  },
];

function App() {
  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </div>
  );
}

export default App;
```

```JSX
//DesertsList.js Component

function DessertsList({data}) {
// Implement the component here.

const filteredDesserts = data
.filter(dessert => dessert.calories < 500)
.sort((a, b) => a.calories - b.calories);

return (
<ul>
	{filteredDesserts.map(dessert => (
		<li key={dessert.name}>
			{dessert.name} - {dessert.calories} cal
		</li>
	))}
</ul>
);
}

export default DessertsList;
```

## Tamplate Solution
