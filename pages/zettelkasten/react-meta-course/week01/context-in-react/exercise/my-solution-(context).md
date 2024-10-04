#solution

---

## My solution

```jsx
// Switch/index.js

import React from 'react';
import { useTheme } from '../ThemeContext';

const Switch = () => {
  const { toggleTheme } = useTheme();

  const handleChange = () => {
    toggleTheme();
  };

  return (
    <label>
            Dark Mode       
      <input type="checkbox" onChange={handleChange} />
          
    </label>
  );
};

export default Switch;
```

```jsx
import './App.css';
import { ThemeProvider, useTheme } from './ThemeContext';
import Switch from './Switch';

const Tite = ({ children }) => {
  const { theme } = useTheme();

  return (
    <h2
      style={{
        color: theme === 'light' ? 'black' : 'white',
      }}
    >
            {children}
          
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();

  return (
    <p
      style={{
        color: theme === 'light' ? 'black' : 'white',
      }}
    >
            {children}
          
    </p>
  );
};

const Content = () => {
  return (
    <div>
            
      <Paragraph>
                We are a pizza loving family. And for years, I searched and searched and
                searched for the perfect pizza dough recipe. I tried dozens, or more.
                And while some were good, none of them were that recipe that would
                make me stop trying all of the others.       
      </Paragraph>
          
    </div>
  );
};

const Header = () => {
  return (
    <header>
            <Title>Little Lemon 🍕</Title>
            
      <Switch />
          
    </header>
  );
};

const Page = () => {
  return (
    <div className="Page">
            <Title>When it comes to dough</Title>
            
      <Content />
          
    </div>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === 'light' ? 'white' : 'black',
      }}
    >
            
      <Header />
            
      <Page />
          
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
            
      <App />
          
    </ThemeProvider>
  );
}

export default Root;
```

```js
// Switch/index.js

import React from 'react';
import { useTheme } from '../ThemeContext';

const Switch = () => {
  const { toggleTheme } = useTheme();
  const handleChange = () => {
    toggleTheme();
  };

  return (
    <label>
          Dark Mode     
      <input type="checkbox" onChange={handleChange} />
    </label>
  );
};

export default Switch;
```
