import React, { useEffect, useState } from "react";

function RecipeCard({ recipe }) {
    const [details, setDetails] = useState(null);
    const apiKey = "96c6989d0a044d33b4db8618b422996a";

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?includeNutrition=true&apiKey=${apiKey}`)
            .then((res) => res.json())
            .then(setDetails);
    }, [recipe.id]); // only runs when recipe.id changes

    return (
        <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-4 hover:scale-[1.01] transition-transform duration-200">
            <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-xl mb-4" /> {/* image */}

            <h3 className="text-xl font-bold mb-2"> {recipe.title} </h3> {/* title */}

            {details && details.instructions && (
                <div className="mb-3">
                    <h4 className="font-semibold mb-1">🍽️ How to Cook:</h4>
                    <div
                        className="text-sm text-gray-300"
                        dangerouslySetInnerHTML={{ __html: details.instructions || "No instructions available." }} // if details.instruction contains any HTML it will render it as it is 
                    />
                </div>
            )}

            {details && details.nutrition && (
                <div className="text-sm text-orange-300">
                    <p>🔥 Calories: {details.nutrition.nutrients.find(n => n.name === "Calories")?.amount} kcal</p>
                    <p>💪 Protein: {details.nutrition.nutrients.find(n => n.name === "Protein")?.amount} g</p>
                    <p>🥑 Fat: {details.nutrition.nutrients.find(n => n.name === "Fat")?.amount} g</p>
                </div>
            )}
        </div>
    );
}

export default RecipeCard;