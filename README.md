# Redux vs Context API Comparison

This project is an educational example designed to demonstrate and compare two popular state management solutions in React: Redux and Context API. It provides side-by-side implementations of a simple counter and theme toggler to illustrate how each approach handles state management in a React application.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Context API Implementation](#context-api-implementation)
- [Redux Implementation](#redux-implementation)
- [Pros and Cons](#pros-and-cons)
- [Running the Project](#running-the-project)
- [Technologies Used](#technologies-used)
- [License](#license)

## Overview

The application showcases two pages:

- **Context Implementation** (`/context`): Uses React's Context API to manage a counter and theme state
- **Redux Implementation** (`/redux`): Uses Redux with @reduxjs/toolkit to manage the same counter and theme state

Both implementations feature:

- A counter that can increment, decrement, and (in Redux) reset
- A theme toggler that switches between light and dark themes
- Conditional rendering based on the counter value

## Project Structure

```
├── pages/
│   ├── context.js     # Context API implementation
│   ├── redux.js       # Redux implementation
│   ├── index.js       # Homepage with comparison
├── styles/
│   ├── Home.module.css # Styles for the homepage
├── package.json
└── README.md
```

## Context API Implementation

### How It Works

1. **Context Creation**: A context (`AppContext`) is created with default values for count, theme, and their respective updater functions
2. **Provider**: The `AppProvider` component wraps the app, managing state with `useState`
3. **Consumers**:
   - `CounterDisplay` uses the older Consumer pattern
   - `ThemeDisplay` uses the modern `useContext` hook
   - `ConditionalDisplay` uses Consumer for conditional content

### When to Use Context API

- Small to medium-sized applications
- Simple state sharing across components
- Avoiding prop drilling
- Straightforward state updates

## Redux Implementation

### How It Works

1. **Slices**: Two slices using `createSlice`:

   ```javascript
   const counterSlice = createSlice({
     name: 'counter',
     initialState: { count: 0 },
     reducers: {
       increment: state => {
         state.count += 1;
       },
       // ...
     },
   });
   ```

2. **Store**: Configured with `configureStore`
3. **Components**: Use `useSelector` and `useDispatch` hooks

### When to Use Redux

- Large-scale applications
- Complex state requirements
- Need for middleware
- Strict state organization

## Pros and Cons

### Context API

#### Pros

- Built into React
- Simpler implementation
- Less boilerplate
- Ideal for small to medium apps
- Easy to understand

#### Cons

- No built-in state management
- Less performant for frequent updates
- Limited dev tools
- Can become messy in large apps
- No built-in persistence; state resets on browser refresh unless manually handled (e.g., with 'localStorage')

### Redux

#### Pros

- Centralized state management
- Powerful dev tools
- Middleware support
- Predictable state updates
- Great for large applications
- Automatic state persistence across browser refreshes with 'redux-persist'

#### Cons

- More boilerplate code
- Steeper learning curve
- Additional dependency
- Overkill for small apps

## Running the Project

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd redux-vs-context
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm run dev
   ```

4. **Access the Application**:
   - Open `http://localhost:3000` in your browser
   - Navigate to `/context` for Context API implementation
   - Navigate to `/redux` for Redux implementation

## Technologies Used

- **React**: For building the UI
- **Next.js**: For server-side rendering and routing
- **Redux** with `@reduxjs/toolkit`: For Redux state management
- **React Context API**: For context-based state management
- **CSS Modules**: For styling the homepage

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it for educational purposes.
