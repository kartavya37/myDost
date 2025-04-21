import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import { IoFastFoodOutline } from "react-icons/io5";
import bg from "../assets/kitchen-dark.jpg";

function RecipeGenerator() {
    const [input, setInput] = useState("");
    const [recipes, setRecipes] = useState([]);

    const apiKey = import.meta.env.VITE_RECIPE_API_KEY;

    // find by ingredient
    const fetchRecipes = async () => { // API call when click on button
        if (!input.trim()) return; // if quesy contains whitespaces than it will return from here only
        const res = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${input}&number=5&apiKey=${apiKey}`);
        const data = await res.json();
        setRecipes(data);
    };

    return (
        <div className={`min-h-screen bg-gray-900 text-black p-6 bg-cover bg-center`} 
            style={{ backgroundImage: recipes.length === 0 ? `url(${bg})` : "none" }}
        >
            <h2 className="text-3xl font-black  mb-6 text-center flex justify-center items-center gap-2 text-white">
                <IoFastFoodOutline size={30} /> Enter Ingredients {/* using react-icons */}
            </h2>
            
            <div className="max-w-xl mx-auto">

                <input type="text" placeholder="e.g. eggs, milk, flour" value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="p-3 w-full rounded-lg bg-gray-800 border border-gray-600 mb-4 text-white placeholder:text-gray-400"
                />

                <button onClick={fetchRecipes} className="w-full bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500 text-black py-2 rounded-lg font-semibold hover:opacity-90">
                    Generate Recipes
                </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}

export default RecipeGenerator;