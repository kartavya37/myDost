import React, { useState } from "react";
import RecipeCard from "./RecipeCard";

function RecipeFinder() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const apiKey = "96c6989d0a044d33b4db8618b422996a";

    const fetchRecipes = async () => {
        if (!query.trim()) return;
        const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&apiKey=${apiKey}`;
        const res = await fetch(url);
        const data = await res.json();
        setRecipes(data.results);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">🔍 Find Pakwaans</h2>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. pizza, burger, somosa"
                className="p-2 border border-gray-300 rounded-md w-full mb-4"
            />
            <button
                onClick={fetchRecipes}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Search
            </button>

            {/* /Rendering recipe card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}

export default RecipeFinder;