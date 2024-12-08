import React, { useState } from 'react';

const AddRecipeForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        ingredients: '',
        steps: '',
    });
    const [error, setError] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!formData.title || !formData.ingredients || !formData.steps) {
            setError('All fields are required.');
            return;
        }

        if (formData.ingredients.split(',').length < 2) {
            setError('Please include at least two ingredients separated by commas.');
            return;
        }

        setError('');
        console.log('Form Data:', formData);

        // Reset form
        setFormData({ title: '', ingredients: '', steps: '' });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
            >
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a New Recipe</h2>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                        Recipe Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter recipe title"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-2">
                        Ingredients (comma-separated)
                    </label>
                    <textarea
                        id="ingredients"
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="E.g., flour, sugar, eggs"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="steps" className="block text-gray-700 font-medium mb-2">
                        Preparation Steps
                    </label>
                    <textarea
                        id="steps"
                        name="steps"
                        value={formData.steps}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Describe preparation steps"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                >
                    Submit Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipeForm;
