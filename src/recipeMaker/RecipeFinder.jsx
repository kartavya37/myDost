import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import bg from "../assets/jethalal.jpg";

function RecipeFinder() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const apiKey = import.meta.env.VITE_RECIPE_API_KEY;

    // search by query
    const fetchRecipes = async () => {
        if (!query.trim()) return; // if query contains whitespaces than it will return from here only
        const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&apiKey=${apiKey}`;
        const res = await fetch(url);
        const data = await res.json();
        setRecipes(data.results);
    };

    
    return (
        <div
            className="min-h-screen w-full text-white p-6 bg-gray-900"
            style={
                recipes.length === 0 ? {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#111827"
                } : {}
            }
        >
            <h1 className="text-3xl font-black text-white mb-6 text-center">🔍 Find Pakwaans</h1>

            <div className="max-w-xl mx-auto">
                <input
                    type="text"
                    value={query}
                    placeholder="e.g. pizza, burger, samosa"
                    onChange={(e) => setQuery(e.target.value)}
                    className="p-3 w-full rounded-lg bg-gray-800 border border-gray-600 mb-4 text-white placeholder:text-gray-400"
                />
                <button
                    onClick={fetchRecipes}
                    className="w-full bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500 text-black py-2 rounded-lg font-semibold hover:opacity-90"
                >
                    Search
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

export default RecipeFinder;