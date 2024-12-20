import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';



function App() {
  return (
    <>
      
    </>
  )
}


// Task 0 App.jsx updated


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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsLis />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

// Task 2 App.jsx updated

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
