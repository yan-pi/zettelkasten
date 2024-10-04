#content

---

# Implementation of a Feedback Form in React

In this excerpt from the React course, we will learn how to create a feedback form using controlled components and
custom validation. The example we will use is a feedback form similar to what you might have encountered after
purchasing a product online or booking a table at a restaurant.

## Controlled Components

---

- A feedback form is a common way to gather user opinions.
- We will demonstrate how to create this type of functionality in React.
- We will use an "input" element of type "range" to allow users to select a score from 0 to 10.
- The "range" input component is a suitable choice as it provides a simple sliding interface.
- We will set up the state to control the score value and update it as the user interacts with the slider.

## Adding a Comment Field

---

- In addition to the score, the form should allow users to provide an additional comment.
- We will use a "textarea" input element for this purpose, as it allows longer comments.
- We will set up the state to control the comment text and update it as the user types.

## Validating the Form

---

- To ensure that comments are provided when the score is equal to or less than 5 and are at least 10 characters long, we
  will implement custom validation.
- We will use the "onSubmit" event of the form to perform the validation.
- If the validation fails, we will display an alert to the user informing them of the requirements.
- If the validation is successful, we will log a successful submission message to the console.

## Resetting the Form

---

- As a best practice, after a successful form submission, we will reset the state values to their initial settings.

Now you have learned how to build a feedback form in React using controlled components and custom validation to ensure
an effective user experience.

```jsx
import React, { useState } from 'react';

function App() {
  // State to control the score
  const [score, setScore] = useState(10);

  // State to control the comment text
  const [comment, setComment] = useState('');

  // Function to handle changes in the score
  const handleScoreChange = (event) => {
    setScore(event.target.value);
  };

  // Function to handle changes in the comment
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate if the score is less than or equal to 5 and the comment has fewer
    // than 10 characters
    if (score <= 5 && comment.length < 10) {
      alert('Please provide a comment with at least 10 characters.');
      return;
    }

    // If validation passes, log success to the console
    console.log('Feedback submitted successfully!');

    // Reset the states to default values
    setScore(10);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
            <h1>Feedback Form</h1>     {' '}
      <div>
                <label htmlFor="score">Score: {score}</label>
                <input type="range" id="score" min={0} max={10} value={score} onChange={handleScoreChange} />     {' '}
      </div>
           {' '}
      <div>
                <label htmlFor="comment">Comment:{comment}</label>
                <textarea id="comment" value={comment} onChange={handleCommentChange} />     {' '}
      </div>
           {' '}
      <div>
                <button type="submit">Submit</button>     {' '}
      </div>
         {' '}
    </form>
  );
}

export default App;
```
