// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';

const AddRecipeForm = () => {
  // State variables to store form data
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparationSteps, setPreparationSteps] = useState('');
  const [errors, setErrors] = useState({}); // State for validation errors

  // Validation function
  const validate = () => {
    const formErrors = {}; // Object to store errors
    if (!title) formErrors.title = "Title is required"; // Title validation
    if (!ingredients) formErrors.ingredients = "Ingredients are required"; // Ingredients validation
    if (!preparationSteps) formErrors.preparationSteps = "Preparation steps are required"; // Preparation steps validation

    return formErrors; // Return the errors object
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    // Validate the form
    const formErrors = validate();
    
    // If there are validation errors, set them in the state
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // If no errors, simulate form submission (e.g., send data to an API)
      console.log("Form submitted:", { title, ingredients, preparationSteps });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        {/* Recipe Title Field */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Recipe Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update title state with input value
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {/* Display error message if title is missing */}
          {errors.title && <p className="text-red-500 text-xs">{errors.title}</p>}
        </div>

        {/* Ingredients Field */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)} // Update ingredients state with input value
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            rows="4"
          />
          {/* Display error message if ingredients are missing */}
          {errors.ingredients && <p className="text-red-500 text-xs">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps Field */}
        <div className="mb-4">
          <label htmlFor="preparationSteps" className="block text-sm font-medium text-gray-700">Preparation Steps</label>
          <textarea
            id="preparationSteps"
            name="preparationSteps"
            value={preparationSteps}
            onChange={(e) => setPreparationSteps(e.target.value)} // Update preparationSteps state with input value
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            rows="4"
          />
          {/* Display error message if preparation steps are missing */}
          {errors.preparationSteps && <p className="text-red-500 text-xs">{errors.preparationSteps}</p>}
        </div>

        {/* Submit Button */}
        <div className="mb-4 text-center">
          <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
