import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';

// Step 1: Create a Context with a default value
const AppContext = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
  theme: 'light',
  toggleTheme: () => {},
});

// Step 2: Provider component
function AppProvider({ children }) {
  // State for counter
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  // State for theme
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  // Context value
  const contextValue = {
    count,
    increment,
    decrement,
    theme,
    toggleTheme,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

// Step 3: Component using AppContext.Consumer
function CounterDisplay() {
  return (
    <AppContext.Consumer>
      {({ count, increment, decrement }) => (
        <div>
          <h2>Counter (via Consumer): {count}</h2>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      )}
    </AppContext.Consumer>
  );
}

// Step 4: Component using useContext (for comparison)
function ThemeDisplay() {
  const { theme, toggleTheme } = useContext(AppContext);
  return (
    <div
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '10px',
      }}
    >
      <h2>Theme (via useContext): {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

// Step 5: Component using Consumer with conditional rendering
function ConditionalDisplay() {
  return (
    <AppContext.Consumer>
      {(value) => (
        <div>
          <h2>Conditional Display (via Consumer)</h2>
          {value.count > 0 ? (
            <p>Count is positive: {value.count}</p>
          ) : (
            <p>Count is zero or negative: {value.count}</p>
          )}
          <p>Current theme: {value.theme}</p>
        </div>
      )}
    </AppContext.Consumer>
  );
}

// Step 6: Main App component
function ContextPage() {
  return (
    <AppProvider>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>AppContext with Provider and Consumer</h1>
        <CounterDisplay />
        <ThemeDisplay />
        <ConditionalDisplay />
      </div>
    </AppProvider>
  );
}

export default ContextPage;
