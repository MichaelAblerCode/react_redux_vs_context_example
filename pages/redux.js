import React from 'react';
import ReactDOM from 'react-dom';
// Redux hooks for accessing store data and dispatching actions
import { Provider, useSelector, useDispatch } from 'react-redux';
// Modern Redux utilities from @reduxjs/toolkit
import { configureStore, createSlice } from '@reduxjs/toolkit';

/*
 * Redux Implementation
 * Redux is best suited for:
 * - Large scale applications
 * - Complex state management
 * - When you need middleware and dev tools
 * - When state updates follow specific patterns
 */

// Step 1: Create Redux slices - A slice is a portion of Redux state and its reducers
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  // Reducers define how the state can be modified
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers
      // It actually creates immutable updates behind the scenes
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

// Theme slice - Another independent piece of state
const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: 'light' },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

// Step 2: Configure the Redux store - Single source of truth for the entire app
const store = configureStore({
  // Combine multiple reducers into one root reducer
  reducer: {
    counter: counterSlice.reducer,
    theme: themeSlice.reducer,
  },
});

// Step 3: Components using Redux hooks
function CounterDisplay() {
  // useSelector extracts data from the Redux store
  const count = useSelector((state) => state.counter.count);
  // useDispatch returns a function to dispatch actions
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      {/* Dispatch actions using the slice's action creators */}
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
