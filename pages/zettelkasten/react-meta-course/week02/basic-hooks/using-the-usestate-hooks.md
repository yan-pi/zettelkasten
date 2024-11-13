#content

# Little Lemon Goals App

In the early days of Little Lemon, when the restaurant only existed on paper, the owner envisioned an app to track the
development of the business and the achievement of related goals. In this markdown annotation, we explore how to build a
goals app using React and the [[useState]] hook.

## Goal Form Component

The `GoalForm` component captures new goals using a form. It includes two inputs, one for the goal and the other for the
timeframe (`by`). The component manages state using the `useState` hook, initialized with an object containing `goal`
and `by` properties.

```jsx
// GoalForm component
function GoalForm({ onAdd }) {
  const [formData, setFormData] = useState({ goal: '', by: '' });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ goal: '', by: '' });
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Goal:
        <input type="text" name="goal" placeholder="Enter your goal" value={formData.goal} onChange={changeHandler} />
      </label>
      <label>
        By:
        <input type="text" name="by" placeholder="Enter timeframe" value={formData.by} onChange={changeHandler} />
      </label>
      <button type="submit">Add Goal</button>
    </form>
  );
}
```

## List of Goals Component

The `ListOfGoals` component receives the `allGoals` state variable as a prop and maps over the array, displaying each
goal as an unordered list.

```jsx
// ListOfGoals component
function ListOfGoals({ allGoals }) {
  return (
    <ul>
      {allGoals.map((goal, index) => (
        <li key={index}>
          <strong>Goal:</strong> {goal.goal}, <strong>By:</strong> {goal.by}
        </li>
      ))}
    </ul>
  );
}
```

## App Component

The `App` component combines the `GoalForm` and `ListOfGoals` components. It manages the state of all goals and provides
the `addGoal` function to update the state.

```jsx
// App component
function App() {
  const [allGoals, setAllGoals] = useState([]);

  const addGoal = (goalEntry) => {
    setAllGoals((prevGoals) => [...prevGoals, goalEntry]);
  };

  return (
    <div>
      <h1>My Little Lemon Goals</h1>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
}

export default App;
```

This structure allows for the tracking and display of goals in the Little Lemon Goals app using React and the `useState`
hook.
