
import React, { useEffect, useState } from "react";

function RecipeCard({ recipe }) {
    const [details, setDetails] = useState(null);
    const apiKey = "96c6989d0a044d33b4db8618b422996a";

    useEffect(() => {
        // Fetching recipe including nutrition and instructions
        fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?includeNutrition=true&apiKey=${apiKey}`)
            .then((res) => res.json())
            .then(setDetails);
    }, [recipe.id]);

    return (
        <div className="card p-4 shadow-md rounded-lg bg-white">
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-100 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{recipe.title}</h3>

            {/* displaying instructions */}
            {details && details.instructions && (
                <div className="mb-2">
                    <h4 className="font-semibold">🍽️ How to Cook:</h4>
                    <div className="text-sm text-gray-700"
                        //dangerouslySetInnerHTML allow raw HTML rendering
                        dangerouslySetInnerHTML={{__html: details.instructions || "No instructions available."}} 
                    />
                </div>
            )}

            {/* displaying nutritions */}
            {details && details.nutrition && (
                <div className="text-sm">
                    <p>🔥 Calories: {details.nutrition.nutrients.find(n => n.name === "Calories")?.amount} kcal</p>
                    <p>💪 Protein: {details.nutrition.nutrients.find(n => n.name === "Protein")?.amount} g</p>
                    <p>🥑 Fat: {details.nutrition.nutrients.find(n => n.name === "Fat")?.amount} g</p>
                </div>
            )}
        </div>
    );
}

export default RecipeCard;