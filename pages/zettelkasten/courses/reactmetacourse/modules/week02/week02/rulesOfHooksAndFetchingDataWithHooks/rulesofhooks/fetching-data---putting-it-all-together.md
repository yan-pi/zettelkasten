Here's the transcript transformed into Markdown format:

---

# Little Lemon Restaurant Competition

The Little Lemon Restaurant wants to run a competition for its customers where a lucky customer will receive a free meal at the restaurant. All customers that are signed up to the Little Lemon app will be entered into the competition, and a random customer will be selected as the winner. In this video, I will show you how to get some random user data from a website. I will be using the random.me website to access random user data for this demonstration.

## Code Demonstration

I have prepared some code for this app to fetch the user data from the website. If I execute this code, it will initially output the "data pending" text in the `H1` heading. At the same time, in the background, it will be carrying out the `fetchData` function to retrieve the user information from the random user website. Notice that I have the dev tools open and the Network tab active. I will click on the North router link dropdown to artificially slow down my connection. In the dropdown, I will choose the slow 3G preset. This is so that I can observe the "data pending" text in the heading before the data gets fetched from the web. Once the data has been successfully fetched, it updates the view with the data returned in the `H1` heading and the user information that has been retrieved. In this example, the data that was requested was the first name and the last name of this random user.

### Code Breakdown

Let's step through this code in more detail:

```javascript
const App = () => {
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://randomuser.name/api');
    const data = await response.json();
    setUserData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    userData.length > 0 ? (
      <div>
        <h1>{userData[0].name.first} {userData[0].name.last}</h1>
        <h2>{userData[0].email}</h2>
        <h2>{userData[0].phone}</h2>
      </div>
    ) : (
      <h1>Data Pending</h1>
    )
  );
};
```

1. **useState Hook**: Inside the `App` function, I'm invoking the `useState` hook at the top level of the component. The initial value of the state variable is an empty array.
   
2. **fetchData Function**: I have defined the `fetchData` function, which is fetching data from the `randomuser.name` API. It retrieves the response from the API in JSON format and then updates the state variable with this JSON data. I'm not using a hook inside the `fetchData` function because that's against the rules of hooks.
   
3. **useEffect Hook**: I'm calling the `useEffect` hook and from inside the `useEffect` hook, I'm calling the `fetchData` function which I've defined previously.
   
4. **Conditional Logic**: Finally, I'm using conditional logic to decide what to return. First, I'm using the `Object.keys` code snippet to put all the keys of the user object into an array. Since `Object.keys` returns an array, I can access the length property on this array and check if the length of this array is greater than zero. If it is, it means that the contents of the state array has changed because as you may remember, the state variables array was empty. So if the array is no longer empty, then the div section will be returned with the `H1` tag and a couple of `H2` tags. Otherwise, the `H1` tag below is returned that reads "Data Pending". Sometimes it can take a little bit of time for the `fetchData` function to retrieve the data requested. Therefore, the "Data Pending" message will be displayed initially after the code is executed. Once the data has arrived from the `fetchData` call, this change in state causes a re-render of my component. So the return statement's ternary operator is re-evaluated and that returns all the data from my call to the fetch API.

### Conclusion

This is essentially how you get data from the web using React. So the Little Lemon Restaurant would be able to apply the same logic to their customer list API to select a random winner for their competition. In this video, you have learned how to fetch data using the `useState` and `useEffect` hooks.

---