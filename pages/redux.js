import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Step 1: Create Redux slices
// Counter slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// Theme slice
const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: 'light' },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

// Step 2: Create the Redux store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    theme: themeSlice.reducer,
  },
});

// Step 3: Component to display and update counter
function CounterDisplay() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>
        Increment
      </button>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>
        Decrement
      </button>
      <button onClick={() => dispatch(counterSlice.actions.reset())}>
        Reset
      </button>
    </div>
  );
}

// Step 4: Component to display and toggle theme
function ThemeDisplay() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '10px',
      }}
    >
      <h2>Theme: {theme}</h2>
      <button onClick={() => dispatch(themeSlice.actions.toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
}

// Step 5: Component with conditional rendering
function ConditionalDisplay() {
  const count = useSelector((state) => state.counter.count);
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div>
      <h2>Conditional Display</h2>
      {count > 0 ? (
        <p>Count is positive: {count}</p>
      ) : (
        <p>Count is zero or negative: {count}</p>
      )}
      <p>Current theme: {theme}</p>
    </div>
  );
}

// Step 6: Main App component
function ContextPage() {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Redux with Counter and Theme</h1>
        <CounterDisplay />
        <ThemeDisplay />
        <ConditionalDisplay />
      </div>
    </Provider>
  );
}

export default ContextPage;
