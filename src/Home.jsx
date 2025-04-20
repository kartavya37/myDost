
import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-6">Welcome to MyDost 🤖</h1>
            <div className="flex gap-6">
                <Link
                    to="/generator"
                    className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600"
                >
                    🧪 Generate Recipe
                </Link>
                <Link
                    to="/finder"
                    className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600"
                >
                    🔍 Find a Recipe
                </Link>
                <Link
                    to="/AppTodo"
                    className="bg-yellow-500 text-white px-6 py-3 rounded-xl hover:bg-yellow-600"
                >
                    🗓️ Todo List
                </Link>
            </div>
        </div>
    );
}

export default Home;