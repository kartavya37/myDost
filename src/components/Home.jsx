import React from "react";
import { FaRobot, FaFlask, FaSearch, FaCalendarAlt, FaRegNewspaper } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-5xl font-extrabold mb-10 text-cyan-400 drop-shadow-lg animate-pulse">
                Welcome to Myदोस्त 
            </h1>

            <div className="flex flex-wrap gap-6 justify-center">
                
                {/* Link to the recipe generator page */}
                <Link className="w-full sm:w-60 text-center transform transition-transform duration-300 scale-100 hover:scale-110 bg-green-500 text-white px-6 py-5 text-lg font-semibold rounded-2xl shadow-lg hover:bg-green-600"
                    to="/generator"
                >
                    {<FaFlask />} Generate Recipe
                </Link>

                {/* Link to the recipe finder page */}
                <Link className="w-full sm:w-60 text-center transform transition-transform duration-300 scale-100 hover:scale-110 bg-blue-500 text-white px-6 py-5 text-lg font-semibold rounded-2xl shadow-lg hover:bg-blue-600"
                    to="/finder"
                >
                    {<FaSearch />} Find a Recipe
                </Link>

                {/* Link to the todoList */}
                <Link className="w-full sm:w-60 text-center transform transition-transform duration-300 scale-100 hover:scale-110 bg-yellow-500 text-black px-6 py-5 text-lg font-semibold rounded-2xl shadow-lg hover:bg-yellow-600"
                    to="/AppTodo"
                >
                    {<FaCalendarAlt />} Todo List
                </Link>

                {/* Link to the News page */}
                <Link className="w-full sm:w-60 text-center transform transition-transform duration-300 scale-100 hover:scale-110 bg-red-500 text-white px-6 py-5 text-lg font-semibold rounded-2xl shadow-lg hover:bg-red-600"
                    to="/news"
                >
                    <FaRegNewspaper/>  News
                </Link>
                
            </div>
        </div>
    );
}

export default Home;