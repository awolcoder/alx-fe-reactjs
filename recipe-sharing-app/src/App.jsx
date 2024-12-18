// ORIGINAL APP.JSX CODE
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


// Task 0 App.jsx updated
import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

// Task 1 App.jsx updated
// src/App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

// Task 2 App.jsx updated
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <div className="app">
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

// Task 3 App.jsx updated 
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default App
