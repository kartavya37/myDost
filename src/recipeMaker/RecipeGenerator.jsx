import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import { IoFastFoodOutline } from "react-icons/io5";

function RecipeGenerator() {
    const [input, setInput] = useState("");
    const [recipes, setRecipes] = useState([]);

    const apiKey = "96c6989d0a044d33b4db8618b422996a";

    const fetchRecipes = async () => {
        if (!input.trim()) return;
        const res = await fetch(
            `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${input}&number=5&apiKey=${apiKey}`
        );
        const data = await res.json();
        setRecipes(data);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">{<IoFastFoodOutline />} Enter Ingredients</h2>  {/* using icons from react-icons */}
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. eggs, milk, flour"
                className="p-2 border border-gray-300 rounded-md w-full mb-4"
            />
            <button
                onClick={fetchRecipes}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Generate Recipes
            </button>

            {/* /Rendering recipe card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe}  />
                ))}
            </div>
        </div>
    );
}

export default RecipeGenerator;
