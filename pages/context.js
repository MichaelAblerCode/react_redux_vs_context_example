import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';

/*
 * Context API Implementation
 * Context is best suited for:
 * - Small to medium applications
 * - Simple state sharing
 * - When you need to avoid prop drilling
 * - When state updates are relatively simple
 */

// Step 1: Create a Context with a default value
// The default value is used when a component is not wrapped in a Provider
const AppContext = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
  theme: 'light',
  toggleTheme: () => {},
});

// Step 2: Provider component - Manages the state and provides it to children
function AppProvider({ children }) {
  // useState hooks for local state management
  const [count, setCount] = useState(0);
  // State updater functions
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  // Bundle all values and functions into a single context value
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

// Step 3: Example of using Context.Consumer pattern
// This is the older way of consuming context
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

// Step 4: Example of using useContext hook
// This is the modern, cleaner way to consume context
function ThemeDisplay() {
  // useContext provides direct access to context values
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
